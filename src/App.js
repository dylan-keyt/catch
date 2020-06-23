import React, {useState} from 'react';
import './App.css';
import Header from './components/header'
import { SortProvider } from './context/sortContext'
import { SORT_METHODS } from './constants/sortMethods'
import ProductList from './components/product-list';

const App = () => {
  const [sortMethod, setSortMethod] = useState(Object.keys(SORT_METHODS)[0])
  return (
    <div className="App">
      <SortProvider value={setSortMethod}>
        <Header />
      </SortProvider>
      <ProductList sortMethod={sortMethod} />
    </div>
  );
}

export default App;
