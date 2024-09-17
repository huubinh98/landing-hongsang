import useTranslation from "@/hooks/useTranslation";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailLine,
  RiPhoneLine,
  RiTwitterXFill,
} from "@remixicon/react";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const { currentLanguage, translateAllText } = useTranslation("vi");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hideMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-yellow-400 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row md:items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
                <RiPhoneLine color="#404A3D" />
              </div>
              <span className="text-[#404A3D]">Phone: (+84) 984 725 502 </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
                <RiMailLine color="#404A3D" />
              </div>
              <span className="text-[#404A3D]">
                Email: ctyhongsang78@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
                <Image
                  height={20}
                  width={20}
                  src={"/img/tax-small.png"}
                  alt=""
                />
              </div>
              <span className="text-[#404A3D]">Tax: 1201606071</span>
            </div>
          </div>
          <ul className="flex gap-4 mt-4 md:mt-0">
            <li className="w-8 h-8 bg-[#F8F7F0] hover:bg-[#d3d3d0] rounded-full flex justify-center items-center">
              <a href="https://www.facebook.com/CTyHONGSANG" target="_blank">
                <RiFacebookFill color="#adadac" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/img/logo.png" alt="Hongsang Fruit" className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-12 xl:space-x-16">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600"
              onClick={(e) => smoothScroll(e, "home")}
            >
              Trang chủ
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600"
              onClick={(e) => smoothScroll(e, "about")}
            >
              Về chúng tôi
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-green-600"
              onClick={(e) => smoothScroll(e, "products")}
            >
              Sản phẩm
            </a>
            <a
              href="#news"
              className="text-gray-700 hover:text-green-600"
              onClick={(e) => smoothScroll(e, "news")}
            >
              Tin tức
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600"
              onClick={(e) => smoothScroll(e, "contact")}
            >
              Liên hệ
            </a>
          </nav>

          {/* Desktop Language Selection (Right Aligned) */}
          <div className="hidden md:block relative">
            <select
              id="language"
              onChange={(e) => {
                sessionStorage.setItem("language", e.target.value);
                translateAllText(e.target.value);
              }}
              value={currentLanguage}
              className="p-2 rounded border border-gray-600 hover:border-green-400 focus:outline-none focus:ring-2 transition duration-300 cursor-pointer"
            >
              <option value="vi">🇻🇳 Vi</option>
              <option value="en">🇬🇧 En</option>
              <option value="zh">🇨🇳 中文</option>
              <option value="hi">🇮🇳 हिन्दी</option>
              <option value="th">🇹🇭 ไทย</option>
            </select>
          </div>

          {/* Mobile Menu and Language (Aligned Together) */}
          <div className="md:hidden flex items-center">
            <div className="relative mr-2">
              <select
                id="language"
                onChange={(e) => {
                  sessionStorage.setItem("language", e.target.value);
                  translateAllText(e.target.value);
                }}
                value={currentLanguage}
                className="p-2 rounded border border-gray-600 hover:border-green-400 focus:outline-none focus:ring-2 transition duration-300 cursor-pointer"
              >
                <option value="vi">Vi</option>
                <option value="en">En</option>
                <option value="zh">中文</option>
                <option value="hi">हिन्दी</option>
                <option value="th">ไทย</option>
              </select>
            </div>

            {/* Hamburger Icon */}
            <button
              className="menu-btn focus:outline-none pr-6"
              onClick={toggleMenu}
            >
              <div className="relative w-8 h-8 flex flex-col justify-between items-center transform transition-all duration-500 ease-in-out">
                {/* Top bar */}
                <span
                  className={`block h-1 w-full bg-gray-800 transform transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                {/* Middle bar */}
                <span
                  className={`block h-1 w-full bg-gray-800 transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                {/* Bottom bar */}
                <span
                  className={`block h-1 w-full bg-gray-800 transform transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "max-h-screen" : "max-h-0"
            } overflow-hidden transition-all duration-500 ease-in-out absolute top-[272px] left-0 w-full bg-white shadow-md z-20 md:hidden`}
          >
            <nav className="flex flex-col space-y-2 px-6 py-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600"
                onClick={(e) => {
                  smoothScroll(e, "home");
                  hideMobileMenu();
                }}
              >
                Trang chủ
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600"
                onClick={(e) => {
                  smoothScroll(e, "about");
                  hideMobileMenu();
                }}
              >
                Về chúng tôi
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-green-600"
                onClick={(e) => {
                  smoothScroll(e, "products");
                  hideMobileMenu();
                }}
              >
                Sản phẩm
              </a>
              <a
                href="#news"
                className="text-gray-700 hover:text-green-600"
                onClick={(e) => {
                  smoothScroll(e, "news");
                  hideMobileMenu();
                }}
              >
                Tin tức
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600"
                onClick={(e) => {
                  smoothScroll(e, "contact");
                  hideMobileMenu();
                }}
              >
                Liên hệ
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
