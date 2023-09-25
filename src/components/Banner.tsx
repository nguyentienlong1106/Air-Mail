import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid justify-items-center mt-[116px] relative">
      <h1 className="font-ubuntu text-[40px] leading-[56px] text-center w-[814px]">
        Настройка сервисов почтовых рассылок
      </h1>
      <h3 className="font-medium text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark w-[668px] mt-[32px]">
        Настроим ESP под ваши сервисы
      </h3>
      <div className="flex gap-[59px] mt-[120px]">
        <button className="bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px]">
          Заказать услугу
        </button>
        <button className="border-accent border-solid border-2  py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] overflow-hidden z-10 bg-white dark:bg-black">
          Получить консультацию
        </button>
        <Image
          src="/Group1.png"
          alt=""
          className="absolute bottom-[-7rem] right-[10rem]"
          width={392}
          height={433}
        />
      </div>
    </div>
  );
};

export default Banner;
