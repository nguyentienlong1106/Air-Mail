import Image from "next/image";
import "@/style/globals.scss";
import {
  Question,
  Guide,
  Poster,
  Slide,
  Infor1,
  Form,
  Seo_infor,
} from "@/components";

export default function Home() {
  return (
    <main className="lg:mx-[80px] lg:mt-[24px]">
      <Poster />
      <Slide title="Основные направления работы" />
      <Guide />
      <Infor1 />
      <Form />
      <Seo_infor />
      <Question />
    </main>
  );
}
