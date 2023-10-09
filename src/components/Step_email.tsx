"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "@/style/globals.scss";

const Data = [
  {
    image: "/email1.png",
    imageD: "/email1d.png",
    name: "Email-маркетолог",
    infor:
      "У вас возникли проблемы с работой почтовых рассылок, и вам необходимо оперативно восстановить их функциональность и выяснить причину возникших проблем.",
  },
  {
    name: "Маркетолог",
    image: "/email2.png",
    imageD: "/email3d.png",
    infor:
      "Почтовые рассылки являются важным инструментом маркетинга. Если вы не хотите, чтобы они простаивали, необходимо найти решение проблемы и вернуть работоспособность рассылок, чтобы продолжить эффективно взаимодействовать с вашей аудиторией.",
  },
  {
    image: "/email3.png",
    imageD: "/email2d.png",
    name: "Предприниматель",
    infor:
      "Необходимо оперативно разобраться в причинах проблемы и восстановить нормальную функциональность рассылок, чтобы продолжить эффективно достигать своих целей в маркетинге.",
  },
];

const Step_email = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="lg:mt-[156px] mt-[48px] lg:mb-[300px] lg:mx-0 relative">
      <div className="grid justify-center">
        <h2 className="font-ubuntu font-bold text-2xl lg:text-[40px] lg:leading-[56px] text-center">
          Кому это подходит
        </h2>{" "}
        <h3 className="text-lg lg:text-[32px] lg:leading-[44.8px] text-center mt-[16px]">
          Весь процесс занимает 14-16 дней.
        </h3>{" "}
        <p className="text-lg lg:text-[28px] lg:leading-[36.4px] text-center lg:w-[542px] text-description_dark mt-[12px]">
          Точные сроки назовем после изучения ваших рассылок и ресурсов
        </p>{" "}
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-[24px] mt-[48px]">
        {Data.map((e, i) => (
          <div key={i} className="col-span-1 h-[564px] w-[411px]">
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
            <h2 className="mt-[24px] font-medium text-[32px] leading-[44px]">
              {e.name}
            </h2>
            <p className="mt-[16px] text-[24px] lg:leading-[33.6px]">
              {e.infor}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden mx-[-16px]">
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
              <div key={i} className="lg:col-span-1 h-auto pb-10 w-[236px]">
                {theme === "dark" ? (
                  <Image
                    src={e.imageD}
                    className="mt-[24px]"
                    alt=""
                    width={180}
                    height={180}
                  />
                ) : (
                  <Image
                    src={e.image}
                    className="mt-[24px]"
                    alt=""
                    width={180}
                    height={180}
                  />
                )}
                <h2 className="mt-[24px] font-medium text-xl lg:text-[32px] lg:leading-[44px]">
                  {e.name}
                </h2>
                <p className="mt-[16px] text-sm lg:text-[24px] lg:lg:leading-[33.6px]">
                  {e.infor}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid">
        <button className="bg-accent py-3 lg:px-11 lg:py-5 text-white rounded-[900px] text-sm lg:text-[24px] lg:leading-[31px] mt-[56px] lg:absolute lg:right-20 lg:bottom-[-14rem] hover:scale-110 duration-100">
          Узнать точную стоимость вывода из спама услугу
        </button>
      </div>
    </div>
  );
};

export default Step_email;
