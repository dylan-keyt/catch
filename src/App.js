import React from 'react';
import './App.css';
import Header from './components/header'
import SortProvider from './context/sort'
import ProductList from './components/product-list';

const App = () => {
  return (
    <div className="App" data-testid="App">
      <SortProvider>
        <Header />
        <ProductList />
      </SortProvider>
    </div>
  );
}

export default App;
