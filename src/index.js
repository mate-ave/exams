import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
// Usar BrowserRouter para el servidor local y HashRouter para el servidor en GHPages
root.render(
  // <BrowserRouter>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  // </BrowserRouter>
);