import { Form, Question, Seo_infor } from "@/components";
import Image from "next/image";
import Link from "next/link";

const data1 = [
  {
    name: "Верстка HTML писем",
    img: "/link1.png",
    href: "/service/HTML_web",
  },
  {
    name: "Поможем избежать спама",
    img: "/link2.png",
    href: "/service/blockSpam",
  },
  {
    name: "Настройка домена для рассылок",
    img: "/link3.png",
    href: "/service/config_domain",
  },
  {
    name: "Вывод писем из спама",
    img: "/link4.png",
    href: "/service/conslusionSpam",
  },
];
const data2 = [
  {
    name: "Mail.ru",
    img: "/mail1.png",
    href: "/service/email/Mail",
  },
  {
    name: "Yandex.ru",
    img: "/mail2.png",
    href: "/service/email/Yandex",
  },
  {
    name: "Gmail.com",
    img: "/mail3.png",
    href: "/service/email/Gmail",
  },
];
const data3 = [
  {
    name: "Настройка аутентификации электронной почты",
    img: "/1.png",
    href: "/service/authenticate",
  },
  {
    name: "Настройка доменной/корпоративной почты",
    img: "/2.png",
    href: "/service/config_dmarc",
  },
];
const data4 = [
  {
    name: "Настройка серверов Email рассылки",
    img: "/3.png",
    href: "/service/config_Email",
  },
  {
    name: "Настройка DKIM записи",
    img: "/4.png",
    href: "/service/config_dkim",
  },
  {
    name: "Настройка сервисов почтовых рассылок",
    img: "/5.png",
    href: "/service/setting_mail",
  },
];

export const metadata = {
  title: "Наши услуги",
  description: "...",
};

