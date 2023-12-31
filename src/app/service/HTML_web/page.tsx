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
import Link from "next/link";

export const metadata = {
  title: "Верстка HTML писем",
  description: "...",
};

const page = () => {
  return (
    <div>
      <div className="grid justify-items-center mt-[116px] relative">
        <h1 className="font-ubuntu text-3xl lg:text-[52px] lg:leading-[72.8px] text-center ">
          Верстка HTML писем
        </h1>
        <h3 className="font-medium text-lg lg:text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark lg:w-[706px] mt-[32px]">
          Создаем уникальные и запоминающиеся HTML шаблоны для вашей email
          рассылки. Оформленное письмо повышает узнаваемость бренда и
          увеличивает вовлеченность клиентов
        </h3>
        <div className="grid lg:flex gap-5 lg:gap-[59px] mt-[84px]">
          <button className="bg-accent text-white py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-auto lg:w-[452px] hover:scale-110 duration-100">
            <Link href="#contact"> Заказать услугу</Link>
          </button>
          <button className="border-accent border-solid border-2  py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-[300px] lg:w-[452px] overflow-hidden z-10 bg-white dark:bg-black hover:scale-110 duration-100 px-1">
            <Link href="#contact"> Получить консультацию</Link>
          </button>
          <Image
            src="/Mouse_b.png"
            alt=""
            className="lg:block hidden absolute top-[0rem] right-[2rem]"
            width={332}
            height={312}
          />
        </div>
      </div>
      <div className="bg-[#E8F1FF] dark:bg-[#C6DDFF] pb-5 h-auto mt-[140px] rounded-[30px] text-black relative z-10">
        <div className="p-[20px] lg:py-[56px] lg:px-[77px] grid justify-items-center">
          <h2 className="font-ubuntu font-bold text-2xl lg:text-[40px] lg:leading-[56px] text-accent ">
            Для чего нужна верстка?
          </h2>
          <div className="flex items-center gap-[35px] mt-[27px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:leading-[33.6px] text-justify">
              Эта услуга, которая позволяет создавать красивые и
              профессиональные письма с помощью HTML-разметки.
            </p>
          </div>
          <div className="flex items-center gap-[35px] mt-[36px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:leading-[33.6px] text-justify">
              Веб-дизайнеры используют эту технологию для создания уникальных
              шаблонов писем, которые помогают привлечь внимание получателя и
              повысить эффективность рассылок. Верстка писем позволяет добавлять
              изображения, видео, анимацию, ссылки и другие элементы, которые
              делают рассылку более интерактивной и привлекательной.
            </p>
          </div>
          <div className="flex items-center gap-[35px] mt-[36px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:leading-[33.6px] text-justify">
              Эта услуга также помогает оптимизировать письма для мобильных
              устройств, что является особенно важным в наше время, когда
              большинство людей используют смартфоны и планшеты для чтения
              электронной почты.
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
