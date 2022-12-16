import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="hidden sm:flex flex-col justify-end items-center p-4">
      <a
        href="https://twitter.com/walecyber_dev"
        className="w-10 h-10 rounded-full bg-white my-1 border border-custLightGray flex-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary group xxl:w-[70px] xxl:h-[70px] xxl:my-2"
      >
        <BsTwitter className="w-[15px] h-[15px] text-custGray group-hover:text-white xxl:w-[30px] xxl:h-[30px]" />
      </a>
      <a
        href="https://web.facebook.com/atwale.dev"
        className="w-10 h-10 rounded-full bg-white my-1 border border-custLightGray flex-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary group xxl:w-[70px] xxl:h-[70px] xxl:my-2"
      >
        <FaFacebookF className="w-[15px] h-[15px] text-custGray group-hover:text-white xxl:w-[30px] xxl:h-[30px]" />
      </a>
      <a
        href="ttps://www.instagram.com"
        className="w-10 h-10 rounded-full bg-white my-1 border border-custLightGray flex-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary group xxl:w-[70px] xxl:h-[70px] xxl:my-2"
      >
        <BsInstagram className="w-[15px] h-[15px] text-custGray group-hover:text-white xxl:w-[30px] xxl:h-[30px]" />
      </a>
    </div>
  );
};

export default SocialMedia;
