import Image from "next/image";
import Link from "next/link";
import cake from '../../../../public/images/cakeHome1.jpg'


const cakes = [
  {cakeImg: cake},
  {cakeImg: cake},
  {cakeImg: cake},
  {cakeImg: cake},
  {cakeImg: cake},
]

export function Galery(){
    return(
        <section className="container mx-auto px-2">
        <h1 className="text-center text-6xl mt-9 mb-11 text-slate-800">Gallery</h1>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center px-2 gap-9 md:gap-8 mb-11">
            {
              cakes.map((item, index) => (
                <section key={index} className="drop-shadow-md w-full max-w-[300px] h-fit ">
                <div className="w-full  overflow-hidden">
                <Image
                  className="object-cover w-full opacity-50 hover:scale-105 hover:opacity-100 transition-all duration-300 "
                  src={item.cakeImg}
                  alt="Personalized cake"
                  width={100}
                  height={100}
                  quality={100}
                  sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                  />
                </div>
  
              </section>
              ))
            }            
       
          </div>

          <div className="w-full text-center">
            <Link 
            className="ml-auto text-2xl"
            href={'/gallery'}>
              See All
            </Link>

          </div>
        </section>
    )
}