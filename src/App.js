import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import Vision from "./pages/Vision";
import Store from "./pages/Store";
import Artist from "./pages/Artist";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/store" element={<Store />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;