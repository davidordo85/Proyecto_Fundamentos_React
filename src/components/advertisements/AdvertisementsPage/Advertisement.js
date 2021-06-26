import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Advertisement = ({ id, name, price, sale, tags, createdAt, history }) => {
  const handleClick = () => {
    history.push(`/advert/${id}`);
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
