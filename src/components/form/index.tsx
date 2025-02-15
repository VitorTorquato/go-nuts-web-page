"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";

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
    .string() 
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "The date must be valid",
    }) // Verifica se o valor é uma data válida.
    .refine((value) => new Date(value) >= new Date(), {
      message: "The date must be in the future", 
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


export function Form(){

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
            const whatsappLink = `https://api.whatsapp.com/send/?phone=35679070634&text=${encodedMessage}&type=phone_number`;
    
            window.open(whatsappLink, '_blank');    
           
            reset()
            
        }
        
    return(
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
                                className="w-full max-w-56 border-2 self-center border-slate-400 rounded-md text-lg flex items-center gap-2 justify-center"
                                >
                                      
                                    SUBMIT
                                     
                                </button>
        
                               
                            </form>
    )
}