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
        <h1 className="font-ubuntu text-[52px] leading-[72.8px] text-center ">
          Вывод писем из спама
        </h1>
        <h3 className="font-medium text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark w-[706px] mt-[32px]">
          Проверим домен, поможем достать письма из спама и обеспечим
          доставляемость писем до 99.9%
        </h3>
        <div className="flex gap-[59px] mt-[84px]">
          <button className="bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] hover:scale-110 duration-100">
            Заказать услугу
          </button>
          <button className="border-accent border-solid border-2  py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] overflow-hidden z-10 bg-white dark:bg-black hover:scale-110 duration-100">
            Получить консультацию
          </button>
          <Image
            src="/mouse_b.png"
            alt=""
            className="absolute top-[-3rem] right-[2rem]"
            width={332}
            height={312}
          />
        </div>
      </div>
      <Function_icon />
      <Step />
      <Result />
      <Guide />
      <Slide title="Другие услуги" />
      <Form />
      <Seo_infor />
      <Question />
    </div>
  );
};

export default page;
