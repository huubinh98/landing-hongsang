// pages/contact.js

import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import Image from "next/image"; // For background image if needed

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-8 md:py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-10">
        {/* Left Side - Contact Information */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#4f5d2f]">
            Liên hệ với chúng tôi
          </h1>

          {/* Contact Email */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 border border-[#5B8C51] flex justify-center items-center rounded-full">
              <RiMailLine color="#5B8C51" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-700">ctyhongsang78@gmail.com</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 border border-[#5B8C51] flex justify-center items-center rounded-full">
              <RiPhoneLine color="#5B8C51" />
            </div>
            <div>
              <p className="font-semibold">Số điện thoại</p>
              <p className="text-gray-700">(+84) 853 926 778</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 border border-[#5B8C51] flex justify-center items-center rounded-full">
              <RiMapPinLine color="#5B8C51" />
            </div>
            <div>
              <p className="font-semibold">Địa chỉ</p>
              <p className="text-gray-700">
                Ấp 12 xã Long Trung, huyện Cai Lậy, tỉnh Tiền Giang
              </p>
            </div>
          </div>

          {/* Tax Code */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 border border-[#5B8C51] flex justify-center items-center rounded-full">
              <Image
                width={5}
                height={5}
                alt=""
                src={"/img/tax.png"}
                className="w-5 h-5"
              />
            </div>
            <div>
              <p className="font-semibold">Mã số thuế</p>
              <p className="text-gray-700">1201606071</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
          <h2 className="text-xl font-semibold mb-4">Gửi yêu cầu liên hệ</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Họ và tên
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                type="text"
                id="name"
                placeholder="Nhập họ tên"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                type="email"
                id="email"
                placeholder="Nhập họ tên"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phone"
              >
                Số điện thoại
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                type="text"
                id="phone"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Nội dung
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                id="message"
                placeholder="Nhập nội dung"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>

      <div className="bg-yellow-400 py-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <div className="space-x-0 md:space-x-4 text-[#404A3D] text-center md:text-left mb-4 md:mb-0">
            <span className="mr-2">FARMERS</span>
            <span className="mr-2">ORGANIC</span>
            <span className="mr-2">FOODS</span>
            <span>PRODUCT</span>
          </div>
          <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row md:items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
                <RiPhoneLine color="#404A3D" />
              </div>
              <span className="text-[#404A3D]">Phone: (+84) 853 926 778</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
                <RiMailLine color="#404A3D" />
              </div>
              <span className="text-[#404A3D]">
                Email: ctyhongsang78@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
                <Image
                  height={20}
                  width={20}
                  src={"/img/tax-small.png"}
                  alt=""
                />
              </div>
              <span className="text-[#404A3D]">1201606071</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
