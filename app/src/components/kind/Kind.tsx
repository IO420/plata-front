import "./kind.css";

interface KindProps {
  title: string;
  img: string;
  onClick: (title: string) => void;
}

export default function Kind(kindProps: KindProps) {
  return (
    <button className="kind" onClick={() => kindProps.onClick(kindProps.title)}>
      <img src={kindProps.img} alt="Imagen de ejemplo" className="cardImage" />
      <div className="kindHeader">
        <h2>{kindProps.title}</h2>
      </div>
    </button>
  );
}
