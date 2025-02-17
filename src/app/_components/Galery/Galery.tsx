import Image from "next/image";
import Link from "next/link";

import cake1 from '../../../../public/images/cakes/cake1.jpeg'
import cake2 from '../../../../public/images/cakes/cake2.jpeg'
import cake3 from '../../../../public/images/cakes/cake3.jpeg'
import cake4 from '../../../../public/images/cakes/cake4.jpeg'

const cakes = [
  { cakeImg: cake1 },
  { cakeImg: cake2 },
  { cakeImg: cake3 },
  { cakeImg: cake4 },

]

export function Galery() {
  return (
    <section className="container mx-auto px-3">
      <h1 className="text-center text-6xl mt-9 mb-11 text-slate-800">Gallery</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 md:gap-8 mb-11">
        {
          cakes.map((item, index) => (
            <section key={index} className="drop-shadow-md w-full  overflow-hidden flex items-center justify-center">
              <div className="w-full overflow-hidden max-w-[300px] max-h-[300px]">
                <Image
                  className="object-cover w-[300px] h-[300px] opacity-50 hover:scale-105 hover:opacity-100 transition-all duration-300 "
                  src={item.cakeImg}
                  alt="Personalized cake"
                  width={100}
                  height={100}
                  quality={100}
                  sizes="100vw"
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