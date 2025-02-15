import { Footer } from "@/app/_components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "./_components/Hero/Hero";
import { AboutUs } from "./_components/AboutUs/Aboutus";
import { Service } from "./_components/Service/Service";
import { Galery } from "./_components/Galery/Galery";




export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero/>
        <AboutUs/>
        <Service/>
        <Galery/>             
      </main>
      <Footer/>
    </>
  );
}


