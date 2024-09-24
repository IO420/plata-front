"use client";
import { useState } from "react";

const useField = (type: string) => {
    const [value, setValue] = useState("");
  
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
  
    return {
      type,
      value,
      onChange,
    };
  };

export default function CreateKind() {
    const name = useField("text");
    const description = useField("text");
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

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

  return (
    <div className="classic">
      <form className="form">
        <h2>Creacion de Caracteristica</h2>
        <div className="input center">
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
          
        </div>
      </form>
    </div>
  );
}
