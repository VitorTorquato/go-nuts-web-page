import Image from "next/image";
import Link from "next/link";
import cakeImg from '../../../public/images/cakeHome1.jpg';

export function Card(){
    return(
        <section className="rounded-lg overflow-hidden drop-shadow-md w-full max-w-[300px] h-fit hover:scale-105 transition-all duration-300 ">
        <div className="w-full overflow-hidden">
        <Image
          className="object-cover w-full"
          src={cakeImg}
          alt="Personalized cake"
          width={100}
          height={100}
          quality={100}
          sizes='100vw'
          />
        </div>

        <div className="w-full bg-slate-200 text-black flex flex-col gap-2  items-center justify-center py-3">
          <h1 className="text-3xl">Personalized Cakes</h1>
          <Link 
          className="font-medium text-md border-2 border-slate-900 rounded-md py-1 px-5 text-black bg-transparent"
          href={'/order'}>
            Quote now
          </Link>
        </div>
      </section>
    )
}