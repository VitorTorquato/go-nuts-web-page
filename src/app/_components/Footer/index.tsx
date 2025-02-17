import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/images/logo-removebg-preview.png'; 

export function Footer(){

  const date = new Date().getFullYear();

  return(
        <section className="w-full bg-[#f9509973] pt-2  mt-9">
      
        <div className="container mx-auto">

           <div className="w-full mx-auto flex flex-col md:flex-row justify-between">

            
              <div className="flex flex-col items-center ">
                <Image
                  className="w-36 "
                  src={logo}
                  alt="Logo go nuts"
                  width={100}
                  height={100}
                  priority
                  quality={100}
                  />
                  <span className="font-bold text-2xl">Because taste matters a lot!</span>
              </div>

             <div className="flex flex-col gap-3 items-center mt-3 mb-8">
               <h1 className="font-bold">Contact</h1>
                 <div className="flex flex-col items-center gap-2">
                   <span className="flex items-center gap-1">
                     <MdLocationPin size={16} color="#000"/>
                     VFXP+V99, Triq Il-Punent, L-Imsida
                   </span>
                   <span className="flex items-center gap-1">
                     <MdEmail size={16} color="#000"/>
                   gonuts@gmail.com
                   </span>
                   <span className="flex items-center gap-1">
                     <IoLogoWhatsapp size={16} color="#000"/>
                     +356 9999-0000
                   </span>
                 </div>

             </div>
             <div className="flex flex-col gap-2 items-center mt-3 mb-8">
                 <h2 className="font-bold">Quick Links</h2>
                            <Link
                             className="text-sm md:text-lg"
                             href='/'>Home</Link>
                             <Link
                             className="text-sm md:text-lg "
                             href='/aboutus'>About Us</Link>
                             <Link
                             className="textsm md:text-lgl "
                             href='/services'>Services</Link>
                             <Link
                             className="text-sm md:text-lg "
                             href='/order'>Order
                             </Link>
             </div>
             <div className="flex flex-col gap-2 items-center mt-3 mb-8">
             <h2 className="font-bold">Informations</h2>
                           
                             <Link
                             className="text-sm md:text-lg "
                             href='/aboutus'>Privacy Policy</Link>
                             <Link
                             className="text-sm md:text-lg "
                             href='/services'>Terms & Conditions
                             </Link>
             </div>
           </div>
        </div>

        <footer className="w-full">
        <div className="container mx-auto border-t-2 border-slate-600 mb-7 flex items-center justify-between py-2 px-2">
              <div className="flex items-center ">
              <span className="mt-1">&copy;</span>
                 {date} Go Nuts Br
              
              
              </div>

              <div className="flex gap-2 items-center">
                   <BsInstagram size={24} color="#000"/>
                   <BsFacebook size={24} color="#000"/>
               </div>
        </div>
      </footer>
      </section>

      
    )
}