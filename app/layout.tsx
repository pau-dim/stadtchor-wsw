import Footer from "@/components/navigation/footer";
import Navigation from "../components/navigation/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stadtchor Weißwasser",
  description: "Infos zum Stadtchor Weißwasser",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="md:w-[850px] md:mx-auto min-h-screen ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}