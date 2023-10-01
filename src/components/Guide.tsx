"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "@/style/globals.scss";

import Image from "next/image";

const Data = [
  {
    new: "Работаем со всеми сервисами автоматизации и почтовыми клиентами",
    desc: "Поэтому быстро приступаем к работе, и знаем особенности и слабые места популярных сервисов",
  },
  {
    new: "Обеспечиваем доставляемость в папку «Входящие» до 99.9%",
    desc: "Чтобы вы могли сделать предложение КАЖДОМУ клиенту из своей базы",
  },
  {
    new: "Создаем и верстаем персональные письма, которые открываются на любом устройстве",
    desc: "Знаем, как создать «идеальное» письмо, которое пройдет все фильтры и будет открыто получателям",
  },
  {
    new: "Защищаем бизнес от штрафов, а домен от блокировок и черных списков",
    desc: "Заранее скажем о возможных рисках работы с «серыми базами» или снижение репутации вашего домена",
  },
];

const Guide = () => {
  return (
    <div
      id="about_us"
      className="lg:mt-[140px] mt-[56px] lg:grid justify-items-center"
    >
      <h2 className="font-ubuntu text-2xl lg:text-[40px] lg:leading-[56px] text-center w-auto lg:w-[814px]">
        Помогаем сократить потери и увеличить выручку от e-mail маркетинга
      </h2>
      <p className="font-medium text-lg lg:text-[26px] leading-[36.4px] text-center mt-[16px] lg:mt-[32px] w-auto lg:w-[668px] text-description_dark">
        Находим слабые места, в которых вы теряете деньги и помогаем повысить
        эффективность вашего e-mail маркетинга
      </p>
      <div className="hidden lg:grid lg:grid-cols-2 gap-4 lg:gap-[42px] mt-[32px]">
        {Data.map((e, i) => (
          <div
            key={i}
            className="col-span-1 h-[300px] lg:h-[526px] lg:w-auto rounded-[30px] bg-accent px-[20px] py-[20px] relative text-white"
          >
            <Image
              src="/angle.svg"
              alt=""
              className="absolute bottom-0 right-0 z-10"
              width={97.89}
              height={95.54}
            />

            <h2 className=" font-ubuntu font-medium text-lg lg:text-[32px] lg:leading-[44.8px] h-[130px]">
              {e.new}
            </h2>
            <p className="text-[#D8D8D8] lg:mt-[94px] text-sm lg:text-[24px] lg:leading-[33.6px] font-medium ">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
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
              <div
                key={i}
                className=" h-[300px] rounded-[30px] bg-accent px-[20px] py-[20px] relative text-white mt-[24px]"
              >
                <Image
                  src="/angle.svg"
                  alt=""
                  className="absolute bottom-0 right-0 z-10"
                  width={97.89}
                  height={95.54}
                />

                <h2 className=" font-ubuntu font-medium text-lg  h-[130px]">
                  {e.new}
                </h2>
                <p className="text-[#D8D8D8] text-sm font-medium ">{e.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Guide;
