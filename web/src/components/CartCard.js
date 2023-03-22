import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartCard.module.css';

export default function CartCard({ product, id, addOne, removeOne, removeAll }) {
  const { name, image, price, quantity } = product;

  return (
    <div className={ styles.container }>
      <div className={ styles.card }>
        <div className={ styles.info }>
          <img src={ image } alt={ name } />
          <div className={ styles.data }>
            <p>{ name }</p>
            <h3>{ `R$ ${price.toFixed(2).replace('.', ',')}` }</h3>
          </div>
        </div>
        <div className={ styles.options }>
          <div className={ styles.quant }>
            <button
              className={ styles.quantBtn }
              type="button"
              value={ id }
              onClick={ addOne }
            >
              Δ
            </button>
            <p>{ quantity }</p>
            <button
              className={ styles.quantBtn }
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
          <button
            type="button"
            className={ styles.removeBtn }
            value={ id }
            onClick={ removeAll }
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
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
  removeAll: PropTypes.func.isRequired,
};
