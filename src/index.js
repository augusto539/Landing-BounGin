import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Secctions/Header/Header';
import Botanicos from './Secctions/Botanicos/Botanicos';
import Equipo from './Secctions/Equipo/Equipo';
import Batchs from './Secctions/Batchs/Batchs';
import Contacto from './Secctions/Contacto/Contacto';
import Footer from './Secctions/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Botanicos/>
    <h3 className='equipoh3'> El Equipo </h3>
    <Equipo/>
    <h3 className='equipoh3'> La Produccion </h3>
    <Batchs/>
    <Contacto/>
    <Footer/>
  </React.StrictMode>
);