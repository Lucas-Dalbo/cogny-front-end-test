import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SaleContext } from './context/SaleContext.js';
import './App.css';
import Store from './pages/Store.js';
import Cart from './pages/Cart.js';

function App() {
  const { setItens, local } = useContext(SaleContext);
  console.log('hi');

  useEffect(() => {
    const localItens = localStorage.getItem(local);
    if (!localItens) {
      localStorage.setItem(local, JSON.stringify([]));
    } else {
      setItens(JSON.parse(localItens));
    }
  }, [setItens, local]);

  return (
    <Routes>
      <Route path="/" element={ <Store /> } />
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
  );
}

export default App;
