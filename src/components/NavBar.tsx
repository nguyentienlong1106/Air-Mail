"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeChanger } from ".";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (navbar) {
        setNavbar(!navbar);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbar]);
  return (
    <div className="relative container z-30">
      <button className="p-2 focus:border" onClick={() => setNavbar(!navbar)}>
        {navbar ? (
          <AiOutlineClose className="w-[32px] h-[32px]" />
        ) : (
          <TfiMenu className="w-[32px] h-[32px]" />
        )}
      </button>
      <div className="fixed w-full top-20 right-0 bg-white dark:bg-black">
        <div className={`${navbar ? "block" : "hidden"}`}>
          <ul className="h-auto grid items-center justify-left ">
            <li className=" text-lg text-left mx-5 py-5 hover:px-5 border-b-2 border-gray-200 border-solid hover:text-accent hover:bg-slate-100 hover:rounded-2xl">
              <Link href="#about_us" onClick={() => setNavbar(!navbar)}>
                О нас
              </Link>
            </li>
            <li className=" text-lg text-left mx-5 py-5 hover:px-5 border-b-2 border-gray-200 border-solid hover:text-accent hover:bg-slate-100 hover:rounded-2xl">
              <Link href="/service" onClick={() => setNavbar(!navbar)}>
                Услуги
              </Link>
            </li>
            <li className=" text-lg text-left mx-5 py-5 hover:px-5 border-b-2 border-gray-200 border-solid hover:text-accent hover:bg-slate-100 hover:rounded-2xl">
              <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                Контакты
              </Link>
            </li>

            <li className=" text-xl text-left p-5 border-b-4 border-gray-400 flex justify-between mt-4 shadow-xl dark:shadow-gray-500 shadow-gray-100">
              <div className="flex items-center gap-4">
                <Link href="https://t.me/humanlead">
                  <Image src="/Telegram.png" alt="" width={40} height={40} />
                </Link>
                <Link href="https://wa.me/79219565548">
                  <Image src="/Whats App.png" alt="" width={40} height={40} />
                </Link>
                <span className="text-sm leading-[23.4px] mr-[48px] text-[#707070] ">
                  +7 921 956-55-48
                </span>
              </div>

              <ThemeChanger />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
