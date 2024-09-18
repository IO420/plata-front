"use client";
import { useState } from "react";
import "../../style/global.css";
import "./create.css";
import { useFetch } from "../../services/productService";

const useField = (type: string) => {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
    placeholder: type.charAt(0).toUpperCase() + type.slice(1),
  };
};

export default function CreateProduct() {
  const name = useField("text");
  const description = useField("text");
  const price = useField("number");
  const [kinds, setKinds] = useState<string[]>([""]);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleKindChange = (index: number, value: string) => {
    const newKinds = [...kinds];
    newKinds[index] = value;
    setKinds(newKinds);
  };

  const handleAddKind = () => {
    setKinds([...kinds, ""]);
  };

  const handleRemoveKind = (index: number) => {
    const newKinds = kinds.filter((_, i) => i !== index);
    setKinds(newKinds);
  };

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };
    reader.onerror = (error) => {
      console.error("Error al convertir la imagen a base64:", error);
    };
  };

  const handleImageChange = (file: File) => {
    setPreview(URL.createObjectURL(file));
    convertToBase64(file);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      handleImageChange(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleImageChange(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const imageUploadData = {
      fotografia: imageBase64,
      nombre: name.value,
    };
  
    try {
      const imageResponse = await fetch("http://localhost:3000/images", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageUploadData),
      });
  
      const imageResult = await imageResponse.json();
  
      if (!imageResponse.ok) {
        console.error("Error uploading image:", imageResult);
        return;
      }
  
      const imageUrl = imageResult.imageUrl;
  

      const productData = {
        name: name.value.trim(),
        description: description.value.trim(),
        price: Number(price.value),
        kinds: kinds.filter((kind) => kind.trim() !== ""),
        url: imageUrl,
      };
  
      const productResponse = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      const productResult = await productResponse.json();
  
      if (!productResponse.ok) {
        console.error("Error creating product:", productResult);
      } else {
        console.log("Product created successfully:", productResult);
      }
    } catch (error) {
      console.error("Error during product creation:", error);
    }
  };
  

  return (
    <div className="classic">
      <form className="form flex row" onSubmit={handleSubmit}>
        <div className="input center">
          <label htmlFor="image">Imagen</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
          <div
            className="image-preview"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById("image")?.click()}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="preview-img" />
            ) : (
              <span className="preview-img">
                Arrastra una imagen o haz clic para seleccionar
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="input">
            <label>Nombre</label>
            <input id="name" {...name} />
          </div>

          <div className="input">
            <label>Descripción</label>
            <input id="description" {...description} />
          </div>

          <div className="input">
            <label>Precio</label>
            <input id="price" {...price} />
          </div>

          {kinds.map((kind, index) => (
            <div className="kind-wrapper" key={index}>
              <label htmlFor={`kind-${index}`}>Tipo {index + 1}</label>
              <input
                id={`kind-${index}`}
                type="text"
                value={kind}
                onChange={(e) => handleKindChange(index, e.target.value)}
                placeholder="Tipo"
              />
              <span
                className="delete-button"
                onClick={() => handleRemoveKind(index)}
                role="button"
              >
                ×
              </span>
            </div>
          ))}

          <button type="button" onClick={handleAddKind}>
            Agregar otro kind
          </button>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
