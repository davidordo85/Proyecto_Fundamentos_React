import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Advertisement = ({ name, price, sale, tags, createdAt }) => {
  const handleClick = () => {
    alert('Construyendo un enlace al detalle...');
  };

  return (
    <article onClick={handleClick}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{sale ? 'Sell' : 'Buy'}</p>
      <p>{tags}</p>
      <time dateTime={createdAt}>
        {formatDistanceToNow(new Date(createdAt))}
      </time>
    </article>
  );
};

export default Advertisement;