const Service = () => {
  return (
    <div>
      <section>
        <div className="grid justify-items-center mt-[56px] lg:mt-[116px] relative">
          <h1 className="font-ubuntu text-3xl lg:text-[52px] leading-[56px] text-center">
            Наши услуги
          </h1>
          <h3 className="font-medium text-lg lg:text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark lg:w-[668px] mt-[32px]">
            Помогаем вытащить письма из спама, пройти спам-фильтры и добавить
            любое количество писем до ваших пользователей.
          </h3>
          <div className="grid lg:flex mt-[48px] gap-5 lg:gap-[59px]">
            <button className="bg-accent text-white  py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-auto lg:w-[452px] hover:scale-110 duration-100">
              <Link href="#contact"> Заказать услугу</Link>
            </button>
            <button className="border-accent border-solid border-2 py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-[300px] lg:w-[452px] hover:scale-110 duration-100 px-1">
              <Link href="#contact">Получить консультацию</Link>
            </button>
            <Image
              src="/Mouse_b.png"
              alt=""
              className=" hidden lg:block absolute bottom-[6rem] right-[5rem]"
              width={332}
              height={312}
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="mt-[120px] mb-[32px] lg:mb-[48px] font-ubuntu text-2xl lg:text-[52px] text-center lg:text-left leading-[72px]">
          Наши услуги
        </h2>
        <div className="grid grid-cols-2 gap-[24px]">
          {data1.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="col-span-1 relative w-full h-[200px] lg:h-[410px] px-[10px] lg:px-[32px] pt-[10px] lg:pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100"
            >
              <h3 className="font-medium text-black text-lg lg:text-[32px] lg:leading-[45px] w-[90%]">
                {e.name}
              </h3>

              {i === 2 ? (
                <Image
                  src={e.img}
                  alt=""
                  className="hidden lg:block absolute bottom-0 left-0"
                  width={300}
                  height={300}
                />
              ) : (
                <Image
                  src={e.img}
                  alt=""
                  className=" hidden lg:block absolute bottom-0 left-0"
                  width={400}
                  height={400}
                />
              )}
              {i === 2 ? (
                <Image
                  src={e.img}
                  alt=""
                  className="lg:hidden absolute bottom-0 left-0"
                  width={70}
                  height={70}
                />
              ) : (
                <Image
                  src={e.img}
                  alt=""
                  className=" lg:hidden absolute bottom-0 left-0"
                  width={100}
                  height={100}
                />
              )}
              <Image
                src="/Vector.png"
                alt=""
                className="absolute lg:top-[2.5rem] top-2 right-2 lg:right-[2rem] lg:scale-100 scale-50"
                width={42}
                height={42}
              />
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-ubuntu text-2xl lg:text-[40px] leading-[56px] text-center lg:mt-[64px] mt-[32px] mb-[16px] lg:mb-[36px]">
          Достанем вашу рассылку из спама
        </h2>
        <div className="grid grid-cols-3 gap-[24px]">
          {data2.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="col-span-1 relative w-full h-[200px] lg:h-[410px] px-[10px] lg:px-[32px] pt-[10px] lg:pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100 overflow-hidden"
            >
              <h3 className="font-medium text-black text-lg lg:text-[32px] lg:leading-[45px]">
                {e.name}
              </h3>
              {i === 0 ? (
                <Image
                  src={e.img}
                  alt=""
                  className="absolute bottom-[0rem] right-[0rem]"
                  width={498}
                  height={168}
                />
              ) : (
                <Image
                  src={e.img}
                  alt=""
                  className="absolute bottom-[0rem] right-[0rem]"
                  width={330}
                  height={230}
                />
              )}

              <Image
                src="/Vector.png"
                alt=""
                className="absolute lg:top-[2.5rem] top-2 right-2 lg:right-[2rem] lg:scale-100 scale-50"
                width={42}
                height={42}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="lg:pb-[100px]">
        <h2 className="font-ubuntu text-2xl lg:text-[40px] lg:leading-[56px] text-center mt-[64px] mb-[36px]">
          Настроим индивидуально под ваш сервис
        </h2>
        <div className="grid grid-cols-2 gap-[24px]">
          {data3.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="col-span-1 relative w-full h-[300px] lg:h-[410px] px-[10px] lg:px-[32px] pt-[10px] lg:pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100"
            >
              <h3 className="font-medium text-black text-lg lg:text-[32px] lg:leading-[45px] lg:w-[368px] w-[80%]">
                {e.name}
              </h3>

              <Image
                src={e.img}
                alt=""
                className="hidden lg:block absolute bottom-[0rem] left-[0rem]"
                width={280}
                height={280}
              />
              <Image
                src={e.img}
                alt=""
                className="lg:hidden absolute bottom-[0rem] left-[0rem]"
                width={100}
                height={100}
              />

              <Image
                src="/Vector.png"
                alt=""
                className="absolute lg:top-[2.5rem] top-2 right-2 lg:right-[2rem] lg:scale-100 scale-50"
                width={42}
                height={42}
              />
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[24px] mt-[24px]">
          {data4.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="col-span-1 relative w-full h-[300px] lg:h-[410px] px-[10px] lg:px-[32px] pt-[10px] lg:pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100"
            >
              <h3 className="font-medium text-black text-lg lg:text-[32px] lg:leading-[45px] w-[80%] ">
                {e.name}
              </h3>

              <Image
                src={e.img}
                alt=""
                className="hidden lg:block absolute bottom-[0rem] left-[0rem]"
                width={280}
                height={280}
              />
              <Image
                src={e.img}
                alt=""
                className="lg:hidden absolute bottom-[0rem] left-[0rem]"
                width={100}
                height={100}
              />

              <Image
                src="/Vector.png"
                alt=""
                className="absolute lg:top-[2.5rem] top-2 right-2 lg:right-[2rem] lg:scale-100 scale-50"
                width={42}
                height={42}
              />
            </Link>
          ))}
        </div>
      </section>
      <Form />
      <Seo_infor />
      <Question />
    </div>
  );
};

export default Service;
