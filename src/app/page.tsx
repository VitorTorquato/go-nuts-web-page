import { Hero } from "./_components/Hero/Hero";
import { AboutUs } from "./_components/AboutUs/Aboutus";
import { Service } from "./_components/Service/Service";
import { Galery } from "./_components/Galery/Galery";
import { Testimonials } from "./_components/Testimonials/Testimonials";
import { Footer } from "@/app/_components/Footer";




export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero/>
        <AboutUs/>
        <Service/>
        <Galery/> 
        <Testimonials/>            
      </main>
      <Footer/>
    </>
  );
}


