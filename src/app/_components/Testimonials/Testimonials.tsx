"use client"

import useEmblaCaroulse from 'embla-carousel-react';
import {ChevronLeft , ChevronRight } from 'lucide-react';


const testimonials = [
    {
      content:
        `"Absolutely the best cake I've ever had! Not only was it beautifully decorated, but the flavor was out of this world. Moist, rich, and perfectly sweet—everyone at the party was asking where I got it from! I'll definitely be ordering again."`,
      author: "Mariana Souza",
    },
    {
      content:
        `"I ordered a custom birthday cake, and it exceeded my expectations! The design was stunning, and the taste was even better. It was the perfect centerpiece for our celebration. Thank you for making our special day even sweeter!"`,
      author: "Rafael",
    },
    {
      content: `"I’m blown away by the quality of these cakes! You can tell so much love and effort goes into every bite. The flavors are unique and delicious, and the texture is always perfect. Highly recommend to anyone looking for a cake that tastes as amazing as it looks!"`,
      author:"Luana",
    },
  ]

export function Testimonials(){
    const [emblaRef , emblaApi] = useEmblaCaroulse({
        loop: true,
      }) 
    
      function scrolPrev(){
        emblaApi?.scrollPrev();
      }
      function scrolNext(){
        emblaApi?.scrollNext();
      }
    return(
        <section className="py-16">

                <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-center text-6xl text-slate-800 mb-9">What clients say about us</h2>
                
                    <div className="relative">

                            <div className='overflow-hidden' ref={emblaRef}>
                                <div className='flex'>
                                    {testimonials.map((item,index) => (
                                        <div
                                        className='flex-[0_0_100%] min-w-0  px-3'
                                        key={index}>
                                            <article className='bg-[#6D95F8] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                                <div className='flex flex-col items-center text-center space-y-4'>
                                                    <p className='md:text-2xl'>{item.content}</p>
                                                    <div>
                                                        <p className='font-bold'>{item.author}</p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button 
                            onClick={scrolPrev}
                            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                                <ChevronLeft className='w-6 h-6 text-gray-600'/>
                            </button>

                            <button 
                            onClick={scrolNext}
                            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                                <ChevronRight className='w-6 h-6 text-gray-600'/>
                            </button>
                    </div>


                </div>
        </section>
    )
}