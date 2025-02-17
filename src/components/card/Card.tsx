"use client"

import cake1 from '../../../public/images/cakes/cake1.jpeg'
import cake2 from '../../../public/images/cakes/cake2.jpeg'
import cake3 from '../../../public/images/cakes/cake3.jpeg'
import cake4 from '../../../public/images/cakes/cake4.jpeg'
import cake5 from '../../../public/images/cakes/cake5.jpeg'
import cake6 from '../../../public/images/cakes/cake6.jpeg'

const cakesImg = [
  {cakeImg: cake1},
  {cakeImg: cake2},
  {cakeImg: cake3},
  {cakeImg: cake4},
  {cakeImg: cake5},
  {cakeImg: cake6},
]


import useEmblaCarousel from 'embla-carousel-react';

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

export function Card(){
  const [emblaRef] = useEmblaCarousel({ 
    loop: true ,
  
  }, 
    [Autoplay({delay:2000,jump:true,stopOnInteraction:false})])
    
  
    return(
        <section className="py-16">

                <div className="w-full max-w-[400px] max-h-[400px] mx-auto px-2">
                       
                
                    <div>

                            <div className='overflow-hidden' ref={emblaRef}>
                                <div className='flex'>
                                    {cakesImg.map((item,index) => (
                                        <div
                                        className='flex-[0_0_100%] min-w-0  px-3'
                                        key={index}>
                                            <article className='h-full flex'>
                                            <Image
                                            src={item.cakeImg}
                                            alt="butter cake image"
                                            width={100}
                                            height={100}
                                            quality={100}
                                            sizes="100vw"
                                            className='obeject-cover w-full h-full'
                                              />
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div>

                      
                    </div>


                </div>
        </section>
    )
}