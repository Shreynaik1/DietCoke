import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Nutrition from './pages/Nutrition';
import Campaigns from './pages/Campaigns';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
