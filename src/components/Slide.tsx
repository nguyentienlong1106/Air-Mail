"use client";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

const Data = [
  {
    title: "Вытаскиваем письма из спама",
    desc: "Если ваши рассылки или welcome-цепочки попадают сразу в папку «спам» и не доходят до пользователей",
    img: "/banner1.png",
    bg_img: "bg-slide1",
    href: "/service/email/Mail ",
  },
  {
    title: "Верстаем HTML письма",
    desc: "Создаем уникальные и запоминающиеся HTML шаблоны для вашей email рассылки",
    img: "/banner2.png",
    bg_img: "bg-slide2",
    href: "/service/HTML_web ",
  },
  {
    title: "Настроим DKIM записи",
    desc: "Настроим DKIM запись и улучшим узнаваемость ваших рассылок",
    img: "/banner3.png",
    bg_img: "bg-slide3",
    href: "/service/config_dkim",
  },
  {
    title: "Поможем избежать спама",
    desc: "Поможем избежать спама для вашей Email рассылки. Быстро, качественно, надежно",
    img: "/banner4.png",
    bg_img: "bg-slide4",
    href: "/service/blockSpam",
  },
  {
    title: "Настройка серверов Email рассылки",
    desc: "Поможем увеличить скорость доставки писем, повысить проходимость спам-фильтров и улучшить общую эффективность рассылок",
    img: "/banner5.png",
    bg_img: "bg-slide5",
    href: "/service/config_Email",
  },
  {
    title: "Настройка DMARC политики",
    desc: "Настроим DMARC протокол и защитим ваши рассылки от подделок адреса электронной почты",
    img: "/banner6.png",
    bg_img: "bg-slide6",
    href: "/service/config_dmarc",
  },
  {
    title: "Настройка Email аутентификации ",
    desc: "Настроим SPF и обеспечим безопасность и надежность доставки электронной почты",
    img: "/banner7.png",
    bg_img: "bg-slide7",
    href: "/service/authenticate ",
  },
  {
    title: "Добавление PTR-записи",
    desc: "Настроим PTR запись для вашего бизнеса и поможем повысить доставляемость расслыки",
    img: "/banner6.png",
    bg_img: "bg-slide6",
    href: "/service/config_domain",
  },
  {
    title: "Вывод писем из спама",
    desc: "Проверим домен, поможем достать письма из спама  и обеспечим доставляемость писем до 99.9%",
    img: "/banner8.png",
    bg_img: "bg-slide8",
    href: "/service/conslusionSpam",
  },
];

const Slide = ({ title, styleText }: { title: string; styleText: string }) => {
  return (
    <div className="lg:mt-[140px] mt-[60px]">
      <h2
        className={` ${styleText} text-2xl lg:text-[40px] leading-[56px] font-ubuntu mb-[24px] lg:mb-[48px]`}
      >
        {title}
      </h2>
      <Swiper
        modules={[Pagination, A11y, Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        speed={2000}
      >
        {Data.map((e, i) => (
          <SwiperSlide key={i} className="relative p-2">
            <div
              className={`relative w-full lg:w-[1064px] h-[436px] lg:border-[3px] lg:border-solid lg:border-accent rounded-[30px] overflow-hidden ${e.bg_img} bg-no-repeat bg-cover bg-center lg:bg-none`}
            >
              <div className="grid lg:grid-cols-5 z-10 relative">
                <div className="lg:col-span-3 mt-[32px] lg:mt-[51px] mx-[28px] lg:ml-[94px]">
                  <h2 className="font-ubuntu text-2xl lg:text-[40px] lg:leading-[56px] lg:w-[400px] text-white lg:text-current">
                    {e.title}
                  </h2>
                  <p className="font-medium text-lg lg:text-[20px] leading-[28px] mt-[24px] lg:w-[500px] text-[#D8D8D8] lg:text-description_dark">
                    {e.desc}
                  </p>
                  <button className="hidden lg:block bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] mt-[48px]">
                    <Link href={e.href}>Подробнее</Link>
                  </button>
                </div>
                <div className="hidden lg:block lg:col-span-2">
                  <Image
                    src={e.img}
                    alt=""
                    className="object-cover mt-[61px]"
                    width={314}
                    height={314}
                    priority={true}
                  />
                </div>
              </div>
            </div>
            <Link href={e.href}>
              <button className="lg:hidden absolute bg-accent text-white p-5 rounded-[900px] bottom-8 right-8">
                <Image
                  src="/Vector_white.png"
                  alt=""
                  width={16}
                  height={16}
                  priority={true}
                />
              </button>
            </Link>
          </SwiperSlide>
        ))}

        <SwiperNavButton />
      </Swiper>
    </div>
  );
};

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="hidden absolute lg:flex top-[50%] -translate-y-[50%] z-50 w-full">
      <div
        className="relative w-[5rem] h-[5rem] cursor-pointer rounded-full overflow-hidden active:opacity-[0.9]"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <MdKeyboardArrowLeft className=" w-[5rem] h-[5rem]" />
      </div>
      <div
        className="absolute w-[5rem] h-[5rem] cursor-pointer  transform scale-x-[-1]  right-0 rounded-full overflow-hidden active:opacity-[0.9]"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <MdKeyboardArrowLeft className=" w-[5rem] h-[5rem]" />
      </div>
    </div>
  );
};

export default Slide;
