import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.js';
import StoreCard from '../components/StoreCard.js';
import { getProducts } from '../firebase/products.js';
import styles from './Store.module.css';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (e) {
        console.log(e);
        setProducts([]);
        setErr('Um erro ocorreu. Recarregue a página');
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <main className={ styles.container }>
        {
          products.length !== 0 ? (
            products.map((p, id) => (
              <StoreCard key={ id } product={ p } />
            ))
          ) : (
            <h1>Carregando...</h1>
          )
        }
        {
          err && (<h2>{ err }</h2>)
        }
      </main>
    </div>
  );
}
