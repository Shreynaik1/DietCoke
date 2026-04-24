import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-white hover:opacity-80 transition-opacity">
          DIET <span className="text-primary">COLA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <Link to="/products" className="text-gray-300 hover:text-white transition-colors">PRODUCTS</Link>
          <Link to="/nutrition" className="text-gray-300 hover:text-white transition-colors">NUTRITION</Link>
          <Link to="/campaigns" className="text-gray-300 hover:text-white transition-colors">CAMPAIGNS</Link>
          <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">SHOP</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-zinc-800 flex flex-col items-center py-8 space-y-6 md:hidden"
          >
            <Link to="/products" className="text-lg font-medium text-gray-300 hover:text-white">PRODUCTS</Link>
            <Link to="/nutrition" className="text-lg font-medium text-gray-300 hover:text-white">NUTRITION</Link>
            <Link to="/campaigns" className="text-lg font-medium text-gray-300 hover:text-white">CAMPAIGNS</Link>
            <Link to="/shop" className="text-lg font-medium text-gray-300 hover:text-white">SHOP</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
