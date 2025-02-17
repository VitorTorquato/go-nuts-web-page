import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";


export const metadata: Metadata = {
  title: "Go Nuts BR | Personalized Butter Cakes in Malta",
  description: "Delicious handcrafted personalized butter cakes in Malta. Custom-made for birthdays, weddings, and all special occasions. Order your unique cake today!",
  keywords: ["personalized cakes Malta", "custom cakes Malta", "butter cakes Malta", "birthday cakes Malta", "wedding cakes Malta", "Go Nuts BR cakes"],
  openGraph: {
    title: "Go Nuts BR | Custom Butter Cakes in Malta",
    description: "At Go Nuts BR, we create personalized butter cakes made with love and premium ingredients. Perfect for birthdays, weddings, and all celebrations in Malta!",
    // url: "https://go-nuts-web-page.vercel.app/", 
    type: "website",
  },
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
