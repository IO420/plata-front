"use client";
import { useState } from "react";
import "../../style/global.css";

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
  const [image, setImage] = useState<File | null>(null);

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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      name: name.value,
      description: description.value,
      price: price.value,
      kinds: kinds.filter((kind) => kind !== ""),
      image,
    };

    console.log(data);
  };

  return (
    <div className="classic">
      <form className="form flex" onSubmit={handleSubmit}>
        <div>
          <div className="input">
            <label htmlFor="image">Imagen</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div>
          <div className="input">
            <label htmlFor="name">Nombre</label>
            <input id="name" {...name} />
          </div>

          <div className="input">
            <label htmlFor="description">Descripción</label>
            <input id="description" {...description} />
          </div>

          <div className="input">
            <label htmlFor="price">Precio</label>
            <input id="price" {...price} />
          </div>

          {kinds.map((kind, index) => (
            <div className="input" key={index}>
              <label htmlFor={`kind-${index}`}>Tipo {index + 1}</label>
              <input
                id={`kind-${index}`}
                type="text"
                value={kind}
                onChange={(e) => handleKindChange(index, e.target.value)}
                placeholder="Tipo"
              />
              <button type="button" onClick={() => handleRemoveKind(index)}>
                Eliminar
              </button>
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
