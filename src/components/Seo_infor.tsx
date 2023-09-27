import Image from "next/image";

const Seo_infor = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-br hover:bg-gradient-to-r from-[#0019FF] to-[#7481f8] mt-[100px] h-[775px] rounded-[32px] grid grid-cols-5 gap-[24px] z-10 relative"
    >
      <div className="col-span-2 mt-[56px] ml-[55px] relative text-white ">
        <h2 className="font-ubuntu text-[40px] leading-[56px] mb-[32px]">
          Свяжитесь с нами любым удобным способом
        </h2>
        <Image alt="" src="/ER_Photo.png" width={519} height={519} />
        <span className="absolute bottom-32 bg-accent py-1 px-8 rounded-[50px] text-[40px] font-ubuntu leading-[56px]">
          Евгений Румянцев{" "}
        </span>
        <span className="absolute bottom-20 bg-accent px-20 rounded-[50px] text-[38px] font-ubuntu leading-[50px] italic sepia-[0.2]">
          CEO{" "}
        </span>
      </div>
      <div className="col-span-3 text-white mt-[200px]">
        <h2 className="font-ubuntu text-[36px] font-medium leading-[50px] mb-[24px]">
          Позвоните нам
        </h2>
        <span className="text-[40px] leading-[52px] mb-[16px]">
          +7 (921) 956-55-48
        </span>
        <p className="text-[22px] font-medium leading-[30px] text-[#d8d8d8] mb-[16px]">
          или напишите на почту
        </p>
        <div className="flex gap-2 items-center mb-[36px]">
          {" "}
          <Image alt="" src="/Mail.png" width={48} height={48} />
          <span className="text-[26px] leading-[33.8px]">Info@airmail.ru</span>
        </div>
        <p className="text-[26px] leading-[36.4px] font-medium text-[#d8d8d8] w-[600px]">
          Обсудим цену, сроки, состав инструментария и конкретный способ решения
          ВАШИХ задач
        </p>
      </div>
    </div>
  );
};

export default Seo_infor;
