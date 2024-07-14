import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WomensShoes from './components/WomensShoes';
import MensShoes from './components/MensShoes';
import KidsShoes from './components/KidsShoes';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './components/CartContext'; // Correct the path as per your project structure

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar />
          <Routes>  
            <Route path="/" element={<HomePage />} />
            <Route path="/womens" element={<WomensShoes />} />
            <Route path="/mens" element={<MensShoes />} />
            <Route path="/kids" element={<KidsShoes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

