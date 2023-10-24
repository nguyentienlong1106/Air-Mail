import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#7db9ff] xl:mt-[148px] text-white lg:h-[478px] relative z-10">
      <div className="container mx-auto px-3">
        <div className=" grid lg:grid-cols-3 xl:mx-[80px] pt-[30px] pb-[39px] lg:gap-[50px] gap-5">
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 h-[56px] text-[18px] leading-[23px]">
            <Link
              href="/"
              className="flex items-center scale-75 -ml-8 lg:ml-0 lg:scale-100"
            >
              <span className="font-tinos text-[40px] lg:leading-[52px] ">
                AIR
              </span>
              <Image src="/Group.png" alt="" width={44} height={44} />
              <span className="font-tinos text-[40px] lg:leading-[52px]  ml-1">
                MAIL
              </span>
            </Link>
            <div className="mt-[9px] text-sm lg:text-lg grid justify-self-end lg:justify-self-start">
              <span>© 2023 “AirMail” </span>
              <span>Все права защищены</span>
            </div>
            <div className="hidden lg:grid mt-[150px]">
              <span>Политика антиспам</span>
              <span>Политика конфиденциальности</span>
            </div>
          </div>
          <div
            itemScope
            itemType="https://schema.org/CreativeWork"
            className="lg:col-span-1 mt-[10px] text-sm lg:text-[18px] lg:leading-[21.78px]"
          >
            <h2 className=" font-semibold lg:leading-[33.6px]">
              <Link href="/service">Услуги</Link>
            </h2>
            <p itemProp="offers" className="mt-[24px]">
              <Link href="/service/setting_mail">Настройка ESP</Link>
            </p>
            <p itemProp="offers" className="mt-[20px]">
              <Link href="/service/conslusionSpam">Вытаскиваем из спама</Link>
            </p>
            <p itemProp="offers" className="mt-[20px]">
              <Link href="/service/HTML_web">Верстка писем</Link>
            </p>
            <p itemProp="offers" className="mt-[20px]">
              <Link href="/service/config_Email">
                Настройка своих серверов рассылок SMTP
              </Link>
            </p>
            <p itemProp="offers" className="mt-[20px]">
              <Link href="/service/config_dkim">
                Настройка DKIM / DMARC / SPF
              </Link>
            </p>
            <p itemProp="offers" className="mt-[20px]">
              <Link href="/service/authenticate">Добавление PTR-записи</Link>
            </p>
          </div>
          <div className="lg:col-span-1 lg:ml-[100px] grid grid-cols-2 lg:grid-cols-1 justify-items-start">
            <div className="">
              <Link
                href="https://t.me/humanlead"
                className="flex items-center gap-[10px] mt-[10px]"
              >
                <Image src="/Telegram (1).png" alt="" width={32} height={32} />{" "}
                Telegram
              </Link>
              <Link
                href="https://wa.me/79219565548"
                className="flex items-center gap-[10px] mt-[20px]"
              >
                <Image src="/Whats App (1).png" alt="" width={32} height={32} />{" "}
                WhatsApp
              </Link>
              <Link
                href="Info@airmail.ru"
                className="flex items-center gap-[10px] mt-[20px]"
              >
                <Image src="/Mail.png" alt="" width={32} height={32} />{" "}
                Info@airmail.ru
              </Link>
              <span className="flex items-center gap-[10px] mt-[20px]">
                <Image src="/Phone.png" alt="" width={32} height={32} /> +7
                (921) 956-55-48
              </span>
            </div>

            <div className="lg:hidden grid items-end justify-self-end">
              <span>Политика антиспам</span>
              <span>Политика конфиденциальности</span>
              <button className="bg-accent px-10 py-3 rounded-[900px] text-[18px] leading-[18px]">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex justify-end items-center gap-[24px] xl:mx-[80px] pb-[48px]">
          <Link href="#contact">
            <button className="bg-accent px-10 py-3 rounded-[900px] text-sm lg:text-[18px] lg:leading-[18px] mr-[8px]">
              Оставить заявку
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
