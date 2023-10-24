import {
  Banner,
  Function_icon,
  Step,
  Function,
  Result,
  Question,
  Guide,
  Slide,
  Form,
  Seo_infor,
} from "@/components";

export const metadata = {
  title: "Настройка сервисов почтовых рассылок",
  description: "...",
};

const page = () => {
  return (
    <div>
      <Banner />
      <Function />
      <Function_icon />
      <Step />
      <Result />
      <Guide />
      <Slide title="Другие услуги" styleText="" />
      <Form />
      <Seo_infor />
      <Question />
    </div>
  );
};

export default page;
