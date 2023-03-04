import React from 'react';
import PropTypes from 'prop-types';
import styles from './StoreCard.module.css';

export default function StoreCard({ product }) {
  const { name, image, price } = product;

  return (
    <div className={ styles.card }>
      <img src={ image } alt={ name } />
      <p>{ name }</p>
      <h3>{ `R$ ${price.toFixed(2).replace('.', ',')}` }</h3>
      <button className={ styles.btn }>
        <span className={ styles.t }>ADICIONAR AO CARRINHO</span>
      </button>
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
