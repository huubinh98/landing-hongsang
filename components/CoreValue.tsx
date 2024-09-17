import React, { useState, useRef, useEffect } from "react";
import Tag from "./Tag";
import { CoreValues } from "@/constants"; // Giả sử bạn có một danh sách nội dung cho từng giá trị
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import { translateSpecificText } from "@/helper/translate";

function CoreValue() {
  const [isActive, setIsActive] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentContent, setCurrentContent] = useState<{
    title: string;
    content: string;
    imgs: string[];
  }>(CoreValues[0]); // State to store the current content

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setCurrentContent(CoreValues[index]); // Cập nhật nội dung khi click vào item
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight =
          idx === expandedIndex ? `${ref.scrollHeight}px` : "0px";
        ref.style.opacity = idx === expandedIndex ? "1" : "0";
      }
    });
  }, [expandedIndex]);

  useEffect(() => {
    const lang = sessionStorage.getItem("language") || "vi";
  
    // Lấy phần tử h5 và core-lang
    const titleElement = document.querySelector("h5");
    const contentElement = document.getElementById("core-lang");
  
    if (titleElement && contentElement) {
      // Dịch phần tử h5
      translateSpecificText(titleElement, lang);
  
      // Lấy tất cả các phần tử con có tag "p" trong core-lang
      const allChildElements = contentElement.getElementsByTagName("p");
  
      // Chuyển đổi HTMLCollection thành mảng
      const childElementsArray = Array.from(allChildElements);
  
      // Dịch từng phần tử con nếu có
      childElementsArray.forEach((childElement) => {
        translateSpecificText(childElement, lang);
      });
    }
  }, [currentContent]);

  
  return !isMobile ? (
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
                const lang = sessionStorage.getItem("language") || "vi";
                const contentElement = document.getElementById("core-lang");
                setIsActive(idx);
                setCurrentContent(item); // Cập nhật nội dung khi click vào item
                console.log("contentElement", contentElement);
                contentElement && translateSpecificText(contentElement, lang);
              }}
            >
              {idx === isActive ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#EDDD5E] col-span-8 min-h-[400px] p-6">
          <h5 className="mb-4 font-semibold">{currentContent?.title}</h5>
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
  ) : (
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
                  idx < CoreValues.length - 1 ? "border-b border-gray-300" : ""
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
  );
}

export default CoreValue;
