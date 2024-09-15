import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-12 gap-8 text-center md:text-left p-4">
        {/* Logo và mô tả */}
        <div className="col-span-6 md:max-w-[70%]">
          <img srcSet="/img/logo.png 2x" alt="Logo" className="mb-4 mx-auto" />
          <p className="text-gray-600">
            HOSA Fruit Co., Ltd được thành lập từ năm 2011, chuyên sản xuất và
            kinh doanh sầu riêng và các loại trái cây khác từ vùng đồng bằng
            sông Cửu Long. Công ty đã phát triển mạnh mẽ từ việc thu mua và xuất
            khẩu sầu riêng sang các thị trường quốc tế.
          </p>
        </div>

        {/* Thông tin */}
        <div className="col-span-3">
          <h4 className="text-lg font-semibold mb-4">Thông tin</h4>
          <ul className="text-gray-600 space-y-2">
            <li>Giới thiệu</li>
            <li>Sản phẩm</li>
            <li>Kênh phân phối</li>
            <li>Quy trình sản xuất</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        {/* Chính sách */}
        <div className="col-span-3">
          <h4 className="text-lg font-semibold mb-4">Chính sách</h4>
          <ul className="text-gray-600 space-y-2">
            <li>Chính sách bán hàng</li>
            <li>Chính sách giao hàng</li>
            <li>Chính sách bảo mật</li>
            <li>Hình thức thanh toán</li>
            <li>Chính sách đổi trả & hoàn tiền</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className=" container mx-auto border-t border-gray-300 mt-8 pt-4 text-gray-500 flex justify-between items-center flex-col md:flex-row gap-8">
        <ul className="flex gap-4 mt-8">
          <li className="w-10 h-10 bg-[#F8F7F0] rounded-full flex justify-center items-center">
            <RiFacebookFill />
          </li>
          <li className="w-10 h-10 bg-[#F8F7F0] rounded-full flex justify-center items-center">
            <RiTwitterXFill />
          </li>
          <li className="w-10 h-10 bg-[#F8F7F0] rounded-full flex justify-center items-center">
            <RiLinkedinFill />
          </li>
          <li className="w-10 h-10 bg-[#F8F7F0] rounded-full flex justify-center items-center">
            <RiInstagramLine />
          </li>
        </ul>
        <p> © Power by GreenCheck</p>
      </div>
    </footer>
  );
}

export default Footer;
