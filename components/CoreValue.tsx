// import React, { useState, useRef, useEffect } from "react";
// import Tag from "./Tag";
// import { CoreValues } from "@/constants";
// import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";

// function CoreValue() {
//   const [isActive, setIsActive] = useState(0);
//   // State to track the index of the currently expanded item
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Xác định màn hình mobile khi component mount
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 640);
//     };

//     // Gọi hàm handleResize ngay khi component được mount
//     handleResize();

//     // Lắng nghe sự kiện thay đổi kích thước màn hình
//     window.addEventListener('resize', handleResize);

//     // Cleanup event listener khi component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Refs to store the height of each content container
//   const contentRefs = useRef<HTMLDivElement[]>([]);

//   // Function to handle the toggling of items
//   const toggleItem = (index: number) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   // Update content height dynamically
//   useEffect(() => {
//     contentRefs.current.forEach((ref, idx) => {
//       if (ref) {
//         ref.style.maxHeight =
//           idx === expandedIndex ? `${ref.scrollHeight}px` : "0px";
//         ref.style.opacity = idx === expandedIndex ? "1" : "0";
//       }
//     });
//   }, [expandedIndex]);

//   return !isMobile ? (
//     <section className="pt-12 bg-[#5B8C51]">
//       <Tag
//         text="Giá trị cốt lõi"
//         className="!text-[#5B8C51] mx-auto text-center bg-white"
//       />
//       <h2 className="text-[40px] font-semibold text-white text-center">
//         Tại sao chọn chúng tôi
//       </h2>
//       <div className="grid grid-cols-12 mt-10">
//         {/* Updated: Apply `ml-auto` to push `ul` to the right */}
//         <ul className="col-span-4 ml-auto">
//           {CoreValues.map((item, idx) => (
//             <li
//               key={idx}
//               className={`font-semibold cursor-pointer w-full h-14 flex items-center max-w-[385px] pl-6 pr-6 ${
//                 idx === isActive
//                   ? "text-inherit bg-[#EDDD5E] rounded-l-2xl"
//                   : "text-white"
//               }`}
//               onClick={() => setIsActive(idx)}
//             >
//               {idx === isActive ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//         {/* The content container remains on the left */}
//         <div className="bg-[#EDDD5E] col-span-8 min-h-[400px] p-6">
//           <p>
//             Minh bạch hoá toàn bộ quy trình canh tác, thu mua, chế biến bằng hệ
//             thống truy xuất nguồn gốc Green Check. Giúp khách hàng, đối tác dễ
//             dàng tiếp cận thông tin thông qua mã QR code
//           </p>
//           <div></div>
         
//         </div>
//       </div>
//     </section>
//   ) : (
//     <section className="py-6 bg-[#5B8C51]">
//       <div className="container mx-auto p-4">
//         <Tag
//           text="Giá trị cốt lõi"
//           className="!text-[#5B8C51] mx-auto text-center bg-white"
//         />
//         <h2 className="text-4xl font-semibold text-white text-center mb-6">
//           Tại sao chọn <br /> chúng tôi
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
//           {/* List items for desktop view */}
//           <ul className="col-span-1 sm:col-span-4 w-full">
//             {CoreValues.map((item, idx) => (
//               <li
//                 key={idx}
//                 className={`cursor-pointer w-full flex flex-col items-start px-6 py-4 ${
//                   idx === expandedIndex
//                     ? "bg-[#EDDD5E] text-black"
//                     : "text-white"
//                 } ${
//                   idx < CoreValues.length - 1 ? "border-b border-gray-300" : ""
//                 }`}
//               >
//                 <div
//                   className="flex items-center w-full py-2"
//                   onClick={() => toggleItem(idx)}
//                 >
//                   {idx === expandedIndex ? (
//                     <RiArrowDownSLine className="text-xl" />
//                   ) : (
//                     <RiArrowRightSLine className="text-xl" />
//                   )}
//                   <span className="ml-4 font-semibold text-lg">{item}</span>
//                 </div>
//                 {/* Conditionally render expanded content with inline style for smooth transition */}
//                 <div
//                   ref={(el) => {
//                     if (el && !contentRefs.current.includes(el)) {
//                       contentRefs.current[idx] = el;
//                     }
//                   }}
//                   className={`overflow-hidden transition-all duration-500 ease-out`}
//                   style={{
//                     maxHeight: "0px",
//                     opacity: "0",
//                   }}
//                 >
//                   <div className="p-4 border-t">
//                     <p className="text-sm">
//                       Minh bạch hoá toàn bộ quy trình canh tác, thu mua, chế
//                       biến bằng hệ thống truy xuất nguồn gốc Green Check. Giúp
//                       khách hàng, đối tác dễ dàng tiếp cận thông tin thông qua
//                       mã QR code
//                     </p>
//                     {/* You can add more details here */}
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CoreValue;


import React, { useState, useRef, useEffect } from "react";
import Tag from "./Tag";
import { CoreValues } from "@/constants"; // Giả sử bạn có một danh sách nội dung cho từng giá trị
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";

function CoreValue() {
  const [isActive, setIsActive] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentContent, setCurrentContent] = useState<{title: string; content: string}>({title: "", content: ""}); // State to store the current content

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
                setIsActive(idx);
                setCurrentContent(item); // Cập nhật nội dung khi click vào item
              }}
            >
              {idx === isActive ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#EDDD5E] col-span-8 min-h-[400px] p-6">
          <h5 className="mb-4">{currentContent?.title}</h5>
          {currentContent.content}
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
                  <span className="ml-4 font-semibold text-lg">{item.title}</span>
                </div>
                <div
                  ref={(el) => {
                    if (el && !contentRefs.current.includes(el)) {
                      contentRefs.current[idx] = el;
                    }
                  }}
                  className={`overflow-hidden transition-all duration-500 ease-out`}
                  style={{
                    maxHeight: "0px",
                    opacity: "0",
                  }}
                >
                  <div className="p-4 border-t">
                    {currentContent.content}
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
