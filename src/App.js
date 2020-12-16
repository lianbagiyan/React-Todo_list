import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product/Product';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <>
      <Product 
        name='apple' 
        price='35$' 
        description='Fresh apple' 
      />
      <ToDo />
    </>
  );
}

export default App;
