import Image from "next/image";
import Link from "next/link";

const Seo_infor = () => {
  return (
    <div
      id="contact"
      className=" lg:bg-gradient-to-br lg:hover:bg-gradient-to-r lg:from-[#0019FF] lg:to-[#7481f8] lg:mt-[100px] lg:h-[775px] rounded-[32px] grid lg:grid-cols-5 gap-[24px] z-10 relative"
    >
      <div className="lg:col-span-2 lg:mt-[56px] lg:ml-[55px] relative lg:text-white ">
        <h2 className="font-ubuntu text-2xl lg:text-[40px] leading-[56px] mb-[16px] lg:mb-[32px]">
          Свяжитесь с нами любым удобным способом
        </h2>
        <p className="lg:hidden mb-[20px] text-lg lg:text-[26px] leading-[36.4px] font-medium text-[#707070] lg:text-[#d8d8d8]">
          Обсудим цену, сроки, состав инструментария и конкретный способ решения
          ВАШИХ задач
        </p>
        <div className="lg:hidden grid grid-cols-2 place-items-center">
          <div className="col-span-1">
            <Image alt="" src="/ER_Photo.png" width={167} height={167} />
          </div>
          <div className="col-span-1 ">
            <span className=" bg-accent py-3 px-2 rounded-[50px] text-2xl font-ubuntu leading-[56px] text-white">
              Евгений Румянцев{" "}
            </span>
            <span className=" bg-accent py-3 px-10 rounded-[50px] text-2xl font-ubuntu leading-[50px] italic sepia-[0.2] text-white">
              CEO{" "}
            </span>
          </div>
        </div>
        <div className="lg:hidden grid gap-3 justify-items-center mt-[16px]">
          <div className="flex gap-3">
            <span>+7 (999) 999-99-99</span>
            <span>Info@airmail.ru</span>
          </div>
          <div className="flex gap-5">
            <Link href="/">
              <Image alt="" src="/tGC.png" width={40} height={40} />
            </Link>
            <Link href="/">
              <Image alt="" src="/WSC.png" width={40} height={40} />
            </Link>
            <Link href="/">
              {" "}
              <Image alt="" src="/MailColor.png" width={40} height={40} />
            </Link>
          </div>
        </div>
        <Image
          alt=""
          src="/ER_Photo.png"
          className="hidden lg:block"
          width={519}
          height={519}
        />
        <span className="hidden lg:block  absolute bottom-32 bg-accent py-1 px-8 rounded-[50px] text-[40px] font-ubuntu leading-[56px] text-white">
          Евгений Румянцев{" "}
        </span>
        <span className="hidden lg:block absolute bottom-20 bg-accent px-20 rounded-[50px] text-[38px] font-ubuntu leading-[50px] italic sepia-[0.2] text-white">
          CEO{" "}
        </span>
      </div>
      <div className="lg:col-span-3 hidden lg:block text-white mt-[200px]">
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
        <p className=" text-[26px] leading-[36.4px] font-medium text-[#d8d8d8] w-[600px]">
          Обсудим цену, сроки, состав инструментария и конкретный способ решения
          ВАШИХ задач
        </p>
      </div>
    </div>
  );
};

export default Seo_infor;
