import React from 'react';
import '../../style/card.css';

interface CardProps {
  title: string;
  content: string;
  price: string;
}

export default function Card({ title, content, price }: CardProps) {
  return (
    <div className='card'>
      <div className='cardHeader'>
        <h2>{title}</h2>
      </div>
      <div className='cardBody'>
        <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" className='cardImage' />
        <p>{content}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
