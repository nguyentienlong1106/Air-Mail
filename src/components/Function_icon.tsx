"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const Function_icon = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="lg:mt-[100px] mt-[60px]">
      <h2 className="font-ubuntu font-bold text-3xl lg:text-[40px] leading-[56px]">
        Если вы хотите
      </h2>
      <p className="text-xl lg:text-[32px] leading-[44.8px] lg:w-[995px] mt-[16px]">
        Повысить эффективность e-mail маркетинга и перестать терять деньги, а
        также:
      </p>
      <div className="flex items-center gap-[35px] mt-[48px]">
        {theme === "dark" ? (
          <Image src="/evenlope_d.png" alt="" width={284} height={284} />
        ) : (
          <Image src="/evenlope.png" alt="" width={284} height={284} />
        )}

        <div className="lg:w-[737px]">
          <h3 className="font-medium text-2xl lg:text-[32px] leading-[44.8px]">
            Добиться доставляемости писем до 99.9%
          </h3>
          <p className="text-lg lg:text-[24px] leading-[33.6px] text-description_dark mt-[16px] text-justify">
            Чтобы все сообщения, которые вы отправляете доходили до клиентов,
            открывались на всех устройствах и работали все внутренние ссылки
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[35px] mt-[36px]">
        {theme === "dark" ? (
          <Image src="/like_d.png" alt="" width={284} height={284} />
        ) : (
          <Image src="/like.png" alt="" width={284} height={284} />
        )}

        <div className="w-[737px]">
          <h3 className="font-medium text-2xl lg:text-[32px] leading-[44.8px]">
            Повысить эффективность рекламы и выжимать из клиентской базы больше
            денег
          </h3>
          <p className="text-lg lg:text-[24px] leading-[33.6px] text-description_dark mt-[16px] text-justify">
            Если вы тратите деньги на рекламу, но после совершения целевого
            действия клиент не получает обратной связи, вы просто выливаете
            деньги в трубу
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[35px] mt-[36px]">
        {theme === "dark" ? (
          <Image src="/form_d.png" alt="" width={284} height={284} />
        ) : (
          <Image src="/form.png" alt="" width={284} height={284} />
        )}

        <div className="w-[737px]">
          <h3 className="font-medium text-2xl lg:text-[32px] leading-[44.8px]">
            Актуализировать базу адресов, в которой будут только целевые адреса
          </h3>
          <p className="text-lg lg:text-[24px] leading-[33.6px] text-description_dark mt-[16px] text-justify">
            Когда дело касается рекламы, иметь актуализированную базу адресов с
            целевой аудиторией - это ключ к успеху. Иначе все ваши деньги,
            вложенные в рекламу, пропадают впустую.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Function_icon;
