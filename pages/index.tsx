import { CoreValues, Country, Product } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import VideoSection from "@/components/Thumbnail";
import NewsSection from "@/components/NewSection";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import IngredientSection from "@/components/IngredientSection";
import Tag from "@/components/Tag";
import useTranslation from "@/hooks/useTranslation";
import Loading from "@/components/Loading";
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import { translateSpecificText } from "@/helper/translate";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);

  // Handle screen resize for mobile/tablet detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll to show "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //-------------func corevalue---------------
  const [currentContent, setCurrentContent] = useState<{
    title: string;
    content: string;
    imgs: string[];
  }>(CoreValues[0]);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(0);
  const { loading, currentLanguage } = useTranslation("en");
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    // setCurrentContent(CoreValues[index]); // Cập nhật nội dung khi click vào item
  };

    useEffect(() => {
    const lang = sessionStorage.getItem("language") || "en";
  
    // Lấy phần tử core-lang
    const contentElement = document.getElementById("core-lang");
  
    if (contentElement) {
      // Lấy tất cả các phần tử con có tag "p" trong core-lang
      const allChildElements = contentElement.getElementsByTagName("p");
  
      // Chuyển đổi HTMLCollection thành mảng
      const childElementsArray = Array.from(allChildElements);
  
      // Dịch từng phần tử con nếu có
      childElementsArray.forEach((childElement) => {
        translateSpecificText(childElement, lang);
      });
    }
  }, [currentContent, currentLanguage]);

  //-------------------------------

  return (
    <div className="bg-white">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />

          {/* Banner */}
          <section
            className="relative bg-cover bg-center w-full" // Đảm bảo banner chiếm toàn bộ chiều rộng
            style={{
              backgroundImage: "url('/img/banner-1.jpg')",
              paddingTop: "42.857%", // Đây là tỷ lệ 16:9, có thể điều chỉnh tùy thuộc vào tỷ lệ ảnh của bạn
            }}
          ></section>

          {/* About Section */}
          <section
            style={{
              backgroundImage: "url(/img/bg-about.png)",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
            id="about"
          >
            <div className="container mx-auto p-4 lg:py-12">
              <div className="flex flex-col-reverse md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <img
                  src="/img/about.jpg"
                  alt="Hồng Sang"
                  className="w-full md:w-1/2 rounded-lg"
                />
                <div className="w-full md:w-1/2">
                  <Tag text="Giới thiệu chung" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
                    Công ty TNHH Trái Cây Hồng Sang <br /> (Hongsang Fruit Co.,
                    Ltd)
                  </h3>
                  <p className="text-base md:text-lg">
                    Được thành lập từ năm 2011, chuyên sản xuất và kinh doanh
                    sầu riêng và các loại trái cây khác từ vùng đồng bằng sông
                    Cửu Long. Công ty đã phát triển mạnh mẽ từ việc thu mua và
                    xuất khẩu sầu riêng sang các thị trường quốc tế.
                  </p>
                  <section className="p-6 mt-4">
                    <div className="flex gap-5 items-start pb-4">
                      <div>
                        <img
                          srcSet="/img/icon-1.png 2x"
                          alt="Hồng Sang"
                          className="w-10 rounded-lg"
                        />
                      </div>
                      <div>
                        <h6 className="text-[#5B8C51] font-semibold mb-2">
                          Tầm nhìn
                        </h6>
                        <p>
                          Trở thành công ty hàng đầu trong lĩnh vực sầu riêng
                        </p>
                      </div>
                    </div>
                    <hr className="h-[1px] pb-4" />
                    <div className="flex gap-5 items-start">
                      <div className="w-10">
                        <img
                          srcSet="/img/icon-2.png 2x"
                          alt="Hồng Sang"
                          className="w-10 rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="text-[#5B8C51] font-semibold mb-2">
                          Sứ mệnh
                        </h6>
                        <p>
                          Cung cấp sản phẩm chất lượng dẫn đầu, góp phần nâng
                          cao chất lượng của trái sầu riêng của Việt Nam trên
                          thị trường Quốc Tế
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          {/* Other sections */}
          <IngredientSection />
          <section className="p-6 md:p-20">
            <div className="container mx-auto">
              <p className="text-center">
                Hồng sang xuất khẩu hơn{" "}
                <span className="text-orange-500 font-semibold">
                  10+ quốc gia
                </span>{" "}
                trên toàn thế giới và vùng lãnh thổ
              </p>

              <Swiper
                slidesPerView={2} // Để các item trượt mượt không bị khóa vào 1 slide
                spaceBetween={10}
                loop={true} // Cho phép slider lặp lại vô hạn
                autoplay={{
                  delay: 0, // Loại bỏ thời gian delay để slider chạy liên tục
                  disableOnInteraction: false, // Giữ autoplay ngay cả khi người dùng tương tác
                }}
                speed={3000} // Thời gian trượt giữa các slide (ms)
                freeMode={true} // Cho phép trượt tự do, không khóa vào từng slide
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 5,
                  },
                }}
                className="mt-6"
                modules={[Autoplay, FreeMode]}
              >
                {Country.map((item) => (
                  <SwiperSlide key={item.title}>
                    <div className="flex gap-2 items-center justify-center">
                      <img
                        srcSet={`${item.img} 2x`}
                        alt="logo"
                        className="w-14 h-10"
                      />
                      <p className="font-semibold">{item.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {isMobile ? (
            <section className="py-6 bg-[#5B8C51]">
              <div className="container mx-auto p-4">
                <Tag
                  text="Giá trị cốt lõi"
                  className="!text-[#5B8C51] mx-auto text-center bg-white"
                />
                <h2 className="text-4xl font-semibold text-white text-center mb-6">
                  Tại sao chọn <br /> chúng tôi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  <ul className="col-span-1 sm:col-span-4 w-full">
                    {CoreValues.map((item, idx) => (
                      <li
                        key={idx}
                        className={`cursor-pointer w-full flex flex-col items-start px-6 py-4 ${
                          idx === expandedIndex
                            ? "bg-[#EDDD5E] text-black"
                            : "text-white"
                        } ${
                          idx < CoreValues.length - 1
                            ? "border-b border-gray-300"
                            : ""
                        }`}
                      >
                        <div
                          className="flex items-center w-full py-2"
                          onClick={() => toggleItem(idx)}
                        >
                          {idx === expandedIndex ? (
                            <RiArrowDownSLine className="text-xl" />
                          ) : (
                            <RiArrowRightSLine className="text-xl" />
                          )}
                          <span className="ml-4 font-semibold text-lg">
                            {item.title}
                          </span>
                        </div>
                        <div
                          ref={(el) => {
                            if (el && !contentRefs.current.includes(el)) {
                              contentRefs.current[idx] = el;
                            }
                          }}
                          className={`overflow-hidden transition-all duration-500 ease-out ${
                            idx === expandedIndex
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="p-4 border-t">
                            <div
                              id="core-lang"
                              dangerouslySetInnerHTML={{
                                __html: item.content, // sử dụng item.content thay vì currentContent.content
                              }}
                            ></div>
                            <div className="flex flex-wrap gap-3 mt-4">
                              {item.imgs.map((img, imgIdx) => (
                                <Image
                                  key={imgIdx}
                                  src={img}
                                  width={80}
                                  height={80}
                                  className="rounded"
                                  alt=""
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ) : (
            <section className="pt-12 bg-[#5B8C51]">
              <Tag
                text="Giá trị cốt lõi"
                className="!text-[#5B8C51] mx-auto text-center bg-white"
              />
              <h2 className="text-[40px] font-semibold text-white text-center">
                Tại sao chọn chúng tôi
              </h2>
              <div className="grid grid-cols-12 mt-10">
                <ul className="col-span-4 ml-auto">
                  {CoreValues.map((item, idx) => (
                    <li
                      key={idx}
                      className={`font-semibold cursor-pointer w-full h-14 flex items-center max-w-[385px] pl-6 pr-6 ${
                        idx === isActive
                          ? "text-inherit bg-[#EDDD5E] rounded-l-2xl"
                          : "text-white"
                      }`}
                      onClick={() => {
                        setIsActive(idx);
                        setCurrentContent(item);
                      }}
                    >
                      {idx === isActive ? (
                        <RiArrowDownSLine />
                      ) : (
                        <RiArrowRightSLine />
                      )}
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#EDDD5E] col-span-8 min-h-[400px] p-6">
                  <div
                    id="core-lang"
                    dangerouslySetInnerHTML={{ __html: currentContent.content }}
                  ></div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {currentContent.imgs.map((item, idx) => (
                      <Image
                        key={idx}
                        src={item}
                        width={150}
                        height={150}
                        className="rounded"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          <section id="products" className="bg-gray-100 md:py-12 p-4">
            <div className="container mx-auto py-6 md:py-0">
              <Tag text="Sản phẩm" className="mx-auto" />
              <h3 className="text-2xl md:text-[40px] font-bold mb-4 md:mb-8 text-center">
                Sản phẩm đặt biệt
              </h3>
              <Swiper
                spaceBetween={50}
                slidesPerView={isMobile ? 1 : isTablet ? 2 : 4}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {Product.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white p-4 hover:shadow-xl rounded-lg flex flex-col justify-between min-h-[350px] transition-all duration-300 transform">
                      <div className="flex justify-center items-center mb-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-[200px] object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="mb-3">{item.name}</h6>
                        <button
                          className="mt-2 border-green-600 border-[1px] hover:bg-green-600 px-4 h-9 rounded-xl hover:text-white transition-all duration-300 transform"
                          onClick={() => window.open(item.link, "_blank")}
                        >
                          Truy xuất nguồn gốc
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <VideoSection />
          <NewsSection />
          <Contact />
          {/* <Footer /> */}

          {showButton && (
            <button
              className="fixed bottom-6 w-12 h-12 right-6 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ↑
            </button>
          )}
        </>
      )}
    </div>
  );
}
