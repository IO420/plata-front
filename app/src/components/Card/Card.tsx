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
        <h2 className='text'>{title}</h2>
      </div>
      <div className='cardBody'>
        <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" className='cardImage' />
        <p className='text'>{content}</p>
        <p className='text'>{price}</p>
      </div>
    </div>
  );
}
