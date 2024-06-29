import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import Product from './components/Product';
import ProductGrid from './components/Product_grid';
import BlogGrid from './components/BlogGrid';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products-grid" element={<ProductGrid />} />
          <Route path="/blog-grid" element={<BlogGrid/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
