const Form = () => {
  return (
    <div id="contact" className="grid lg:grid-cols-5 mt-[40px] lg:mt-[100px]">
      <div className="lg:col-span-3 lg:w-[738px]">
        <h2 className="font-ubuntu text-2xl lg:text-[40px] lg:leading-[56px] text-center lg:text-left">
          Получите бесплатный аудит ваших рассылок и репутации домена,
        </h2>
        <h2 className="font-ubuntu text-2xl lg:text-[40px] lg:leading-[56px] text-center lg:text-left">
          а также рекомендации по улучшению
        </h2>
        <p className="mt-[16px] lg:mt-[40px] text-lg lg:text-[24px] text-center lg:text-left leading-[33.6px] text-description_dark lg:w-[522px]">
          Оставьте заявку и узнайте, где вы теряете деньги и сколько стоит
          полностью устранить проблемные места
        </p>
      </div>
      <div className="lg:col-span-2 lg:border-accent lg:border-solid lg:border-[3px] rounded-[20px]">
        <input
          type="number"
          placeholder="Ваш номер телефона*"
          className="lg:w-[85%] w-full focus:outline-none mt-[32px] lg:ml-[36px] pl-[32px] text-[20px] leading-[28px] h-[76px] rounded-[20px] border-[1px] border-solid border-gray-400"
        />
        <input
          type="text"
          placeholder="Ваша почта*"
          className="lg:w-[85%] w-full focus:outline-none lg:ml-[36px] pl-[32px] text-[20px] leading-[28px] h-[76px] rounded-[20px] mt-[24px] border-[1px] border-solid border-gray-400"
        />
        <input
          type="text"
          placeholder="Корпоративный домен"
          className="lg:w-[85%] w-full focus:outline-none lg:ml-[36px] pl-[32px] text-[20px] leading-[28px] h-[76px] rounded-[20px] mt-[24px] border-[1px] border-solid border-gray-400"
        />
        <button className=" bg-accent py-3 lg:py-[22px] rounded-[900px] text-lg lg:text-[24px] text-white leading-[31.2px] lg:w-[85%] w-full mt-[32px] mb-[40px]  lg:ml-[36px]">
          Получить аудит
        </button>
      </div>
    </div>
  );
};

export default Form;
