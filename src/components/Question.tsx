"use client";
import { Disclosure } from "@headlessui/react";
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
    <div className="grid justify-items-center mb-[149px] mt-[100px] ">
      <h1 className="text-[52px] leading-[72.8px] font-ubuntu mb-[48px]">
        Ответили на популярные вопросы
      </h1>
      {Data.map((e, i) => (
        <div key={i} className="border-b-[1px] border-solid border-[#C9C9C9]">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-[1280px] h-[140px]">
                  <span className="text-[32px] leading-[44.8px] ">
                    {e.question}
                  </span>
                  <SlArrowDown
                    className={`w-[40px] h-[40px] ${open ? "rotate-90" : ""}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-[24px] leading-[33.6px] w-[1034px] max-w-full mb-[36px] ml-[24px] border-l-[1px] pl-[20px]  border-solid border-[#C9C9C9]">
                  {e.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default Question;
