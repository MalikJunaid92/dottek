"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col  bg-[#140C1F]">
      {/* Footer Section */}
      <div className="w-full text-white py-10 px-6 sm:px-10 md:px-[14%]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo Section */}
          <div>
            <img
              src="/dottek.svg"
              alt="Dottek Logo"
              className="w-[120px] h-auto sm:w-[150px] mt-5"
            />
          </div>

          {/* Links, Legal, and Get in Touch */}
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Links Section */}
            <div>
              <span className="block text-xl font-bold text-[#AD1AAF] mb-4">
                Links
              </span>
              <a
                href="#"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                Blogs
              </a>
              <a
                href="#"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                Contact Us
              </a>
            </div>

            {/* Legal Section */}
            <div>
              <span className="block text-xl font-bold text-[#AD1AAF] mb-4">
                Legal
              </span>
              <a
                href="#"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                Privacy Policy
              </a>
            </div>

            {/* Get in Touch Section */}
            <div>
              <span className="block text-xl font-bold text-[#AD1AAF] mb-4">
                Get in Touch
              </span>
              <a
                href="mailto:needhelp@gmail.com"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                needhelp@gmail.com
              </a>
              <a
                href="#"
                className="block text-white text-sm mb-2 hover:text-[#AD1AAF] transition-all"
              >
                +92 (123) 456 7890
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start items-center gap-4 mt-10">
          {/* Instagram Icon */}
          <a href="#" className="w-[25px] h-[25px]">
            <svg
              width="25"
              height="25"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.05556 0C3.60728 0 0 3.48289 0 7.77778V20.2222C0 24.5171 3.60728 28 8.05556 28H20.9444C25.3927 28 29 24.5171 29 20.2222V7.77778C29 3.48289 25.3927 0 20.9444 0H8.05556ZM24.1667 3.11111C25.056 3.11111 25.7778 3.808 25.7778 4.66667C25.7778 5.52533 25.056 6.22222 24.1667 6.22222C23.2773 6.22222 22.5556 5.52533 22.5556 4.66667C22.5556 3.808 23.2773 3.11111 24.1667 3.11111ZM14.5 6.22222C18.9483 6.22222 22.5556 9.70511 22.5556 14C22.5556 18.2949 18.9483 21.7778 14.5 21.7778C10.0517 21.7778 6.44444 18.2949 6.44444 14C6.44444 9.70511 10.0517 6.22222 14.5 6.22222ZM14.5 9.33333C13.2181 9.33333 11.9887 9.825 11.0823 10.7002C10.1759 11.5753 9.66667 12.7623 9.66667 14C9.66667 15.2377 10.1759 16.4247 11.0823 17.2998C11.9887 18.175 13.2181 18.6667 14.5 18.6667C15.7819 18.6667 17.0113 18.175 17.9177 17.2998C18.8241 16.4247 19.3333 15.2377 19.3333 14C19.3333 12.7623 18.8241 11.5753 17.9177 10.7002C17.0113 9.825 15.7819 9.33333 14.5 9.33333Z"
                fill="white"
              />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a href="#" className="w-[25px] h-[25px]">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-full h-full" />
          </a>

          {/* Facebook Icon */}
          <a href="#" className="w-[25px] h-[25px]">
            <img src="/facebook.svg" alt="Facebook" className="w-full h-full" />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="w-full h-[93px] flex items-center justify-center bg-white text-black text-center text-sm">
        <span>
          © copyright {new Date().getFullYear()} by Company.com / All Rights Reserved
        </span>
      </footer>
    </div>
  );
};

export default Footer;
