"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "@/style/globals.scss";

import Image from "next/image";
import { useTheme } from "next-themes";

const Data = [
  {
    step: "1",
    image: "/10.png",
    imageD: "/10d.png",
    name: "Изучим текущие показатели и определим план действий",
    infor:
      "Смотрим на ваши рассылки, строим предположения и создаем план действий по выходу из под спама",
  },
  {
    step: "2",
    name: "Исследуем письма, базу адресов, рейтинг и репутацию домена",
    image: "/11.png",
    imageD: "/11d.png",
    infor:
      "Проверяем все элементы рассылки, которые могут привести к блокировке и попаданию в черные списки провайдеров",
  },
  {
    step: "3",
    image: "/9.png",
    imageD: "/9d.png",
    name: "Вносим исправления и проверяем доходимость писем по базе",
    infor:
      "Проверяем все элементы рассылки, которые могут привести к блокировке и попаданию в черные списки провайдеров",
  },
];

const Step = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mt-[48px] lg:mt-[156px] lg:mb-[162px] relative">
      <div className="grid justify-center">
        <h2 className="font-ubuntu font-bold text-3xl lg:text-[40px] leading-[56px] text-center">
          Сделаем всё под ключ
        </h2>{" "}
        <h3 className="text-2xl lg:text-[32px] leading-[44.8px] text-center mt-[16px]">
          Весь процесс занимает 14-16 дней.
        </h3>{" "}
        <p className="text-lg lg:text-[28px] leading-[36.4px] text-center lg:w-[542px] text-description_dark mt-[12px] px-3">
          Точные сроки назовем после изучения ваших рассылок и ресурсов
        </p>{" "}
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-[24px] mt-[48px]">
        {Data.map((e, i) => (
          <div key={i} className="col-span-1 h-[564px] w-[411px]">
            {" "}
            <span
              className={`text-[20px] font-medium text-white bg-accent py-3 px-[20px] rounded-[50px] `}
            >
              Шаг {e.step}
            </span>
            {theme === "dark" ? (
              <Image
                src={e.imageD}
                className="mt-[48px]"
                alt=""
                width={180}
                height={180}
              />
            ) : (
              <Image
                src={e.image}
                className="mt-[48px]"
                alt=""
                width={180}
                height={180}
              />
            )}
            <h2 className="mt-[24px] font-medium text-[30px] leading-[42px]">
              {e.name}
            </h2>
            <p className="mt-[16px] text-[24px] leading-[33.6px]">{e.infor}</p>
          </div>
        ))}
      </div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Data.map((e, i) => (
          <SwiperSlide key={i}>
            <div className="lg:hidden h-[600px] w-[236px]">
              {" "}
              <p
                className={`text-sm mt-[12px] font-medium text-white bg-accent py-2 w-[80px] rounded-[50px] text-center`}
              >
                Шаг {e.step}
              </p>
              {theme === "dark" ? (
                <Image
                  src={e.imageD}
                  className="mt-[24px]"
                  alt=""
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src={e.image}
                  className="mt-[24px]"
                  alt=""
                  width={100}
                  height={100}
                />
              )}
              <h2 className="mt-[24px] font-medium text-xl ">{e.name}</h2>
              <p className="mt-[16px] text-sm ">{e.infor}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid">
        <button className="bg-accent py-3 lg:px-11 lg:py-5 text-white rounded-[900px] text-sm lg:text-[24px] lg:leading-[31px] mt-[56px] lg:absolute lg:right-20 lg:bottom-[-10rem] hover:scale-110 duration-100">
          Узнать точную стоимость вывода из спама услугу
        </button>
      </div>
    </div>
  );
};

export default Step;
