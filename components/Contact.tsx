import React, { useState } from "react";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Thêm ToastContainer và toast
import "react-toastify/dist/ReactToastify.css"; // Thêm file CSS của react-toastify

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: { target: { id:string ; value: string; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const sendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_s2bysxc',  // Thay thế bằng service_id của bạn
        template_id: 'template_8z544ir',  // Thay thế bằng template_id của bạn
        user_id: '7U9gt0jqVJG1GH71F',  // Thay thế bằng user_id của bạn
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      });

      if (response.status === 200) {
        // Hiển thị thông báo toast thành công
        toast.success("Your email has been successfully sent!");
        clearForm(); // Xóa dữ liệu form sau khi gửi thành công
      }
    } catch (err) {
      setError("An error occurred while sending the email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <form onSubmit={sendEmail}>
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
                value={formData.name}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.phone}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Đang gửi..." : "Gửi yêu cầu"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
