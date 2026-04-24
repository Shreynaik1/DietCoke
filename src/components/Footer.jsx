import React from 'react';
import logoSvg from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src={logoSvg} alt="Diet Cola Logo" className="h-10" />
            </div>
            <p className="text-gray-500 max-w-sm">
              Refresh your world. Stay bold, stay crisp, stay unapologetic.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Diet Cola Concept. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
