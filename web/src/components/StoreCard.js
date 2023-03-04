import React from 'react';
import PropTypes from 'prop-types';

export default function StoreCard({ product }) {
  console.log(product);

  const { name, image, price } = product;

  return (
    <div>
      <img src={ image } alt={ name } />
      <p>{ name }</p>
      <p>{ `R$ ${price.toFixed(2).replace('.', ',')}` }</p>
    </div>
  );
}

StoreCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
