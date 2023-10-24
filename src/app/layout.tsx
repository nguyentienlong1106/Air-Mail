import { Inter } from "next/font/google";
import Provider from "./Provider";
import Providers from "./Providers";
import { Footer, Header } from "@/components/layout";
import "@/style/globals.scss";
import Design from "./Design";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Air Mail",
  description:
    "Мы помогаем клиентам сделать общение с клиентами простым, управляемым и безопасным для вашего бизнеса.",
  openGraph: {
    title: "Air Mail",
    description:
      "Мы помогаем клиентам сделать общение с клиентами простым, управляемым и безопасным для вашего бизнеса.",
    type: "website",
    emails: "Info@airmail.ru",
    phoneNumbers: "+7(921)956-55-48",
    images: [
      `https://github.com/nguyentienlong1106/Air-Mail/blob/main/public/Group1.png`,
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} container_zoom`}>
        <Providers>
          <Provider>
            <Design />
            <div className="container mx-auto px-4">
              <Header />
              {children}
            </div>
            <Footer />
          </Provider>
        </Providers>
      </body>
    </html>
  );
}
