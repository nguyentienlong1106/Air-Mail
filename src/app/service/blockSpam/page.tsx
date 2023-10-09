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
        <h1 className="font-ubuntu text-3xl lg:text-[52px] lg:leading-[72.8px] text-center ">
          Поможем избежать спама
        </h1>
        <h3 className="font-medium text-lg lg:text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark lg:w-[706px] mt-[32px]">
          Поможем избежать спама для вашей Email рассылки. Быстро, качественно,
          надежно.
        </h3>
        <div className="grid lg:flex gap-5 lg:gap-[59px] mt-[84px]">
          <button className="bg-accent text-white py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-auto lg:w-[452px] hover:scale-110 duration-100">
            Заказать услугу
          </button>
          <button className="border-accent border-solid border-2  py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-[300px] lg:w-[452px] overflow-hidden z-10 bg-white dark:bg-black hover:scale-110 duration-100 px-1">
            Получить консультацию
          </button>
          <Image
            src="/spam.png"
            alt=""
            className="lg:block hidden absolute top-[-10rem] right-[0rem]"
            width={523}
            height={423}
          />
        </div>
      </div>
      <div className="bg-[#E8F1FF] dark:bg-[#C6DDFF] pb-5 h-auto mt-[140px] rounded-[30px] text-black z-10 relative">
        <div className="p-[20px] lg:py-[56px] lg:px-[77px] grid justify-items-center">
          <h2 className="font-ubuntu font-bold text-2xl lg:text-[40px] leading-[56px] text-accent ">
            Консультация со специалистом
          </h2>
          <div className="flex items-center gap-[35px] mt-[27px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:lg:leading-[33.6px] text-justify">
              Услуга включает в себя анализ текущей стратегии электронной
              рассылки, выявление проблемных моментов и предоставление
              рекомендаций по их устранению.
            </p>
          </div>
          <div className="flex items-center gap-[35px] mt-[36px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:lg:leading-[33.6px] text-justify">
              Специалист поможет определить, какие элементы в письмах могут
              вызывать блокировку или пометку как спам, и предложит решения для
              улучшения доставляемости писем.
            </p>
          </div>
          <div className="flex items-center gap-[35px] mt-[36px]">
            <Image src="/mouse.png" alt="" width={52} height={52} />
            <p className="text-lg lg:text-[24px] lg:lg:leading-[33.6px] text-justify">
              Консультация может включать в себя обучение основам создания
              эффективных и безопасных email рассылок, а также рекомендации по
              использованию лучших инструментов для повышения открытия и
              кликабельности писем. В результате, вы получаете оптимизированную
              стратегию электронной рассылки, которая будет максимально
              эффективна и безопасна для получателей.
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
