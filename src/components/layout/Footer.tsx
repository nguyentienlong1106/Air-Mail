import Image from "next/image";
import Link from "next/link";
import { Language, ThemeChanger } from "..";

const Footer = () => {
  return (
    <footer className="bg-[#7db9ff] xl:mt-[148px] text-white h-[478px] ">
      <div className="container mx-auto">
        <div className=" grid grid-cols-3 xl:mx-[80px] pt-[30px] pb-[39px] gap-[50px]">
          <div className="col-span-1 grid h-[56px] text-[18px] leading-[23px]">
            <Link href="/" className="flex">
              <span className="font-tinos text-[40px] leading-[52px] ">
                AIR
              </span>
              <Image src="/Group.png" alt="" width={44} height={44} />
              <span className="font-tinos text-[40px] leading-[52px]  ml-1">
                MAIL
              </span>
            </Link>
            <span className="mt-[9px]">© 2023 “AirMail” </span>
            <span>Все права защищены</span>
            <span className="mt-[150px]">Политика антиспам</span>
            <span>Политика конфиденциальности</span>
          </div>
          <div className="col-span-1 mt-[10px] text-[18px] leading-[21.78px]">
            <h2 className=" font-semibold leading-[33.6px]">Услуги</h2>
            <p className="mt-[24px]">Настройка ESP</p>
            <p className="mt-[20px]">Вытаскиваем из спама</p>
            <p className="mt-[20px]">Верстка писем</p>
            <p className="mt-[20px]">Настройка своих серверов рассылок SMTP</p>
            <p className="mt-[20px]">Настройка DKIM / DMARC / SPF</p>
            <p className="mt-[20px]">Добавление PTR-записи</p>
          </div>
          <div className="col-span-1 ml-[100px]">
            <Link href="/" className="flex items-center gap-[10px] mt-[10px]">
              <Image src="/Telegram (1).png" alt="" width={32} height={32} />{" "}
              Telegram
            </Link>
            <Link href="/" className="flex items-center gap-[10px] mt-[20px]">
              <Image src="/Whats App (1).png" alt="" width={32} height={32} />{" "}
              WhatsApp
            </Link>
            <Link href="/" className="flex items-center gap-[10px] mt-[20px]">
              <Image src="/Mail.png" alt="" width={32} height={32} />{" "}
              Info@airmail.ru
            </Link>
            <span className="flex items-center gap-[10px] mt-[20px]">
              <Image src="/Phone.png" alt="" width={32} height={32} /> +7 921
              956-55-48
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center gap-[24px] xl:mx-[80px] pb-[48px]">
          {" "}
          <button className="bg-accent px-10 py-3 rounded-[900px] text-[18px] leading-[18px] mr-[8px]">
            Оставить заявку
          </button>
          <ThemeChanger />
          <Language />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
