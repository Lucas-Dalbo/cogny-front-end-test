import React, { useContext } from 'react';
import NavBar from '../components/NavBar.js';
import { SaleContext } from '../context/SaleContext.js';
import { saveSale } from '../firebase/sales.js';
import styles from './Cart.module.css';
import CartCard from '../components/CartCard.js';

export default function Cart() {
  const { itens, setItens, local } = useContext(SaleContext);
  console.log(itens, setItens, local);

  const onClick = async () => {
    await saveSale(itens);
  };
  console.log(onClick);
  return (
    <div>
      <NavBar />
      <main className={ styles.container }>
        <div className={ styles.header }>
          <h3>PRODUTO</h3>
          <h3>QTD</h3>
          <h3>PREÇO</h3>
        </div>
        {
          itens.length !== 0 ? (
            itens.map((p, id) => (
              <CartCard key={ id } product={ p } />
            ))
          ) : (
            <h1>Ainda sem produtos no carrinho!</h1>
          )
        }
      </main>
    </div>
  );
}
