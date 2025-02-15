import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";

export function Footer(){

  const date = new Date().getFullYear();

  return(
        <section className="w-full bg-[#f95099a1] py-6 mt-9">
      
        <div className="container mx-auto">

           <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-4 w-ful items-center justify-between">


             <div className="flex flex-col gap-3  items-center justify-center mt-3 mb-8">
               <h1 className="text-5xl">GoNuts</h1>
                 <div className="flex flex-col gap-2">
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


               <div className="w-full  flex flex-col gap-2  justify-between items-center md:items-start">
                 <h2 className="font-medium text-3xl">Follow us:</h2>
                 <div className="flex gap-3">
                   <BsInstagram size={24} color="#000"/>
                   <BsFacebook size={24} color="#000"/>
                 </div>
               </div>
             </div>
             <div className="flex flex-col gap-2 items-center justify-center mt-3 mb-8">
                 <h2 className="font-medium text-3xl">Quick Links</h2>
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
             <div className="flex flex-col gap-2 items-center justify-center mt-3 mb-8">
             <h2 className="font-medium text-3xl">Informations</h2>
             <Link
                             className="text-sm md:text-lg"
                             href='/'>Faq's</Link>
                             <Link
                             className="text-sm md:text-lg "
                             href='/aboutus'>Privacy Policy</Link>
                             <Link
                             className="text-sm md:text-lg "
                             href='/services'>Terms & Conditions</Link>
             </div>
           </div>
        </div>

        <footer className="w-full py-4">
        <div className="container mx-auto">
          <div className="border border-slate-600 mb-7"></div>

              <div className="flex items-center ">
              <span className="mt-1">&copy;</span>
                 {date} Go Nuts Br
              </div>
     
        </div>
      </footer>
      </section>

      
    )
}