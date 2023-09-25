import Image from "next/image";

const Result = () => {
  return (
    <div className="mt-[100px] grid justify-items-center">
      <h2 className="font-ubuntu font-medium text-[52px] leading-[73px] text-accent mt-[100px]">
        Результат работы
      </h2>
      <div className="flex items-center gap-[48px]">
        <p className="font-ubuntu text-[40px] leading-[56px]">
          Доходимость писем:
        </p>{" "}
        <span className="font-ubuntu text-[160px] leading-[224px] text-[#7681E5]">
          98.99%
        </span>
      </div>
      <div className="flex justify-between mt-[12px] gap-[91px]">
        <p className="w-[528px] text-[26px] text-description_dark leading-[36.4px]">
          Ваши клиенты получают письма, читают их и выполняют целевые действия
        </p>
        <div className="inline-grid">
          <p className="text-[26px] text-description_dark leading-[36.4px]">
            Отправлено писем: 109 000{" "}
          </p>{" "}
          <p className="text-[26px] text-description_dark leading-[36.4px]">
            {" "}
            Доставлено писем: 107 549
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
