import React from 'react';
import './App.css';
import Product from './components/Product/Product';

function App() {
  return (
    <>
      <Product 
        name='bananas' 
        price='1$' 
        description='Fresh bananas from Ecuador' 
      />
      <Product 
        name='apple' 
        price='35$' 
        description='Fresh apple' 
      />
    </>
  );
}

export default App;
