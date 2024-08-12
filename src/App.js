import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Navbar from "./Components/navbar";
import Main from "./Pages/main/main";
import Shop from "./Pages/art/art";
import About from "./Pages/about/about";
import Cart from "./Pages/cart/cart";
import { CartProvider } from "./Context/cart-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Pages/checkout/checkout";
import Thanks from "./Pages/thanks/thanks";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/art" element={<Shop />} />
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
