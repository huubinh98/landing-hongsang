import useTranslation from "@/hooks/useTranslation";
import { RiFacebookFill, RiMailLine, RiPhoneLine } from "@remixicon/react";
import Image from "next/image";
import React, {useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Header = () => {
  const { currentLanguage, translateAllText } = useTranslation("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log('currentLanguage', currentLanguage)

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
      <div className="bg-yellow-400 py-2 px-4 md:px-0">
        <div className="container mx-auto text-white text-sm">
          <Swiper
            slidesPerView={1} // Để các item trượt mượt không bị khóa vào 1 slide
            spaceBetween={10}
            loop={true} // Cho phép slider lặp lại vô hạn
            autoplay={{
              delay: 0, // Loại bỏ thời gian delay để slider chạy liên tục
              disableOnInteraction: false, // Giữ autoplay ngay cả khi người dùng tương tác
            }}
            speed={5000} // Thời gian trượt giữa các slide (ms)
            freeMode={true} // Cho phép trượt tự do, không khóa vào từng slide
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className="flex justify-between items-center mx-auto"
            modules={[Autoplay, FreeMode]}
          >
            <SwiperSlide>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
                  <RiPhoneLine color="#404A3D" />
                </div>
                <span className="text-[#404A3D]">
                  Phone: (+84) 984 725 502{" "}
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
                  <RiMailLine color="#404A3D" />
                </div>
                <span className="text-[#404A3D]">
                  Email: ctyhongsang78@gmail.com
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2">
              <a className="w-8 h-8 bg-[#F8F7F0] hover:bg-[#d3d3d0] rounded-full flex justify-center items-center" href="https://www.facebook.com/CTyHONGSANG" target="_blank">
                <RiFacebookFill color="#adadac" />
              </a>
                <span className="text-[#404A3D]">Facebook</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 pl-4 md:pl-0">
          <div className="flex items-center">
            <img src="/img/logo.png" alt="Hongsang Fruit" className="h-8 md:h-12" />
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
              <option value="en">🇬🇧 En</option>
              <option value="vi">🇻🇳 Vi</option>
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
                <option value="en">En</option>
                <option value="vi">Vi</option>
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
              <div className="relative w-6 h-6 flex flex-col justify-between items-center transform transition-all duration-500 ease-in-out">
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
                    isMenuOpen ? "-rotate-45 -translate-y-3" : ""
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
