import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Store from './pages/Store.js';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Store /> } />
      </Routes>
    </div>
  );
}

export default App;
