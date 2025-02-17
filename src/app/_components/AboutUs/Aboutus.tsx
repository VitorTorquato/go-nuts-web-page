import Image from "next/image";
import rafaelImg from '../../../../public/images/rafael.webp';

export function AboutUs(){
    return(
        <section id="aboutus" className="container mx-auto px-3">
                    <h1 className="text-center text-6xl mt-16 text-slate-800">About us</h1>
              
                        <section className="max-w-6xl mx-auto mt-9 flex flex-col justify-between gap-9 md:flex-row">
                           
                             <div className="w-full flex flex-col justify-between items-center md:flex-row mt-9">
              
                            <div className="w-full max-w-lg h-96">
                              <Image
                              src={rafaelImg}
                              alt="Photo of Rafael baking"
                              width={100}
                              height={100}
                              priority={true}
                              quality={100}
                              sizes='100vw'
                              className="w-full h-full object-cover"
                              />
                          </div>
                            <p className="max-w-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis consectetur soluta molestias beatae? Eius, et ipsum molestias, saepe odit exercitationem, temporibus possimus unde dolore rerum velit magni. Nihil, dignissimos doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nisi velit ipsum reiciendis magnam maxime reprehenderit nam quo ullam corrupti a voluptatum, ab earum! Repellat, rem. Consequatur exercitationem et eos?</p>
                        </div>
                     
                    </section>
                </section>
    )
}