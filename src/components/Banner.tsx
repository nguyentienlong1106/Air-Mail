import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid justify-items-center mt-[116px] relative">
      <h1 className="font-ubuntu text-2xl lg:text-[52px] lg:leading-[72.8px] text-center ">
        Настройка сервисов почтовых рассылок
      </h1>
      <h3 className="font-medium text-lg lg:text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark lg:w-[668px] mt-[32px]">
        Настроим ESP под ваши сервисы
      </h3>
      <div className="grid lg:flex gap-5 lg:gap-[59px] mt-[84px]">
        <button className="bg-accent text-white py-2 lg:py-[20px] rounded-[900px] text-lg lg:text-[24px] leading-[31px] w-auto lg:w-[452px] hover:scale-110 duration-100">
          Заказать услугу
        </button>
        <button className="border-accent border-solid border-2  py-2 lg:py-[20px] rounded-[900px] text-lg lg:text-[24px] leading-[31px] w-[300px] lg:w-[452px] overflow-hidden z-10 bg-white dark:bg-black hover:scale-110 duration-100">
          Получить консультацию
        </button>
        <Image
          src="/Group1.png"
          alt=""
          className="lg:block hidden absolute bottom-[-7rem] right-[10rem]"
          width={392}
          height={433}
        />
      </div>
    </div>
  );
};

export default Banner;
