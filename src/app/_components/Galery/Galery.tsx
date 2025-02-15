import Image from "next/image";
import Link from "next/link";
import cake from '../../../../public/images/cakeHome1.jpg'

export function Galery(){
    return(
        <section className="container mx-auto">
        <h1 className="text-center text-6xl mt-9 mb-11 text-slate-800">Gallery</h1>
        
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-9 md:gap-8 mb-11">

            <section className="drop-shadow-md w-full h-fit ">
              <div className="w-full  overflow-hidden">
              <Image
                className="object-cover w-full opacity-50 hover:scale-105 hover:opacity-100 transition-all duration-300 "
                src={'/cakeHome1.JPG'}
                alt="Personalized cake"
                width={100}
                height={100}
                quality={100}
                sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                />
              </div>

            </section>

            <section className="drop-shadow-md w-full h-fit">
              <div className="w-full  overflow-hidden">
              <Image
                className="object-cover w-full opacity-50 hover:scale-105 hover:opacity-100 transition-all duration-300 "
                src={cake}
                alt="Personalized cake"
                width={100}
                height={100}
                quality={100}
                sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                />
              </div>

            </section>

            <section className="drop-shadow-md w-full h-fit">
              <div className="w-full  overflow-hidden">
              <Image
                className="object-cover w-full opacity-50 hover:scale-105 hover:opacity-100 transition-all duration-300 "
                src={cake}
                alt="Personalized cake"
                width={100}
                height={100}
                quality={100}
                sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                />
              </div>

            </section>
            <section className="drop-shadow-md w-full h-fit">
              <div className="w-full  overflow-hidden">
              <Image
                className="object-cover w-full opacity-50 hover:scale-105 hover:opacity-100 transition-all duration-300 "
                src={cake}
                alt="Personalized cake"
                width={100}
                height={100}
                quality={100}
                sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                />
              </div>

            </section>
          

          
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