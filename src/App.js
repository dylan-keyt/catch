import React from 'react'
import './App.css'
import Header from './components/header'
import SortProvider from './context/sort'
import ProductList from './components/product-list'
import ProductProvider from './context/product'

const App = () => (
	<div className="App">
		<SortProvider>
			<ProductProvider>
				<Header />
				<ProductList />
			</ProductProvider>
		</SortProvider>
	</div>
)

export default App
