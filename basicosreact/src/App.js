import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';

function App() {

  const fecha = new Date().getFullYear();

  return (
    <div>
      <Header
      titulo = 'Tienda virtual'
      parrafo = 'lorem ipsum'
       />

      <Productos
      
      />

       <Footer
       fecha = {fecha}
       />
    </div>
    
  );
}


export default App;
