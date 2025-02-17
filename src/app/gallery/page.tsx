import Image from "next/image";
import cakeImg1 from '../../../public/images/cakeHome1.jpg';
import { Footer } from "../_components/Footer";
import cake1 from '../../../public/images/cakes/cake1.jpeg'
import cake2 from '../../../public/images/cakes/cake2.jpeg'
import cake3 from '../../../public/images/cakes/cake3.jpeg'
import cake4 from '../../../public/images/cakes/cake4.jpeg'
import cake5 from '../../../public/images/cakes/cake5.jpeg'
import cake6 from '../../../public/images/cakes/cake6.jpeg'
import cake7 from '../../../public/images/cakes/cake7.jpeg'
import cake8 from '../../../public/images/cakes/cake8.jpeg'
import cake9 from '../../../public/images/cakes/cake9.jpeg'
import cake10 from '../../../public/images/cakes/cake10.jpeg'
import cake11 from '../../../public/images/cakes/cake11.jpeg'
import cake12 from '../../../public/images/cakes/cake12.jpeg'
import cake13 from '../../../public/images/cakes/cake13.jpeg'
import cake14 from '../../../public/images/cakes/cake14.jpeg'
import cake15 from '../../../public/images/cakes/cake15.jpeg'
import cake16 from '../../../public/images/cakes/cake16.jpeg'
import cake17 from '../../../public/images/cakes/cake17.jpeg'
import cake18 from '../../../public/images/cakes/cake18.jpeg'
import cake19 from '../../../public/images/cakes/cake19.jpeg'
import cake20 from '../../../public/images/cakes/cake20.jpeg'

const cakes = [
    { cakeImg: cake1 },
    { cakeImg: cake2 },
    { cakeImg: cake3 },
    { cakeImg: cake4 },
    { cakeImg: cake5 },
    { cakeImg: cake6 },
    { cakeImg: cake7 },
    { cakeImg: cake8 },
    { cakeImg: cake9 },
    { cakeImg: cake10 },
    { cakeImg: cake11 },
    { cakeImg: cake12 },
    { cakeImg: cake13 },
    { cakeImg: cake14 },
    { cakeImg: cake15 },
    { cakeImg: cake16 },
    { cakeImg: cake17 },
    { cakeImg: cake18 },
    { cakeImg: cake19 },
    { cakeImg: cake20 },
]

export default function Gallery() {
    return (
        <>
            <section className="container mx-auto px-2">
                <h1 className="text-center text-6xl mt-9 mb-11 text-slate-800">Gallery</h1>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 md:gap-8 mb-11">
                    {
                        cakes.map((item, index) => (
                            <section key={index} className="drop-shadow-md w-full  overflow-hidden flex items-center justify-center">
                                <div className="w-full overflow-hidden max-w-[300px] max-h-[300px]">
                                    <Image
                                        className="object-cover  w-[300px] h-[300px] opacity-50 hover:scale-105 hover:opacity-100 transition-all duration-300 "
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

            </section>
            <Footer />
        </>
    )
}