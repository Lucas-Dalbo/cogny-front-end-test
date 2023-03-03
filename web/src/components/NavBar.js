import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/cognyshoes.svg';
import styles from './NavBar.module.css';

export default function NavBar() {
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
          <p>0 item(s)</p>
        </Link>
      </div>
    </header>
  );
}
