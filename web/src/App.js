import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Store from './pages/Store.js';

function App() {
  return (
    <div>
      <h1>Teste</h1>
      <Routes>
        <Route path="/" element={ <Store /> } />
      </Routes>
    </div>
  );
}

export default App;
