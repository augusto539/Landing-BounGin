import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Secctions/Header/Header';
import Botanicos from './Secctions/Botanicos/Botanicos';

import Contacto from './Secctions/Contacto/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Botanicos/>
    <Contacto/>
  </React.StrictMode>
);