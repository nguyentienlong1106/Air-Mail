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
    href: "service/blockSpam",
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
    href: "/email/Mail",
  },
  {
    name: "Yandex.ru",
    img: "/mail2.png",
    href: "/email/Mail",
  },
  {
    name: "Gmail.com",
    img: "/mail3.png",
    href: "/email/Mail",
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
    href: "/",
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
    href: "/",
  },
];

const Service = () => {
  return (
    <div>
      <section>
        <div className="grid justify-items-center mt-[116px] relative">
          <h1 className="font-ubuntu text-[52px] leading-[56px] text-center">
            Наши услуги
          </h1>
          <h3 className="font-medium text-[26px] text-center leading-[36.4px] text-description_light dark:text-description_dark w-[668px] mt-[32px]">
            Помогаем вытащить письма из спама, пройти спам-фильтры и добавить
            любое количество писем до ваших пользователей.
          </h3>
          <div className="flex gap-[59px] mt-[80px]">
            <button className="bg-accent text-white py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] hover:scale-110 duration-100">
              Заказать услугу
            </button>
            <button className="border-accent border-solid border-2  py-[20px] rounded-[900px] text-[24px] leading-[31px] w-[452px] overflow-hidden z-10 bg-white dark:bg-black hover:scale-110 duration-100">
              Получить консультацию
            </button>
            <Image
              src="/Mouse_b.png"
              alt=""
              className="absolute bottom-[6rem] right-[5rem]"
              width={332}
              height={312}
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="mt-[120px] mb-[48px] font-ubuntu text-[52px] leading-[72px]">
          Наши услуги
        </h2>
        <div className="grid grid-cols-2 gap-[24px]">
          {data1.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="col-span-1 relative w-full h-[410px] px-[32px] pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100"
            >
              <h3 className="font-medium text-black text-[32px] leading-[45px]">
                {e.name}
              </h3>

              {i === 2 ? (
                <Image
                  src={e.img}
                  alt=""
                  className="absolute bottom-[0rem] left-[0rem]"
                  width={300}
                  height={300}
                />
              ) : (
                <Image
                  src={e.img}
                  alt=""
                  className="absolute bottom-[0rem] left-[0rem]"
                  width={400}
                  height={400}
                />
              )}
              <Image
                src="/Vector.png"
                alt=""
                className="absolute top-[2.5rem] right-[2rem] "
                width={42}
                height={42}
              />
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-ubuntu text-[40px] leading-[56px] text-center mt-[64px] mb-[36px]">
          Достанем вашу рассылку из спама
        </h2>
        <div className="grid grid-cols-3 gap-[24px]">
          {data2.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="col-span-1 relative w-full h-[410px] px-[32px] pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100"
            >
              <h3 className="font-medium text-black text-[32px] leading-[45px]">
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
                className="absolute top-[2.5rem] right-[2rem]"
                width={42}
                height={42}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="pb-[100px]">
        <h2 className="font-ubuntu text-[40px] leading-[56px] text-center mt-[64px] mb-[36px]">
          Настроим индивидуально под ваш сервис
        </h2>
        <div className="grid grid-cols-2 gap-[24px]">
          {data3.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className="col-span-1 relative w-full h-[410px] px-[32px] pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100"
            >
              <h3 className="font-medium text-black text-[32px] leading-[45px] w-[368px]">
                {e.name}
              </h3>

              <Image
                src={e.img}
                alt=""
                className="absolute bottom-[0rem] left-[0rem]"
                width={280}
                height={280}
              />

              <Image
                src="/Vector.png"
                alt=""
                className="absolute top-[2.5rem] right-[2rem]"
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
              className="col-span-1 relative w-full h-[410px] px-[32px] pt-[40px] bg-[#E8F1FF] dark:bg-[#C6DDFF] rounded-[20px] hover:translate-x-3 duration-100"
            >
              <h3 className="font-medium text-black text-[32px] leading-[45px]">
                {e.name}
              </h3>

              <Image
                src={e.img}
                alt=""
                className="absolute bottom-[0rem] left-[0rem]"
                width={280}
                height={280}
              />

              <Image
                src="/Vector.png"
                alt=""
                className="absolute bottom-[2.5rem] right-[2rem]"
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
