import { Country, Product } from "@/constants";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import VideoSection from "@/components/Thumbnail";
import NewsSection from "@/components/NewSection";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import IngredientSection from "@/components/IngredientSection";
import CoreValue from "@/components/CoreValue";
import Tag from "@/components/Tag";
import useTranslation from "@/hooks/useTranslation";
import Loading from "@/components/Loading";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);

  const { loading } = useTranslation();

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
          <CoreValue />

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
