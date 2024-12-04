'use client'


import { Container } from "@/components/container";

import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";

import { IoLogoWhatsapp ,IoMdClose} from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import Link from "next/link";



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


    const [message,setMessage] = useState<FormData[]>([])


    function onSubmit(data:FormData){

        const WhatsappMessage = {
            name: data.name,
            guests:data.guests,
            eventType:data.eventType,
            contact:data.contact,
            email:data.email,
            date:data.date,
            time:data.time,
            description:data.description,
       

        }
        console.log(WhatsappMessage)
        setMessage((prevState) => [...prevState,WhatsappMessage])


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

        const encodedMessage = encodeURIComponent(messageText);

        // Link do WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send/?phone=35679240637&text=${encodedMessage}&type=phone_number`;

        window.open(whatsappLink, '_blank');    
       
        
    }
    



    return(
        <Container>
            <main className="w-full mb-8">
                <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-9 justify-between mt-9">
                    <section className="w-full md:w-2/4">
                        <h1>How it works</h1>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, expedita! Vel incidunt facilis delectus explicabo optio maxime voluptate ipsam voluptatum repellat excepturi repudiandae beatae rem tempore, reiciendis tempora iure repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla, perspiciatis alias voluptas ipsam cum laborum quo laboriosam, debitis quidem quasi eligendi officiis aspernatur ipsum reiciendis? Voluptatibus cumque eos perferendis.</p>
                    </section>

                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full md:flex-1 flex flex-col gap-6 bg-slate-100 p-4 rounded-md drop-shadow-md">

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
                        className="w-full border-2 border-slate-400 rounded-md  flex items-center gap-2 justify-center"
                        >
                              
                                    Order via <IoLogoWhatsapp size={16} color="#121212"/>
                             
                        </button>

                       
                    </form>

                </div>

            </main>
        </Container>
    )
}