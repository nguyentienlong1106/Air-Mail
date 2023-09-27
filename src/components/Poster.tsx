const Poster = () => {
  return (
    <div className="grid justify-items-center mt-[56px]">
      <h1 className="font-ubuntu text-[40px] leading-[56px] text-center w-[814px]">
        Помогаем провести техническую настройку и отправку ваших e-mail писем.
        Обеспечиваем стабильную доставляемость 99.9%
      </h1>
      <h3 className="font-medium text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark w-[668px] mt-[32px]">
        Помогаем вытащить письма из спама, пройти спам-фильтры и добавить любое
        количество писем до ваших пользователей.
      </h3>
      <div className="flex mt-[48px] gap-[59px]">
        <button className="bg-accent text-white  py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] hover:scale-110 duration-100">
          Смотреть услуги
        </button>
        <button className="border-accent border-solid border-2  py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] hover:scale-110 duration-100">
          Получить консультацию
        </button>
      </div>
    </div>
  );
};

export default Poster;
