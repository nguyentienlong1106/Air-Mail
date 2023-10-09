import Image from "next/image";

const Infor1 = () => {
  return (
    <div className="grid lg:grid-cols-5 bg-gradient-to-br hover:bg-gradient-to-r from-[#0019FF] to-[#7481f8] lg:bg-accent mt-[56px] lg:mt-[100px] mx-[-16px] lg:mx-[-80px] rounded-lg z-10 relative">
      <div className="lg:col-span-2 mx-[80px] text-white mt-[30px] ml-[20px] lg:mt-[56px] lg:ml-[78px]">
        <h2
          className="font-ubuntu font-medium text-lg lg:text-[40px] lg:leading-[56px]
         lg:w-[433px]"
        >
          Мы работаем,
        </h2>
        <h2
          className="font-ubuntu font-medium text-lg lg:text-[40px] lg:leading-[56px]
         lg:w-[433px]"
        >
          чтобы ваш бизнес развивался быстрее
        </h2>
        <p className="mt-[40px] text-sm lg:text-[24px] font-medium lg:leading-[33.6px] text-[#d8d8d8] lg:w-[519px]">
          Мы помогаем клиентам сделать общение с клиентами простым, управляемым
          и безопасным для вашего бизнеса.
        </p>
        <p className="mt-[20px] text-sm lg:text-[24px] font-medium lg:leading-[33.6px] text-[#d8d8d8]">
          Поэтому ставим в основе работы надежность и скорость работы
        </p>
      </div>
      <div className="lg:col-span-3 mx-10 lg:mx-[80px] py-10 lg:py-[56px]">
        <Image
          src="/infor1.png"
          alt=""
          className="rounded-[30px]"
          width={739}
          height={493}
        />
      </div>
    </div>
  );
};

export default Infor1;
