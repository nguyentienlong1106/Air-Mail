import Link from "next/link";
import Image from "next/image";
import { Language, ThemeChanger } from "..";

const Header = () => {
  return (
    <header className="container mx-auto xl:mx-[80px] xl:mt-[48px] grid grid-cols-2 justify-center">
      <div className="col-span-1 flex ">
        <Link href="/" className="flex">
          <span className="font-tinos text-[40px] leading-[52px] ">AIR</span>
          <Image src="/Group.png" alt="" width={44} height={44} />
          <span className="font-tinos text-[40px] leading-[52px]  ml-1">
            MAIL
          </span>
        </Link>
        <div className="grid grid-cols-3 items-center ml-[54px] text-[18px] leading-[23.4px]">
          <Link href="/about_us">О нас</Link>
          <Link href="/service">Услуги</Link>
          <Link href="/contact">Контакты</Link>
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-center gap-[24px]">
        <Link href="/">
          <Image src="/Telegram.png" alt="" width={44} height={44} />
        </Link>
        <Link href="/">
          <Image src="/Whats App.png" alt="" width={44} height={44} />
        </Link>
        <span className="text-[18px] leading-[23.4px] mr-[48px] text-[#707070] ">
          +7 999 999-99-99
        </span>
        <ThemeChanger />
        <Language />
      </div>
    </header>
  );
};

export default Header;
