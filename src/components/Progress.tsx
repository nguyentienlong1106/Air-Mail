"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const data = [
  {
    name: "Анализируем ситуацию",
    desc: "На этом этапе наши эксперты проводят консультацию с клиентом, чтобы понять его потребности и цели в email маркетинге.",
    img: "/progress1.png",
    img_d: "/progress1d.png",
  },
  {
    name: "Исследуем письма",
    desc: "Проводим анализ электронных писем. Оцениваем, проходят ли ваши письма через спам-фильтры, учитывая технические и стилистические аспекты.",
    img: "/progress2.png",
    img_d: "/progress2d.png",
  },
  {
    name: "Тестируем домен",
    desc: "Проверяем, есть ли ваш домен в черных списках почтовых сервисов и уточняем правильность настроек в DNS-зоне.",
    img: "/progress3.png",
    img_d: "/progress3d.png",
  },
  {
    name: "Работаем с базой",
    desc: "Проверяем ваши контакты на наличие спам-ловушек, заблокированных и недоступных адресов.",
    img: "/progress4.png",
    img_d: "/progress4d.png",
  },
  {
    name: "Устраняем проблему",
    desc: "Исправляем обнаруженные ошибки и предлагаем рекомендации для дальнейшей оптимизации работы.",
    img: "/progress5.png",
    img_d: "/progress5d.png",
  },
];

const Progress = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mt-[120px]">
      <h2 className="font-ubuntu font-bold text-3xl lg:text-[40px] leading-[56px] mb-[48px]">
        Как это происходит
      </h2>
      {data.map((e, i) => (
        <div
          key={i}
          className="grid grid-cols-4 items-center lg:gap-[100px] gap-5 mb-[36px]"
        >
          <div className="col-span-1">
            {theme === "dark" ? (
              <Image
                src={e.img_d}
                className=""
                alt=""
                width={248}
                height={248}
              />
            ) : (
              <Image src={e.img} alt="" className="" width={248} height={248} />
            )}
          </div>
          <div className="col-span-3">
            <h3 className="text-lg lg:text-[32px] lg:leading-[44.8px] font-medium mb-[16px]">
              {e.name}
            </h3>
            <p className="text-sm lg:text-[24px] lg:leading-[33.6px] text-description_light dark:text-description_dark lg:w-[738px]">
              {e.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
