import Image from "next/image";

const Data = [
  {
    new: "Работаем со всеми сервисами автоматизации и почтовыми клиентами",
    desc: "Поэтому быстро приступаем к работе, и знаем особенности и слабые места популярных сервисов",
  },
  {
    new: "Обеспечиваем доставляемость в папку «Входящие» до 99.9%",
    desc: "Чтобы вы могли сделать предложение КАЖДОМУ клиенту из своей базы",
  },
  {
    new: "Создаем и верстаем персональные письма, которые открываются на любом устройстве",
    desc: "Знаем, как создать «идеальное» письмо, которое пройдет все фильтры и будет открыто получателям",
  },
  {
    new: "Защищаем бизнес от штрафов, а домен от блокировок и черных списков",
    desc: "Заранее скажем о возможных рисках работы с «серыми базами» или снижение репутации вашего домена",
  },
];

const Guide = () => {
  return (
    <div id="about_us" className="mt-[140px] grid justify-items-center">
      <h2 className="font-ubuntu text-[40px] leading-[56px] text-center w-[814px]">
        Помогаем сократить потери и увеличить выручку от e-mail маркетинга
      </h2>
      <p className="font-medium text-[26px] leading-[36.4px] text-center mt-[32px] w-[668px] text-description_dark">
        Находим слабые места, в которых вы теряете деньги и помогаем повысить
        эффективность вашего e-mail маркетинга
      </p>
      <div className="grid grid-cols-2 gap-[42px] mt-[32px]">
        {Data.map((e, i) => (
          <div
            key={i}
            className="col-span-1 h-[526px] w-[590px] rounded-[8px] rounded-br-[80px] bg-accent px-[61px] py-[99px] relative text-white"
          >
            <Image
              src="/angle.svg"
              alt=""
              className="absolute bottom-0 right-0 z-10"
              width={97.89}
              height={95.54}
            />

            <h2 className=" font-ubuntu font-medium text-[32px] leading-[44.8px] h-[130px]">
              {e.new}
            </h2>
            <p className="mt-[94px] text-[24px] leading-[33.6px] font-medium ">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
