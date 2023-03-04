import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StoreCard.module.css';
import { SaleContext } from '../context/SaleContext.js';

export default function StoreCard({ product, onClick }) {
  const { name, image, price } = product;
  const { itens } = useContext(SaleContext);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const isDisable = () => {
      const result = itens.findIndex((p) => p.name === name);
      setDisabled(result >= 0);
    };

    isDisable();
  }, [itens, name]);

  return (
    <div className={ styles.card }>
      <img src={ image } alt={ name } />
      <p>{ name }</p>
      <h3>{ `R$ ${price.toFixed(2).replace('.', ',')}` }</h3>
      <button
        onClick={ onClick }
        className={ styles.btn }
        value={ JSON.stringify(product) }
        disabled={ disabled }
      >
        {
          !disabled ? 'ADICIONAR AO CARRINHO' : 'ADICIONADO'
        }
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
  onClick: PropTypes.func.isRequired,
};
