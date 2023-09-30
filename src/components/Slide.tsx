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

const Slide = ({ title, styleText }: { title: string; styleText: string }) => {
  return (
    <div className="lg:mt-[140px] mt-[93px]">
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
        <SwiperSlide className="relative p-2">
          <div className="relative w-full lg:w-[1064px] h-[436px] lg:border-[3px] lg:border-solid lg:border-accent rounded-[30px] overflow-hidden bg-slide bg-no-repeat bg-cover bg-center lg:bg-none">
            <div className="grid lg:grid-cols-5 z-10 relative">
              <div className="lg:col-span-3 mt-[32px] lg:mt-[51px] mx-[28px] lg:ml-[94px]">
                <h2 className="font-ubuntu text-2xl lg:text-[40px] leading-[56px] w-[347px] text-white lg:text-current">
                  Вытаскиваем письма из спама
                </h2>
                <p className="font-medium text-lg lg:text-[20px] leading-[28px] mt-[24px] lg:w-[500px] text-[#D8D8D8] lg:text-description_dark">
                  Если ваши рассылки или welcome-цепочки попадают сразу в папку
                  «спам» и не доходят до пользователей
                </p>
                <button className="hidden lg:block bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] mt-[48px]">
                  Подробнее
                </button>
                <button className="lg:hidden absolute bg-accent text-white p-5 rounded-[900px] bottom-[-14rem] right-[2.5rem]">
                  <Image
                    src="/Vector_white.png"
                    alt=""
                    width={16}
                    height={16}
                    priority={true}
                  />
                </button>
              </div>
              <div className="hidden lg:block lg:col-span-2">
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
          <div className="lg:hidden absolute inset-0 bg-black opacity-20 rounded-[40px] m-2"></div>
        </SwiperSlide>
        <SwiperSlide className="relative p-2">
          <div className="relative w-full lg:w-[1064px] h-[436px] lg:border-[3px] lg:border-solid lg:border-accent rounded-[30px] overflow-hidden bg-slide bg-no-repeat bg-cover bg-center lg:bg-none">
            <div className="grid lg:grid-cols-5 z-10 relative">
              <div className="lg:col-span-3 mt-[32px] lg:mt-[51px] mx-[28px] lg:ml-[94px]">
                <h2 className="font-ubuntu text-2xl lg:text-[40px] leading-[56px] w-[347px] text-white lg:text-current">
                  Вытаскиваем письма из спама
                </h2>
                <p className="font-medium text-lg lg:text-[20px] leading-[28px] mt-[24px] lg:w-[500px] text-[#D8D8D8] lg:text-description_dark">
                  Если ваши рассылки или welcome-цепочки попадают сразу в папку
                  «спам» и не доходят до пользователей
                </p>
                <button className="hidden lg:block bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] mt-[48px]">
                  Подробнее
                </button>
                <button className="lg:hidden absolute bg-accent text-white p-5 rounded-[900px] bottom-[-14rem] right-[2.5rem]">
                  <Image
                    src="/Vector_white.png"
                    alt=""
                    width={16}
                    height={16}
                    priority={true}
                  />
                </button>
              </div>
              <div className="hidden lg:block lg:col-span-2">
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
          <div className="lg:hidden absolute inset-0 bg-black opacity-20 rounded-[40px] m-2"></div>
        </SwiperSlide>
        <SwiperSlide className="relative p-2">
          <div className="relative w-full lg:w-[1064px] h-[436px] lg:border-[3px] lg:border-solid lg:border-accent rounded-[30px] overflow-hidden bg-slide bg-no-repeat bg-cover bg-center lg:bg-none">
            <div className="grid lg:grid-cols-5 z-10 relative">
              <div className="lg:col-span-3 mt-[32px] lg:mt-[51px] mx-[28px] lg:ml-[94px]">
                <h2 className="font-ubuntu text-2xl lg:text-[40px] leading-[56px] w-[347px] text-white lg:text-current">
                  Вытаскиваем письма из спама
                </h2>
                <p className="font-medium text-lg lg:text-[20px] leading-[28px] mt-[24px] lg:w-[500px] text-[#D8D8D8] lg:text-description_dark">
                  Если ваши рассылки или welcome-цепочки попадают сразу в папку
                  «спам» и не доходят до пользователей
                </p>
                <button className="hidden lg:block bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] mt-[48px]">
                  Подробнее
                </button>
                <button className="lg:hidden absolute bg-accent text-white p-5 rounded-[900px] bottom-[-14rem] right-[2.5rem]">
                  <Image
                    src="/Vector_white.png"
                    alt=""
                    width={16}
                    height={16}
                    priority={true}
                  />
                </button>
              </div>
              <div className="hidden lg:block lg:col-span-2">
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
          <div className="lg:hidden absolute inset-0 bg-black opacity-20 rounded-[40px] m-2"></div>
        </SwiperSlide>
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
