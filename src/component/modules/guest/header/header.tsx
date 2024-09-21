import React from 'react';
import Image from 'next/image';
import { FaSearch, FaUser, FaShoppingCart, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Info Bar */}
      <div className="flex justify-between items-center py-2 px-4 text-sm text-gray-600 bg-gray-50">
        <div>
          <span>📅 7 days a week from 9.00 am to 7.00 pm</span>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <select className="bg-transparent border-none focus:ring-0 text-sm">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="LKR">LKR</option>
            </select>
          </div>
          <a href="#" className="hover:underline">
            <FaPhone />Contact
          </a>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="font-semibold text-yellow-600">
            <span className="text-3xl font-bold">MyGems</span>
            <span className="text-xl">.lk</span>
          </a>
        </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-6 py-3 bg-white">
        {/* Left: Logo */}
       

        {/* Middle: Navigation Links */}
        <ul className="flex space-x-6 items-center">
          <li className="relative group">
            <button className="text-gray-700 px-3 py-2 bg-transparent rounded-full hover:bg-pink-100 hover:text-pink-600 transition duration-300">
              Shop <span className="text-xs">▼</span>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md p-2">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Category 1</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Category 2</a>
            </div>
          </li>
          <li>
            <a href="#" className="text-gray-700 px-3 py-2 bg-transparent rounded-full hover:bg-pink-100 hover:text-pink-600 transition duration-300">
              Home
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-700 px-3 py-2 bg-transparent rounded-full hover:bg-pink-100 hover:text-pink-600 transition duration-300">
              Gem Education <span className="text-xs">▼</span>
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md p-2">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Education 1</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Education 2</a>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-700 px-3 py-2 bg-transparent rounded-full hover:bg-pink-100 hover:text-pink-600 transition duration-300">
              Gem History <span className="text-xs">▼</span>
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md p-2">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">History 1</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">History 2</a>
            </div>
          </li>
          <li>
            <a href="#" className="text-gray-700 px-3 py-2 bg-transparent rounded-full hover:bg-pink-100 hover:text-pink-600 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 px-3 py-2 bg-transparent rounded-full hover:bg-pink-100 hover:text-pink-600 transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right: Action Icons */}
        <div className="flex space-x-4 items-center">
          {/* Search Icon */}
          <button className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
            🔍
          </button>

          {/* User Account Icon */}
          <button className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
            👤
          </button>

          {/* Globe Icon (Language selection example) */}
          <button className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
            🌐
          </button>

          {/* Cart Icon with item count */}
          <button className="p-2 rounded-full bg-pink-500 text-white relative">
            🛒 Cart: 0 Items
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">1</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
