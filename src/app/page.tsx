import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full">
      
      <div className="w-full h-dvh relative">
          <div className="w-full max-w-screen-xl h-full flex items-center absolute p-3 z-20 2xl:left-48">
            <div className="max-w-md 2xl:ml-28 flex flex-col items-center mx-auto md:mx-0 gap-6">
                <p className="text-5xl md:text-7xl  text-center font-bold text-slate-900">Go nuts with our cakes</p>
                <Link
                className="font-medium text-2xl md:text-3xl border-2 border-slate-900 rounded-md p-2 text-black bg-transparent hover:bg-slate-200 transition-all duration-300"
                href='/order'>Order now</Link>
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

      <div className="w-full relative">

     
          <Image
          className="object-cover opacity-5 -z-10"
          src={'/background.jpg'}
          alt="background illustration"
          fill={true}
          quality={100}
          priority={true}
          />

      <Container>
                <h1 className="text-center text-6xl mt-9 mb-11 text-slate-800">Services</h1>

              <section className="w-full">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti voluptatum iure tenetur optio a dolore modi praesentium? Ea necessitatibus architecto dignissimos reiciendis facilis laboriosam dolorum. Maxime accusantium animi laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero minus ut saepe suscipit nam maiores deleniti voluptatem numquam aspernatur delectus nesciunt labore modi esse nostrum, officiis odio quaerat cumque atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti autem vero illo dolorem blanditiis ex inventore molestias asperiores, aliquid consectetur fugiat dolore modi facere, magni optio voluptatem. Unde, reiciendis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti voluptatum iure tenetur optio a dolore modi praesentium? Ea necessitatibus architecto dignissimos reiciendis facilis laboriosam dolorum. Maxime accusantium animi laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero minus ut saepe suscipit nam maiores deleniti voluptatem numquam aspernatur delectus nesciunt labore modi esse nostrum, officiis odio quaerat cumque atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti autem vero illo dolorem blanditiis ex inventore molestias asperiores, aliquid consectetur fugiat dolore modi facere, magni optio voluptatem. Unde, reiciendis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti voluptatum iure tenetur optio a dolore modi praesentium? Ea necessitatibus architecto dignissimos reiciendis facilis laboriosam dolorum. Maxime accusantium animi laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero minus ut saepe suscipit nam maiores deleniti voluptatem numquam aspernatur delectus nesciunt labore modi esse nostrum, officiis odio quaerat cumque atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti autem vero illo dolorem blanditiis ex inventore molestias asperiores, aliquid consectetur fugiat dolore modi facere, magni optio voluptatem. Unde, reiciendis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti voluptatum iure tenetur optio a dolore modi praesentium? Ea necessitatibus architecto dignissimos reiciendis facilis laboriosam dolorum. Maxime accusantium animi laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero minus ut saepe suscipit nam maiores deleniti voluptatem numquam aspernatur delectus nesciunt labore modi esse nostrum, officiis odio quaerat cumque atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti autem vero illo dolorem blanditiis ex inventore molestias asperiores, aliquid consectetur fugiat dolore modi facere, magni optio voluptatem. Unde, reiciendis.</p>
               
              </section>
          </Container>
      </div>

      <Container>
          <h1 className="text-center text-6xl mt-9 mb-11 text-slate-800">Contact us</h1>

          <section>

          </section>
      </Container>
    </main>  
  );
}
