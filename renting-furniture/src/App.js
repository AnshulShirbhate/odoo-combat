import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import Product from './components/Product';
import ProductGrid from './components/Product_grid';
import BlogGrid from './components/BlogGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products-grid" element={<ProductGrid />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
