import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";




export default function Home() {
  return (
    <>
      <main className="w-full">
      
        <div className="w-full h-dvh relative bg-slate-950">
            <div className="w-full max-w-screen-xl h-full flex items-center absolute p-3 z-20 2xl:left-48">
              <div className="max-w-lg 2xl:ml-28 flex flex-col items-center mx-auto md:mx-0 gap-6">
                  <div className="text-5xl md:text-7xl text-center flex flex-col gap-2  font-bold text-slate-200">
                  <span >Because taste matters a lot!</span>
                  <span>Go nuts about it</span>
                  </div>
                  <Link
                  className="font-medium text-2xl md:text-3xl border-2 border-slate-200 rounded-md w-11/12 py-2 px-2 flex items-center justify-center text-slate-200 hover:text-slate-950 bg-transparent hover:bg-slate-200 transition-all duration-300"
                  href='/order/personalized'>Order now</Link>
              </div>
            </div>
            <Image
            src={"https://www.bettycrocker.co.uk/wp-content/uploads/2023/07/rainbow-cake-hero-1.jpg"}
            alt="Hero with a cake image"
            priority={true}
            quality={100}
            fill={true}
              sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
            className="object-cover object-center opacity-50"
            />
        </div>
        <Container>
                <h1 className="text-center text-6xl mt-9 text-slate-800">About us</h1>
      
                   <section className="w-full mt-9 mb-11 flex flex-col justify-between md:flex-row">
                     <div  className="w-full flex flex-col justify-between items-center md:flex-row gap-16">
                    <p className="w-full text-center max-w-4xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis consectetur soluta molestias beatae? Eius, et ipsum molestias, saepe odit exercitationem, temporibus possimus unde dolore rerum velit magni. Nihil, dignissimos doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nisi velit ipsum reiciendis magnam maxime reprehenderit nam quo ullam corrupti a voluptatum, ab earum! Repellat, rem. Consequatur exercitationem et eos?</p>
      
                    <div className="w-full max-w-lg h-96">
                      <Image
                      src={"/rafael.webp"}
                      alt="Photo of Rafael baking"
                      width={100}
                      height={100}
                      priority={true}
                      quality={100}
                      className="w-full h-full object-cover"
                      />
                  </div>
                </div>
                <div></div>
            </section>
        </Container>
        
      
          
                <Container>
        <h1 className="text-center text-6xl mt-9 mb-11 text-slate-800">Products</h1>
        
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-9 md:gap-8 mb-11">

            <section className="drop-shadow-md w-full h-fit hover:scale-105 transition-all duration-300 ">
              <div className="w-full  overflow-hidden">
              <Image
                className="object-cover w-full"
                src={'/cakeHome1.JPG'}
                alt="Personalized cake"
                width={100}
                height={100}
                quality={100}
                sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                />
              </div>

              <div className="w-full bg-slate-200 text-black flex flex-col gap-2  items-center justify-center py-3">
                <h1 className="text-3xl">Personalized Cakes</h1>
                <Link 
                className="font-medium text-md  border-2 border-slate-900 rounded-md py-1 px-5 text-black bg-transparent"
                href={'/order'}>
                  Quote now
                </Link>
              </div>
            </section>

            <section className="drop-shadow-md w-full h-fit hover:scale-105 transition-all duration-300 ">
              <div className="w-full  overflow-hidden">
              <Image
                className="object-cover w-full"
                src={'/cakeHome1.JPG'}
                alt="Personalized cake"
                width={100}
                height={100}
                quality={100}
                sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                />
              </div>

              <div className="w-full bg-slate-200 text-black flex flex-col gap-2  items-center justify-center py-3">
                <h1 className="text-3xl">Personalized Cakes</h1>
                <Link 
                className="font-medium text-md  border-2 border-slate-900 rounded-md py-1 px-5 text-black bg-transparent"
                href={'/order'}>
                  Quote now
                </Link>
              </div>
            </section>

            <section className="drop-shadow-md w-full h-fit hover:scale-105 transition-all duration-300 ">
              <div className="w-full  overflow-hidden">
              <Image
                className="object-cover w-full"
                src={'/cakeHome1.JPG'}
                alt="Personalized cake"
                width={100}
                height={100}
                quality={100}
                sizes="(max-width:768px) 100vw , (max-width: 1200px) 44vw"
                />
              </div>

              <div className="w-full bg-slate-200 text-black flex flex-col gap-2  items-center justify-center py-3">
                <h1 className="text-3xl">Personalized Cakes</h1>
                <Link 
                className="font-medium text-md  border-2 border-slate-900 rounded-md py-1 px-5 text-black bg-transparent"
                href={'/order'}>
                  Quote now
                </Link>
              </div>
            </section>
          
          
          </div>
        </Container>

        <Container>
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
                src={'/cakeHome1.JPG'}
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
        </Container>

           
      </main>
      <Footer/>

   
    </>
  );
}


