import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartCard.module.css';

export default function CartCard({ product, id, addOne, removeOne }) {
  const { name, image, price, quantity } = product;

  return (
    <div>
      <div className={ styles.card }>
        <img src={ image } alt={ name } />
        <div className={ styles.data }>
          <p>{ name }</p>
          <h3>{ `R$ ${price.toFixed(2).replace('.', ',')}` }</h3>
        </div>
        <div className={ styles.quant }>
          <button
            type="button"
            value={ id }
            onClick={ addOne }
          >
            Δ
          </button>
          <p>{ quantity }</p>
          <button
            type="button"
            value={ id }
            onClick={ removeOne }
            disabled={ quantity === 1 }
          >
            ∇
          </button>
        </div>
        <h3 className={ styles.total }>
          { `R$ ${(price * quantity).toFixed(2).replace('.', ',')}` }
        </h3>
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
  id: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  removeOne: PropTypes.func.isRequired,
};
