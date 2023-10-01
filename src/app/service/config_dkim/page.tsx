import {
  Function_icon,
  Step,
  Result,
  Question,
  Guide,
  Slide,
  Form,
  Seo_infor,
} from "@/components";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="grid justify-items-center mt-[116px] relative">
        <h1 className="font-ubuntu text-2xl lg:text-[52px] lg:leading-[72.8px] text-center">
          Настройка DKIM записи
        </h1>
        <h3 className="font-medium text-lg lg:text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark lg:w-[706px] mt-[32px]">
          Настроим DKIM запись и улучшим узнаваемость ваших рассылок.
          Предотвратим попадание ваших клиентов на спам или фишинг
        </h3>
        <div className="grid lg:flex gap-5 lg:gap-[59px] mt-[84px]">
          <button className="bg-accent text-white py-2 lg:py-[20px] rounded-[900px] text-lg lg:text-[24px] leading-[31px] w-auto lg:w-[452px] hover:scale-110 duration-100">
            Заказать услугу
          </button>
          <button className="border-accent border-solid border-2  py-2 lg:py-[20px] rounded-[900px] text-lg lg:text-[24px] leading-[31px] w-[300px] lg:w-[452px] overflow-hidden z-10 bg-white dark:bg-black hover:scale-110 duration-100">
            Получить консультацию
          </button>
          <Image
            src="/mouse_b.png"
            alt=""
            className="lg:block hidden absolute top-[-1rem] right-[2rem]"
            width={332}
            height={312}
          />
        </div>
      </div>
      <div className="bg-[#E8F1FF] dark:bg-[#C6DDFF] lg:h-[390px] h-[800px] mt-[140px] rounded-[30px] text-black z-10 relative">
        <div className="p-[20px] lg:py-[56px] lg:px-[77px] grid justify-items-center">
          <h2 className="font-ubuntu font-bold text-2xl lg:text-[40px] leading-[56px] text-accent ">
            Что мы предлагаем:
          </h2>
          <div className="flex items-center gap-[35px] mt-[27px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:leading-[33.6px] text-justify">
              Мы предоставляем услуги по настройке и внедрению этой технологии
              на серверах своих клиентов.
            </p>
          </div>
          <div className="flex items-center gap-[35px] mt-[36px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:leading-[33.6px] text-justify">
              Услуга включает в себя создание DNS-записей для указания правил
              проверки подлинности электронной почты и настройку механизмов
              отчетности о доставке и обработке писем.
            </p>
          </div>
          <div className="flex items-center gap-[35px] mt-[36px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:leading-[33.6px] text-justify">
              Также предоставляем услуги мониторинга и анализа электронной почты
              с помощью DKIM, чтобы обнаруживать и блокировать поддельные
              сообщения, повышая безопасность и репутацию организации.
            </p>
          </div>
        </div>
      </div>
      <Function_icon />
      <Step />
      <Result />
      <Guide />
      <Slide title="Другие услуги" styleText="" />
      <Form />
      <Seo_infor />
      <Question />
    </div>
  );
};

export default page;
