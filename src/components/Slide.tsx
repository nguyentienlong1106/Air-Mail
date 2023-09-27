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

const Slide = ({ title }: { title: string }) => {
  return (
    <div className="mt-[140px]">
      <h2 className="text-[40px] leading-[56px] font-ubuntu grid  mb-[48px]">
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
        <SwiperSlide>
          <div className="relative w-[1064px] h-[436px] border-[3px] border-solid border-accent rounded-[30px] overflow-hidden">
            <div className="grid                                          grid-cols-5">
              <div className="col-span-3 mt-[51px] ml-[94px]">
                <h2 className="font-ubuntu text-[40px] leading-[56px] w-[347px]">
                  Вытаскиваем письма из спама
                </h2>
                <p className="font-medium text-[20px] leading-[28px] mt-[24px] w-[500px] text-description_light dark:text-description_dark">
                  Если ваши рассылки или welcome-цепочки попадают сразу в папку
                  «спам» и не доходят до пользователей
                </p>
                <button className="bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] mt-[48px]">
                  Подробнее
                </button>
              </div>
              <div className="col-span-2">
                <Image
                  src="/banner1.png"
                  alt=""
                  className="object-cover mt-[61px]"
                  width={314}
                  height={314}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[1064px] h-[436px] border-[3px] border-solid border-accent rounded-[30px] overflow-hidden">
            <div className="grid                                          grid-cols-5">
              <div className="col-span-3 mt-[51px] ml-[94px]">
                <h2 className="font-ubuntu text-[40px] leading-[56px] w-[347px]">
                  Вытаскиваем письма из спама
                </h2>
                <p className="font-medium text-[20px] leading-[28px] mt-[24px] w-[500px] text-description_light dark:text-description_dark">
                  Если ваши рассылки или welcome-цепочки попадают сразу в папку
                  «спам» и не доходят до пользователей
                </p>
                <button className="bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] mt-[48px]">
                  Подробнее
                </button>
              </div>
              <div className="col-span-2">
                <Image
                  src="/banner1.png"
                  alt=""
                  className="object-cover mt-[61px]"
                  width={314}
                  height={314}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[1064px] h-[436px] border-[3px] border-solid border-accent rounded-[30px] overflow-hidden">
            <div className="grid                                          grid-cols-5">
              <div className="col-span-3 mt-[51px] ml-[94px]">
                <h2 className="font-ubuntu text-[40px] leading-[56px] w-[347px]">
                  Вытаскиваем письма из спама
                </h2>
                <p className="font-medium text-[20px] leading-[28px] mt-[24px] w-[500px] text-description_light dark:text-description_dark">
                  Если ваши рассылки или welcome-цепочки попадают сразу в папку
                  «спам» и не доходят до пользователей
                </p>
                <button className="bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] mt-[48px]">
                  Подробнее
                </button>
              </div>
              <div className="col-span-2">
                <Image
                  src="/banner1.png"
                  alt=""
                  className="object-cover mt-[61px]"
                  width={314}
                  height={314}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperNavButton />
      </Swiper>
    </div>
  );
};

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute flex top-[50%] -translate-y-[50%] z-50 w-full">
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
