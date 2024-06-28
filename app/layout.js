import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {getData} from "@/lib/api";
import {dataDecript} from "@/lib/decryptService";
export const dynamic = 'force-dynamic'
export const revalidate = 500


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // const data = await getData()
  //
  // const jsonData = dataDecript(data)

  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
      <Navbar/>
      {children}

      </body>
    </html>
  );
}
