"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const Data = [
  {
    step: "1",
    image: "/10.png",
    imageD: "/10d.png",
    name: "Изучим текущие показатели и определим план действий",
    infor:
      "Смотрим на ваши рассылки, строим предположения и создаем план действий по выходу из под спама",
  },
  {
    step: "2",
    name: "Исследуем письма, базу адресов, рейтинг и репутацию домена",
    image: "/11.png",
    imageD: "/11d.png",
    infor:
      "Проверяем все элементы рассылки, которые могут привести к блокировке и попаданию в черные списки провайдеров",
  },
  {
    step: "3",
    image: "/9.png",
    imageD: "/9d.png",
    name: "Вносим исправления и проверяем доходимость писем по базе",
    infor:
      "Проверяем все элементы рассылки, которые могут привести к блокировке и попаданию в черные списки провайдеров",
  },
];

const Step = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mt-[156px] mb-[162px] relative">
      <div className="grid justify-center">
        <h2 className="font-ubuntu font-bold text-[40px] leading-[56px] text-center">
          Сделаем всё под ключ
        </h2>{" "}
        <h3 className="text-[32px] leading-[44.8px] text-center mt-[16px]">
          Весь процесс занимает 14-16 дней.
        </h3>{" "}
        <p className="text-[28px] leading-[36.4px] text-center w-[542px] text-description_dark mt-[12px]">
          Точные сроки назовем после изучения ваших рассылок и ресурсов
        </p>{" "}
      </div>
      <div className="grid grid-cols-3 gap-[24px] mt-[48px]">
        {Data.map((e, i) => (
          <div key={i} className="col-span-1 h-[564px] w-[411px]">
            {" "}
            <span
              className={`text-[20px] font-medium text-white bg-accent py-3 px-[20px] rounded-[50px] `}
            >
              Шаг {e.step}
            </span>
            {theme === "dark" ? (
              <Image
                src={e.imageD}
                className="mt-[48px]"
                alt=""
                width={180}
                height={180}
              />
            ) : (
              <Image
                src={e.image}
                className="mt-[48px]"
                alt=""
                width={180}
                height={180}
              />
            )}
            <h2 className="mt-[24px] font-medium text-[30px] leading-[42px]">
              {e.name}
            </h2>
            <p className="mt-[16px] text-[24px] leading-[33.6px]">{e.infor}</p>
          </div>
        ))}
      </div>
      <button className="bg-accent px-11 py-6 text-white rounded-[900px] text-[24px] leading-[31px] mt-[56px] absolute right-20 ">
        Узнать точную стоимость вывода из спама услугу
      </button>
    </div>
  );
};

export default Step;
