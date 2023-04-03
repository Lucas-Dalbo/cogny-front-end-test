import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar.js';
import StoreCard from '../components/StoreCard.js';
import { getProducts } from '../firebase/products.js';
import styles from './Store.module.css';
import { SaleContext } from '../context/SaleContext.js';
import Footer from '../components/Footer.js';

export default function Store() {
  const { itens, setItens, local } = useContext(SaleContext);
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(null);

  const onClickAdd = ({ target }) => {
    const { value } = target;
    const trueValue = JSON.parse(value);
    const isItem = itens.findIndex((p) => p.name === trueValue.name);
    if (isItem < 0) {
      const updatedItens = [...itens, { ...trueValue, quantity: 1 }];
      localStorage.setItem(local, JSON.stringify(updatedItens));
      setItens(updatedItens);
    }
  };

  const onClickRemove = ({ target }) => {
    const { value } = target;
    const trueValue = JSON.parse(value);
    const updatedItens = itens.filter((p) => p.name !== trueValue.name);
    localStorage.setItem(local, JSON.stringify(updatedItens));
    setItens([...updatedItens]);
  };

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
              <StoreCard
                key={ id }
                product={ p }
                onClickAdd={ onClickAdd }
                onClickRemove={ onClickRemove }
              />
            ))
          ) : (
            <h1>Carregando...</h1>
          )
        }
        {
          err && (<h2>{ err }</h2>)
        }
      </main>
      <Footer />
    </div>
  );
}
