import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/cognyshoes.svg';
import styles from './NavBar.module.css';
import { SaleContext } from '../context/SaleContext.js';

export default function NavBar() {
  const { itens } = useContext(SaleContext);

  return (
    <header className={ styles.header }>
      <Link to="/" className={ styles.image }>
        <img
          src={ Logo }
          alt="logotipo cognyshoes"
        />
      </Link>
      <div className={ styles.cart }>
        <Link to="/cart">
          <h3>Meu carrinho</h3>
          <p>
            {`${itens.length} item(s)`}
          </p>
        </Link>
      </div>
    </header>
  );
}
