import { Country, Product } from "@/constants";
import Tag from "@/components/Tag";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import VideoSection from "@/components/Thumbnail";
import NewsSection from "@/components/NewSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IngredientSection from "@/components/IngredientSection";
import CoreValue from "@/components/CoreValue";

// Định nghĩa các kiểu dữ liệu cho các đối tượng
interface TextNode {
  element: Node;
  originalText: string | null;
}

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("vi"); // Ngôn ngữ hiện tại
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  // Hàm lấy tất cả các text nodes của các phần tử
  const getAllTextNodes = (): TextNode[] => {
    const elements = document.querySelectorAll("header, footer, section, h1, h2, h3, p, span");
    const textNodes: TextNode[] = [];

    elements.forEach((el) => {
      // Duyệt qua các node con của từng phần tử
      el.childNodes.forEach((node) => {
        // Chỉ chọn các node là văn bản (text node)
        if (node.nodeType === Node.TEXT_NODE && node?.textContent?.trim() !== "") {
          textNodes.push({ element: node, originalText: node.textContent });
        }
      });
    });

    return textNodes;
  };

  // Hàm dịch toàn bộ văn bản trên trang
  const translateAllText = async (targetLanguage: string) => {
    if (targetLanguage === currentLanguage) {
      return; // Không dịch lại nếu chọn cùng ngôn ngữ
    }

    setCurrentLanguage(targetLanguage); // Cập nhật ngôn ngữ hiện tại

    const textNodes = getAllTextNodes(); // Lấy tất cả các text node
    const translatedTextMap: { [key: number]: string } = {};

    const apiKey = "AIzaSyB_pcYtjwsET9KxyoUBJW0DaJodx3N9MmI"; // Thay YOUR_API_KEY_HERE bằng API Key của bạn
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    // Dịch từng đoạn văn bản
    for (let i = 0; i < textNodes.length; i++) {
      const data = {
        q: textNodes[i].originalText,
        target: targetLanguage,
        source: "vi",
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        translatedTextMap[i] = result.data.translations[0].translatedText;
      } catch (error) {
        console.error(`Có lỗi khi dịch: ${textNodes[i].originalText}`, error);
      }
    }

    // Cập nhật lại các phần tử trên trang với văn bản đã dịch
    textNodes.forEach((node, index) => {
      node.element.textContent = translatedTextMap[index];
    });
  };

  useEffect(() => {
    // Xác định màn hình mobile khi component mount
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };

    // Gọi hàm handleResize ngay khi component được mount
    handleResize();

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);

    // Cleanup event listener khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white">
      <select
        id="language"
        onChange={(e) => translateAllText(e.target.value)}
        defaultValue="vi"
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">Tiếng Anh</option>
        <option value="fr">Tiếng Pháp</option>
        <option value="zh">Tiếng Trung</option>
        <option value="hi">Tiếng Ấn Độ</option>
        <option value="th">Tiếng Thái Lan</option>
        <option value="ru">Tiếng Nga</option>
        {/* Thêm các ngôn ngữ khác nếu cần */}
      </select>

      {/* Header */}
      <Header />

      {/* Banner */}
      <section
        className="relative bg-cover bg-center h-[310px] 
              sm:min-h-[calc(100vh-80px)] md:min-h-[80vh] 
              lg:min-h-[60vh] xl:min-h-[70vh]"
        style={{ backgroundImage: "url('/img/banner.jpg')" }}
      ></section>

      {/* Về chúng tôi */}
      <section
        style={{
          backgroundImage: "url(/img/bg-about.png)",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
        id="about"
      >
        <div className="container mx-auto p-4 lg:py-12">
          {/* Sử dụng flex cho màn hình lớn và cột cho màn hình nhỏ */}
          <div className="flex flex-col-reverse md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {/* Hình ảnh sẽ chiếm 100% chiều rộng trên màn hình nhỏ và 1/2 trên màn hình lớn */}
            <img
              src="/img/about.jpg"
              alt="Hồng Sang"
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="w-full md:w-1/2">
              <Tag text="Giới thiệu chung" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
                Công ty TNHH Trái Cây Hồng Sang <br /> (HOSA Fruit Co., Ltd)
              </h3>
              <p className="text-base md:text-lg">
                Được thành lập từ năm 2011, chuyên sản xuất và kinh doanh sầu
                riêng và các loại trái cây khác từ vùng đồng bằng sông Cửu Long.
                Công ty đã phát triển mạnh mẽ từ việc thu mua và xuất khẩu sầu
                riêng sang các thị trường quốc tế.
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
                    <p>Trở thành công ty hàng đầu trong lĩnh vực sầu riêng</p>
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
                      Cung cấp sản phẩm chất lượng dẫn đầu, góp phần nâng cao
                      chất lượng của trái sầu riêng của Việt Nam trên thị trường
                      Quốc Tế
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Vùng nguyên liệu */}
      <IngredientSection />

      <section className="p-20">
        <div className="container mx-auto">
          <p className="text-center">
            Hosa xuất khẩu hơn{" "}
            <span className="text-orange-500 font-semibold">10+ quốc gia</span>{" "}
            trên toàn thế giới và vùng lãnh thổ
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-6">
            {Country.map((item) => (
              <div
                key={item.title}
                className="flex gap-2 items-center justify-center"
              >
                <img
                  srcSet={`${item.img} 2x`}
                  alt="logo"
                  className="w-14 h-10"
                />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CoreValue />

      {/* Sản phẩm đặc biệt */}
      <section id="products" className="bg-gray-100 md:py-12 p-4">
        <div className="container mx-auto py-6 md:py-0">
          <Tag text="Sản phẩm" className="mx-auto" />
          <h3 className="text-[40px] font-bold text-center mb-8">
            Sản phẩm đặc biệt
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
                    <button className="mt-2 border-green-600 border-[1px] hover:bg-green-600 px-4 h-9 rounded-xl hover:text-white transition-all duration-300 transform" 
                    onClick={() => window.open(item.link, '_blank')}>
                      Truy xuất nguồn gốc
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Chứng nhận */}
      <section className="py-12 bg-[#F8F7F0] relative">
        <div className="absolute top-0 left-0 z-0">
          <img src="/img/bg-t.png" alt="" />
        </div>
        <div className="container mx-auto relative z-10">
          <h3 className="text-[40px] font-bold text-center mb-8 uppercase">
            CHỨNG NHẬN CỦA HỒNG SANG
          </h3>
          <div className="p-4">
            <img
              srcSet="/img/chungnhan.png 2x"
              alt="Chứng nhận"
              className="w-96 object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Video chuỗi giá trị */}
      <VideoSection />

      {/* Tin tức */}
      <NewsSection />

      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
