'use client'


import { Container } from "@/components/container";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaCalendar} from "react-icons/fa";
import { FaPeopleGroup,FaPencil,FaCakeCandles } from "react-icons/fa6";
import { Footer } from "@/components/footer";
import Image from "next/image";




const schema = z.object({
    name:z.string().min(1,'Name is required'),
    eventType: z.enum([
       'Wedding',
       'Private Party',
       'Corporate Event'

    ], { 
        required_error: 'Event type is required' 
    }),
    contact:z.string().min(1, 'Contatc number is required'),
    email:z.string().email(),
    date: z
    .string() // Aceitamos inicialmente como string, porque é assim que o HTML `<input type="date">` retorna o valor.
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "The date must be valid",
    }) // Verifica se o valor é uma data válida.
    .refine((value) => new Date(value) >= new Date(), {
      message: "The date mus be in the future", // Aqui você pode ajustar para validar outras regras, como intervalo.
    }),
    time:z.enum([
        'Morning',
        'Afternoon',
        'Evening'
 
     ], { 
         required_error: 'Event type is required' 
     }),
    guests:z.string().min(1, 'Number of people is required'),
    description: z.string().min(1,'Description is required'),
 
})

type FormData = z.infer<typeof schema>



export default function Order(){

    const {register, handleSubmit,setValue, formState:{errors} , reset} = useForm<FormData>({
        resolver:zodResolver(schema),
        mode:'onChange'
    })


   


    function onSubmit(data:FormData){

   


        const messageText = `
            Hello, my name is ${data.name}.
            Number of guests: ${data.guests}
            Event Type: ${data.eventType}
            Contact: ${data.contact}
            Email: ${data.email}
            Date: ${data.date}
            Time: ${data.time}
            Description: ${data.description}
        `.trim();

        const encodedMessage = encodeURIComponent(messageText);// codificar a string para que nao aja problemas nas ultilizacao da url 

        // Link do WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send/?phone=35679240637&text=${encodedMessage}&type=phone_number`;

        window.open(whatsappLink, '_blank');    
       
        reset()
        
    }
    



    return(
        <>
        <Container>
            <main className="w-full mb-8">
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-9 justify-between mt-9 mb-28">
                    <section className="w-full max-w-6xl flex flex-col gap-3">
                        <h1 className="text-4xl md:text-5xl text-center">GO NUTS CUSTOM AND CREATIVE CAKES</h1>

                        <p className="text-2xl text-center text-slate-400 italic">Celebrate life's sweetest moments with our handcrafted, personalized buttercream cakes—where creativity meets flavor! Your vision, our masterpiece. Order now and make every occasion unforgettable!.</p>

                        <h2 className="text-center font-bold text-2xl">How to order your perfect cake:</h2>

                        <div className="flex flex-col gap-3">
                            <section className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl">Gather the Essentials</h3>
                                    <FaCalendar size={16}/>
                                    <FaPeopleGroup size={20} />

                                </div>
                                <p className="text-lg">Before starting your order, think about the key details:</p>
                                
                                <p className="text-center text-lg">Think about the number of guests, the date, the type of event, and your cake theme!</p>
                               

                                <p className="text-lg">With these in mind, you’re ready to fill out our order form!</p>

                            </section>

                            <section className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl">Share Your Cake Vision</h3>
                                    <FaPencil size={16}/>
                                </div>

                                <p className="text-center text-lg">In the form, describe your theme in detail. Whether it’s superheroes, fairytales, or anything unique, let us know! Add any extra details or special requests to make your cake truly one of a kind.</p>

                            </section>

                            <section className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl">Submit and Connect</h3>
                                    <IoLogoWhatsapp size={16}/>
                                </div>

                                <p className="text-center text-lg">Once you’ve filled out all the information, submit the form. You’ll then be directed to WhatsApp to finalize your order. We’ll review availability and get back to you ASAP. If needed, we might request a reference photo to ensure your cake is exactly what you envision.</p>

                            </section>

                            <section className="flex flex-col items-center gap-3">

                                 <div className="flex items-center gap-3">
                                    <h3 className="text-2xl"> Sit Back and Get Ready to Celebrate!</h3>
                                    <FaCakeCandles size={16}/>
                                </div>   

                                <p className="text-center text-lg">Once we confirm your order, we’ll pour our hearts into creating the most beautiful and delicious cake for your special moment. Now all you need to do is wait for your event and Go Nuts over the flavor!</p>

                            </section>

                        </div>

                    </section>

                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-3xl flex flex-col gap-6 bg-slate-100 p-4 rounded-md drop-shadow-md">

                            <h2 className="text-center text-4xl">Let's Go Nuts</h2>

                            <div className="w-full mb-3">
                                    <p>Name & Surname</p>
                                    <Input
                                    type="text"
                                    register={register}
                                    name="name"
                                    error={errors.name?.message}
                                    />
                        </div>

                            <div className="w-full flex flex-col md:flex-row justify-between gap-5">

                            <div className="w-full mb-3">
                                    <p>Number of Guests</p>
                                    <Input
                                    type="text"
                                    register={register}
                                    name="guests"
                                    error={errors.guests?.message}
                                    />
                            </div>

                            <div className="w-full mb-3">
                                    <p>Event Type</p>

                                    <select
                            className="w-full bg-transparent border-b-2 border-slate-400 h-11 px-2 outline-none"
                            {...register('eventType')}
                            name="eventType"
                            defaultValue=''
                            >
                                <option value="" disabled>Select one type</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Private Party">Private Party</option>
                                <option value="Corporate Event">Corporate Event</option>
                              
                            </select>
                            </div>


                            </div>
                        <div className="w-full flex flex-col md:flex-row  justify-between gap-5">

                            <div className="w-full mb-3">
                                    <p>Contact number</p>
                                    <Input
                                    type="text"
                                    register={register}
                                    name="contact"
                                    error={errors.contact?.message}
                                    />
                            </div>

                            <div className="w-full mb-3">
                                    <p>E-mail Address</p>
                                    <Input
                                    type="text"
                                    register={register}
                                    name="email"
                                    error={errors.email?.message}
                                    />
                            </div>

                         
                        </div>
                        
                        <div className="w-full flex flex-col md:flex-row  justify-between gap-5">

                            <div className="w-full mb-3">
                                    <p>Date of Event</p>
                                    <Input
                                    type="date"
                                    register={register}
                                    name="date"
                                    error={errors.date?.message}
                                    />
                            </div>

                            <div className="w-full mb-3">
                                    <p>Time</p>

                                    <select
                             className="w-full bg-transparent border-b-2 border-slate-400 h-11 px-2 outline-none"
                            {...register('time')}
                            name="time"
                            defaultValue=''
                            >
                                <option value="" disabled>Select one time</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternonn</option>
                                <option value="Evening">Evening</option>
                              
                            </select>
                            </div>

                         
                        </div>


                        
                        <div className="w-full mb-3">
                                    <p>Description</p>
                                    <textarea 
                                    className="w-full bg-transparent border-b-2 border-slate-400 h-11 px-2 outline-none"
                                    {...register('description')}
                                    name="description"
                                    id="description"
                                    ></textarea>
                            </div>


                       
                       
                        <button
                        type="submit"
                        className="w-full  border-2 border-slate-400 rounded-md text-lg flex items-center gap-2 justify-center"
                        >
                              
                            SUBMIT
                             
                        </button>

                       
                    </form>

                </div>


                <h1 className="text-center text-6xl mt-11 mb-4 text-slate-800">Get inspired</h1>
                <p className="text-slate-400  mb-11 text-center text-2xl italic">by our previous work</p>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 mb-11">

          <section className="drop-shadow-md w-full h-fit ">
            <div className="w-full  overflow-hidden">
            <Image
              className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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
             className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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
              className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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
              className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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
              className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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
              className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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
              className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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
              className="object-cover w-full md:opacity-50 md:hover:scale-105 md:hover:opacity-100 md:transition-all md:duration-300"
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

       
            </main>

        </Container>
            <Footer/>
      </>       
    )
}