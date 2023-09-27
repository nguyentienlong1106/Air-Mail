import { Inter } from "next/font/google";
import Provider from "./Provider";
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
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Design />
        <Provider>
          <div className="container mx-auto">
            <Header />
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
