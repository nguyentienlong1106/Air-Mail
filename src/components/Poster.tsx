import Link from "next/link";

const Poster = () => {
  return (
    <div
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="grid justify-items-center mt-[56px]"
    >
      <h1
        itemProp="offers"
        className="font-ubuntu text-2xl lg:text-[40px] leading-[56px] text-center lg:w-[814px]"
      >
        Помогаем провести техническую настройку и отправку ваших e-mail писем.
        Обеспечиваем стабильную доставляемость 99.9%
      </h1>
      <h3
        itemProp="usageInfo"
        className="font-medium text-lg lg:text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark lg:w-[668px] mt-[32px]"
      >
        Помогаем вытащить письма из спама, пройти спам-фильтры и добавить любое
        количество писем до ваших пользователей.
      </h3>
      <div className="grid lg:flex mt-[48px] gap-5 lg:gap-[59px]">
        <button className="bg-accent text-white  py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-auto lg:w-[452px] hover:scale-110 duration-100">
          <Link href="/service">Смотреть услуги</Link>
        </button>
        <button className="border-accent border-solid border-2 py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-[300px] lg:w-[452px] hover:scale-110 duration-100 px-1">
          Получить консультацию
        </button>
      </div>
    </div>
  );
};

export default Poster;
