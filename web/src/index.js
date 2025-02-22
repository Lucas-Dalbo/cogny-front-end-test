import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SaleProvider } from './context/SaleContext.js';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SaleProvider>
      <App />
    </SaleProvider>
  </BrowserRouter>,
);
