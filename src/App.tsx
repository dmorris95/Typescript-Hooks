import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div>
      <h2>The Counter</h2>
      <Counter />
      <br/>
      <h2>The Shopping Cart</h2>
      <ShoppingCart />
    </div>
  );
}

export default App;
