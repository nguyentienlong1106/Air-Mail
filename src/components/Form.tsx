"use client";

import { FormApiPost } from "@/apis/form/form.api";
import { FormInputPost } from "@/types/form/form.type";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState } = useForm<FormInputPost>();
  const [successMessage, setSuccessMessage] = useState(false);
  const sendFormMutation = useMutation({ mutationFn: FormApiPost.postData });
  const onSubmit = (data: any) => {
    sendFormMutation.mutate(data, {
      onSuccess(data, variables, context) {
        setSuccessMessage(true);
      },
    });
  };
  const { errors } = formState;
  const handleClick = () => {
    setSuccessMessage(false);
  };

  return (
    <div id="contact" className="grid lg:grid-cols-5 mt-[40px] lg:mt-[100px]">
      <div className="lg:col-span-3 lg:w-[738px]">
        <h2 className="font-ubuntu text-xl lg:text-[40px] lg:leading-[56px] text-center lg:text-left">
          Получите бесплатный аудит ваших рассылок и репутации домена,
        </h2>
        <h2 className="font-ubuntu text-xl lg:text-[40px] lg:leading-[56px] text-center lg:text-left">
          а также рекомендации по улучшению
        </h2>
        <p className="mt-[16px] lg:mt-[40px] text-sm lg:text-[24px] text-center lg:text-left lg:lg:leading-[33.6px] text-description_dark lg:w-[522px]">
          Оставьте заявку и узнайте, где вы теряете деньги и сколько стоит
          полностью устранить проблемные места
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:col-span-2 lg:border-accent lg:border-solid lg:border-[3px] rounded-[20px]"
      >
        {!successMessage && (
          <>
            <input
              type="number"
              {...register("phone", {
                required: {
                  value: true,
                  message: "*неккоректно введен номер",
                },
                pattern: {
                  value:
                    /^\+?(\d{1,4})?[-. ]?(\d{1,4})[-. ]?(\d{1,4})[-. ]?(\d{1,10})$/,
                  message: "*неккоректно введен номе",
                },
              })}
              placeholder="Ваш номер телефона*"
              className={`lg:w-[85%] w-full focus:outline-none mt-[32px] lg:ml-[36px] pl-[32px] text-sm lg:text-[20px] lg:leading-[28px] h-[76px] rounded-[20px] border-[1px] border-solid  ${
                errors.phone?.message ? "border-rose-600" : "border-gray-400"
              }`}
            />

            <input
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "*неккоректно введена почта",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "*неккоректно введена почта",
                },
              })}
              placeholder="Ваша почта*"
              className={`lg:w-[85%] w-full focus:outline-none lg:ml-[36px] pl-[32px] text-sm lg:text-[20px] lg:leading-[28px] h-[76px] rounded-[20px] mt-[24px] border-[1px] border-solid ${
                errors.email?.message ? "border-rose-600" : "border-gray-400"
              }`}
            />

            <input
              type="text"
              {...register("domen")}
              placeholder="Корпоративный домен"
              className="lg:w-[85%] w-full focus:outline-none lg:ml-[36px] pl-[32px] text-sm lg:text-[20px] lg:leading-[28px] h-[76px] rounded-[20px] mt-[24px] border-[1px] border-solid border-gray-400 mb-[16px]"
            />
            {errors.phone?.message && errors.email?.message && (
              <span className="lg:ml-[36px] text-rose-600">
                *неккоректно введены номер и почта
              </span>
            )}
            {!errors.phone?.message && errors.email?.message && (
              <span className="lg:ml-[36px] text-rose-600">
                {errors.email?.message}
              </span>
            )}
            {errors.phone?.message && !errors.email?.message && (
              <span className="lg:ml-[36px] text-rose-600">
                {errors.phone?.message}
              </span>
            )}

            <button
              type="submit"
              className=" bg-accent py-3 lg:py-[22px] rounded-[900px] text-sm lg:text-[24px] text-white leading-[31.2px] lg:w-[85%] w-full mt-[32px] mb-[40px]  lg:ml-[36px]"
            >
              Получить аудит
            </button>
          </>
        )}

        {successMessage && (
          <div className="grid lg:block justify-center lg:border-0 border-[1px] border-solid border-gray-400 mb-[16px] mt-[32px] lg:pt-0 pt-[32px]">
            <h2 className="font-inter font-medium lg:text-[32px] text-lg lg:leading-[44.8px] w-full lg:w-[268px] lg:m-[32px] lg:text-left text-center">
              Форма успешно отправлена!
            </h2>
            <p className="font-inter lg:text-[24px] text-sm lg:leading-[33.6px] text-description_dark lg:w-[315px] lg:mx-[32px] mt-[16px] text-center lg:text-left">
              Скоро с вами свяжутся по указанной почте Info@airmail.ru
            </p>
            <button
              onClick={handleClick}
              className="border-accent border-solid border-2 py-2 lg:py-[20px] rounded-[900px] text-sm lg:text-[24px] leading-[31px] w-[300px] lg:w-[439px] duration-100 px-1 lg:mt-[140px] mb-[36px] m-[30px] justify-self-center"
            >
              Переотправить форму
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
