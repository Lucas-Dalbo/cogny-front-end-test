import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartCard.module.css';

export default function CartCard({ product }) {
  const { name, image, price, quantity } = product;

  return (
    <div>
      <div className={ styles.card }>
        <img src={ image } alt={ name } />
        <div className={ styles.data }>
          <p>{ name }</p>
          <h3>{ `R$ ${price.toFixed(2).replace('.', ',')}` }</h3>
        </div>
        <p>{ quantity }</p>
        <h3>{ `R$ ${price.toFixed(2).replace('.', ',')}` }</h3>
      </div>
      <hr />
    </div>
  );
}

CartCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};
