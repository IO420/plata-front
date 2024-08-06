"use client";
import { useState } from "react";
import "../../style/global.css";

const useField = (type: string) => {
  const [value, setValue] = useState('');

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return { type, value, onChange};
};

export default function CreateProduct() {
  const name = useField("text");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = {
      name,
    };

    console.log(data);
  };

  return (
    <div className="classic">
      <form className="form">
        <div className="input" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input {...name} type="text" placeholder="Nombre" />
        </div>

        <div className="input">
          <label>Descripcion</label>
          <input type="text" placeholder="Descripcion" />
        </div>

        <div className="input">
          <label>Precio</label>
          <input type="text" placeholder="Precio" />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
