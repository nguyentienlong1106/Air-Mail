const Form = () => {
  return (
    <div className="grid grid-cols-5 mt-[100px]">
      <div className="col-span-3 w-[738px]">
        <h2 className="font-ubuntu text-[40px] leading-[56px]">
          Получите бесплатный аудит ваших рассылок и репутации домена,
        </h2>
        <h2 className="font-ubuntu text-[40px] leading-[56px]">
          а также рекомендации по улучшению
        </h2>
        <p className="mt-[40px] text-[24px] leading-[33.6px] text-description_dark w-[522px]">
          Оставьте заявку и узнайте, где вы теряете деньги и сколько стоит
          полностью устранить проблемные места
        </p>
      </div>
      <div className="col-span-2 border-accent border-solid border-[3px] rounded-[20px]">
        <input
          type="number"
          placeholder="Ваш номер телефона*"
          className="w-[85%] focus:outline-none mt-[32px] ml-[36px] pl-[32px] text-[20px] leading-[28px] h-[76px] rounded-[16px] border-[1px] border-solid"
        />
        <input
          type="text"
          placeholder="Ваша почта*"
          className="w-[85%] focus:outline-none ml-[36px] pl-[32px] text-[20px] leading-[28px] h-[76px] rounded-[16px] mt-[24px] border-[1px] border-solid"
        />
        <input
          type="text"
          placeholder="Корпоративный домен"
          className="w-[85%] focus:outline-none ml-[36px] pl-[32px] text-[20px] leading-[28px] h-[76px] rounded-[16px] mt-[24px] border-[1px] border-solid"
        />
        <button className=" bg-accent py-[22px] rounded-[900px] text-[24px] text-white leading-[31.2px] w-[85%] mt-[32px] mb-[40px]  ml-[36px]">
          Получить аудит
        </button>
      </div>
    </div>
  );
};

export default Form;
