import Image from "next/image";

const Infor1 = () => {
  return (
    <div className="grid grid-cols-5 bg-accent mt-[100px] lg:mx-[-80px] rounded-lg z-10 relative">
      <div className="col-span-2 mx-[80px] text-white mt-[56px] ml-[78px]">
        <h2
          className="font-ubuntu font-medium text-[40px] leading-[56px]
         w-[433px]"
        >
          Мы работаем,
        </h2>
        <h2
          className="font-ubuntu font-medium text-[40px] leading-[56px]
         w-[433px]"
        >
          чтобы ваш бизнес развивался быстрее
        </h2>
        <p className="mt-[40px] text-[24px] font-medium leading-[33.6px] text-[#d8d8d8] w-[519px]">
          Мы помогаем клиентам сделать общение с клиентами простым, управляемым
          и безопасным для вашего бизнеса.
        </p>
        <p className="mt-[20px] text-[24px] font-medium leading-[33.6px] text-[#d8d8d8]">
          Поэтому ставим в основе работы надежность и скорость работы
        </p>
      </div>
      <div className="col-span-3 mx-[80px] py-[56px]">
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
