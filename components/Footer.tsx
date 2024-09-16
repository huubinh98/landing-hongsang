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
