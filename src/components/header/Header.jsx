import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className=" py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">
          <span className="font-logo">Furniro</span>
        </div>

        <nav className="flex space-x-8 text-gray-700">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Shop</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </nav>

        <div className="flex space-x-6 text-gray-700 text-xl">
          <a href="#" className="hover:text-yellow-500">
            <FaUser />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaSearch />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaHeart />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
