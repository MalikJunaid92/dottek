"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hamburger from 'hamburger-react'
import Link from "next/link";
import { dottekRoutes } from "@/routes/routes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="bg-[#160C31] text-white px-6 md:px-8 lg:px-16 py-6 flex items-center justify-between sticky top-0 z-50"
      style={{ boxShadow: "0px 3.33px 32.4px 0px #FFFFFF52" }}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/dottek.svg"
          alt="dottek logo"
          width={134}
          height={29}
          className="opacity-100 sm:left-[70px] md:left-[100px] absolute"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-12 ml-8">
        <Link href={dottekRoutes.root} className="hover:text-purple-400 transition duration-200">
          Home
        </Link>
        <Link href={dottekRoutes?.about} className="hover:text-purple-400 transition duration-200">
          About
        </Link>
        <Link href={dottekRoutes?.services} className="hover:text-purple-400 transition duration-200">
          Services
        </Link>
        <Link href={dottekRoutes?.blogs} className="hover:text-purple-400 transition duration-200">
          Blogs
        </Link>
        <Link href={dottekRoutes?.contact} className="hover:text-purple-400 transition duration-200">
          Contact Us
        </Link>
      </nav>
      <div className="md:hidden">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      </div>
      {/* Mobile Slide-In Navigation */}
      {isMenuOpen && (
        <div className="absolute top-[6rem] border h-[86vh] sm:h-[45vh] md:hidden left-0 w-full bg-[#160C31] bg-opacity-95 z-50 transition-transform transform flex flex-col items-center justify-start">
          <nav className="flex flex-col items-center justify-center gap-6 py-6 w-[200px]">
            <Link
              href={dottekRoutes?.root}
              className="hover:text-purple-400 transition duration-200 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={dottekRoutes?.about}
              className="hover:text-purple-400 transition duration-200 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href={dottekRoutes?.services}
              className="hover:text-purple-400 transition duration-200 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href={dottekRoutes?.blogs}
              className="hover:text-purple-400 transition duration-200 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href={dottekRoutes?.contact}
              className="hover:text-purple-400 transition duration-200 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
