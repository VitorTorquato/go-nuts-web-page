import Image from "next/image";
import Link from "next/link";

import heroImg from '../../../../public/rainbow-cake-hero-1.jpg'

export function Hero(){
    return(
                <section className="w-full h-dvh relative bg-black">
                   
                    <div className="container h-full flex items-center absolute p-3 z-20 2xl:left-48">
                      <div className="max-w-lg 2xl:ml-28 flex flex-col items-center mx-auto md:mx-0 gap-6">
                          <div className="text-5xl md:text-7xl text-center flex flex-col gap-2  font-bold text-slate-200">
                          <span >Because taste matters a lot!</span>
                          <span>Go nuts about it</span>
                          </div>
                          <Link
                          className="font-medium text-2xl md:text-3xl border-2 border-slate-200 rounded-md w-11/12 py-2 px-2 flex items-center justify-center text-slate-200 hover:text-slate-950 bg-transparent hover:bg-slate-200 transition-all duration-300"
                          href='/order'>Order now</Link>
                      </div>
                    </div>

                    <Image
                    src={heroImg}
                    alt="A rainbow cake image"
                    priority={true}
                    quality={100}
                    fill={true}
                    sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                    className="object-cover object-center opacity-45"
                    />
                </section>
    )
}