import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hideMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/img/logo.png" alt="HOSA Fruit" className="h-12" />
        </div>

        {/* Hamburger Icon (for mobile/tablet) */}
        <div className="md:hidden">
          <button
            className="menu-btn focus:outline-none pr-6"
            onClick={toggleMenu}
          >
            <div className="relative w-8 h-8 flex flex-col justify-between items-center transform transition-all duration-500 ease-in-out">
              {/* Top bar */}
              <span className={`block h-1 w-full bg-gray-800 transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              {/* Middle bar */}
              <span className={`block h-1 w-full bg-gray-800 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              {/* Bottom bar */}
              <span className={`block h-1 w-full bg-gray-800 transform transition-all duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-green-600">
            Trang chủ
          </a>
          <a href="#about" className="text-gray-700 hover:text-green-600">
            Về chúng tôi
          </a>
          <a href="#products" className="text-gray-700 hover:text-green-600">
            Sản phẩm
          </a>
          <a href="#news" className="text-gray-700 hover:text-green-600">
            Tin tức
          </a>
          <a href="#contact" className="text-gray-700 hover:text-green-600">
            Liên hệ
          </a>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden transition-all duration-500 ease-in-out absolute top-16 left-0 w-full bg-white shadow-md z-20 md:hidden`}
        >
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <a href="#home" className="text-gray-700 hover:text-green-600" onClick={hideMobileMenu}>
              Trang chủ
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600" onClick={hideMobileMenu}>
              Về chúng tôi
            </a>
            <a href="#products" className="text-gray-700 hover:text-green-600" onClick={hideMobileMenu}>
              Sản phẩm
            </a>
            <a href="#news" className="text-gray-700 hover:text-green-600" onClick={hideMobileMenu}>
              Tin tức
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600" onClick={hideMobileMenu}>
              Liên hệ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
