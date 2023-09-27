import Image from "next/image";

const Function = () => {
  return (
    <div className="bg-[#E8F1FF] dark:bg-[#C6DDFF] h-[614px] mt-[140px] rounded-[30px] text-black z-10 relative">
      <div className="py-[56px] px-[77px] grid justify-items-center">
        <h2 className="font-ubuntu font-bold text-[40px] leading-[56px] text-accent ">
          Для чего нужны рассылки?
        </h2>
        <div className="flex items-center gap-[35px] mt-[27px]">
          <Image src="/mouse.png" alt="" width={52} height={52} />
          <p className="text-[24px] leading-[33.6px] text-justify">
            Услуга настройки ESP (Email Service Provider) предоставляет клиентам
            возможность оптимизировать работу с почтовым сервисом, используемым
            для отправки электронных рассылок.
          </p>
        </div>
        <div className="flex items-center gap-[35px] mt-[36px]">
          <Image src="/mouse.png" alt="" width={52} height={52} />
          <p className="text-[24px] leading-[33.6px] text-justify">
            Специалисты помогут настроить ESP в соответствии с потребностями
            клиента, установить необходимые настройки безопасности, настроить
            автоматические ответы и уведомления, а также настроить отчетность и
            аналитику. Услуга может включать в себя миграцию данных из старого
            ESP в новый, настройку интеграции с CRM-системами и другими
            инструментами.
          </p>
        </div>
        <div className="flex items-center gap-[35px] mt-[36px]">
          <Image src="/mouse.png" alt="" width={52} height={52} />
          <p className="text-[24px] leading-[33.6px] text-justify">
            В результате, вы получите оптимизированный и надежный инструмент для
            отправки электронных рассылок, который позволит вам достигать лучших
            результатов в маркетинговых кампаниях.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Function;
