import { KindProps } from "../../services/type";
import "./kind.css";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function Kind({ kind }: KindProps) {
  if (!kind) {
    return null;
  }

  return (
    <button className="kind" onClick={() => kind.onClick(kind.name)}>
      <img src={kind.url} alt="Imagen de ejemplo" className="kindimg" />
      <div className="kindHeader">
        <h2>{capitalizeFirstLetter(kind.name)}</h2>
      </div>
    </button>
  );
}
