"use client";
import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";

const Data = [
  {
    question: "Сколько стоит настройка и запуск welcome-цепочки?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Сколько стоит настройка и запуск welcome-цепочки?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Сколько стоит настройка и запуск welcome-цепочки?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    question: "Сколько стоит настройка и запуск welcome-цепочки?",
    answer:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

const Question = () => {
  return (
    <div className="grid justify-items-center mb-[50px] lg:mb-[149px] mt-[40px] lg:mt-[100px] ">
      <h1 className="text-2xl lg:text-[52px] leading-[72.8px] font-ubuntu lg:mb-[48px]">
        Ответили на популярные вопросы
      </h1>
      {Data.map((e, i) => (
        <div key={i} className="border-b-[1px] border-solid border-[#C9C9C9]">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex gap-10 justify-between items-center w-full sm:w-[640px] md:w-[786px] lg:w-[1024px] xl:w-[1280px] h-[80px] lg:h-[140px]">
                  <span className="text-sm lg:text-[32px] leading-[44.8px] text-left">
                    {e.question}
                  </span>
                  <SlArrowDown
                    className={`w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] ${
                      open ? "rotate-90" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-250 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-sm lg:text-[24px] leading-[33.6px] lg:w-[1034px] mb-[36px] ml-[24px] border-l-[1px] pl-[20px]  border-solid border-[#C9C9C9]">
                    {e.answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default Question;
