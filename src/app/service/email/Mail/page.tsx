import {
  Progress,
  Result,
  Step_email,
  Question,
  Guide,
  Slide,
  Form,
  Seo_infor,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section>
        <div className="grid justify-items-center mt-[116px] relative">
          <h1 className="font-ubuntu text-[52px] leading-[72.8px] text-center ">
            Достанем вашу рассылку из спама Mail.ru
          </h1>
          <h3 className="font-medium text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark w-[668px] mt-[48px]">
            Разберемся с вашей проблемой, выполним анализ, проведем переговоры с
            почтовыми провайдерами и устраним причины попадания в спам в
            электронной почте Mail Ru.
          </h3>
          <div className="flex gap-[59px] mt-[48px]">
            <button className="bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px]">
              Заказать услугу
            </button>
            <button className="border-accent border-solid border-2  py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] overflow-hidden z-10 bg-white dark:bg-black">
              Получить консультацию
            </button>
            <Image
              src="/Group1.png"
              alt=""
              className="absolute bottom-[-2rem] right-[6rem]"
              width={400}
              height={450}
            />
          </div>
        </div>
      </section>
      <Progress />
      <Step_email />
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
