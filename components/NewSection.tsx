import { useEffect, useState } from "react";
import Tag from "./Tag";
import { newsItems } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

const NewsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTabblet] = useState(false);

  useEffect(() => {
    // Xác định màn hình mobile khi component mount
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTabblet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };

    // Gọi hàm handleResize ngay khi component được mount
    handleResize();

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);

    // Cleanup event listener khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="news"
      className="bg-[#f9f9f4] py-8 md:py-[100px] relative overflow-hidden"
    >
      {!isMobile && (
        <div className="absolute top-0 right-0 z-0">
          <img src="/img/bg-news.png" alt="" />
        </div>
      )}
      <div className="container mx-auto relative p-4">
        <div className="mb-8">
          <Tag text="Tin tức" className="mb-4 mx-auto md:mx-0" />
          <div className="relative flex justify-between items-center">
            <h2 className="text-[40px] font-bold mx-auto md:mx-0 text-center">
              Tin tức về chúng tôi
            </h2>
            {!isMobile && (
              <div className=" flex items-center gap-6">
                <div className="swiper-button-next-custom">
                  <RiArrowLeftSLine />
                </div>
                <div className="swiper-button-prev-custom">
                  <RiArrowRightSLine />
                </div>
              </div>
            )}
          </div>
        </div>
        <Swiper
          spaceBetween={26}
          slidesPerView={isMobile ? 1 : isTablet ? 2 : 3.15}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {newsItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <a
                href="https://greencheck.vn/news/hong-sang-su-dung-truy-xuat-nguon-goc-green-check"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full md:w-[380px] h-[380px] group overflow-hidden rounded-lg"
              >
                <div className="relative w-full md:w-[380px] h-[380px] group overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                  {/* Lớp phủ màu với gradient và hiệu ứng hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-75 transition-opacity duration-300 hover:opacity-90"></div>
                  {/* Tiêu đề */}
                  <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSection;
