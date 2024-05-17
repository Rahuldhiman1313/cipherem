import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cipherem",
  description: "Accessible & Secure Blockchain with Cipherem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
