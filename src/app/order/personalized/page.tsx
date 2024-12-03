'use client'

import { Container } from "@/components/container";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";

import { IoLogoWhatsapp } from "react-icons/io";

const schema = z.object({
    name:z.string().min(1,'Name is required'),
    eventType: z.enum([
       'Wedding',
       'Private Party',
       'Corporate Event'

    ], { 
        required_error: 'Event type is required' 
    }),
    contact:z.string().min(1, 'Contatc number is required').refine((value) => /^(\d{11,12})$/.test(value) ,{
        message:'Contact numbe invalid'
    }),
    email:z.string().min(1,'E-mail address is required'),
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
    image:z
    .any() // Start with `any` because the file input returns a `File` object.
    .refine((file) => file?.type.startsWith("image/"), {
      message: "The file must be an image",
    }) // Check that the file is an image by its MIME type.
    .refine((file) => file?.size <= 5 * 1024 * 1024, {
      message: "The image must be smaller than 5MB",
    }),
     
})

type FormData = z.infer<typeof schema>

export default function Order(){

    const {register, handleSubmit, formState:{errors} , reset} = useForm<FormData>({
        resolver:zodResolver(schema),
        mode:'onChange'
    })

    return(
        <Container>
            <main className="w-full mb-8">
                <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-9 justify-between mt-9">
                    <section className="w-full md:w-2/4">
                        <h1>How it works</h1>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, expedita! Vel incidunt facilis delectus explicabo optio maxime voluptate ipsam voluptatum repellat excepturi repudiandae beatae rem tempore, reiciendis tempora iure repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla, perspiciatis alias voluptas ipsam cum laborum quo laboriosam, debitis quidem quasi eligendi officiis aspernatur ipsum reiciendis? Voluptatibus cumque eos perferendis.</p>
                    </section>

                    <form className="flex-1 flex flex-col gap-6 bg-slate-100 p-4 rounded-md drop-shadow-md">

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
                            defaultValue=''
                            >
                                <option value="" disabled>Select one type</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Private Party">Private Party</option>
                                <option value="Corporate Event">Corporate Event</option>
                                {errors.eventType && <p>{errors.eventType?.message}</p>}
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
                            {...register('eventType')}
                            defaultValue=''
                            >
                                <option value="" disabled>Select one time</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternonn</option>
                                <option value="Evening">Evening</option>
                                {errors.eventType && <p>{errors.time?.message}</p>}
                            </select>
                            </div>

                         
                        </div>

                        <div className="relative w-full  max-w-52 ml-auto mb-3">
                                   
                            <p>Reference</p>

                            <div
                                    className="absolute p-1 w-48 left-3 top-8 -z-50 flex flex-col items-center justify-center gap-1 text-sm cursor-pointer"
                                    >
                                        <span>clik to select file a 'JPEG or JPG' (10 MB limit per file)</span>
                                        
                                    </div>

                                   <div
                                   className=" border-2 border-dashed border-slate-400 p-4 flex justify-center items-center text-center"
                                   >
                                    <input 
                                    className="opacity-0 cursor-pointer"
                                    type="file" />
                                   </div>
                            </div>

                        
                        <div className="w-full mb-3">
                                    <p>Description</p>
                                    <textarea 
                                    className="w-full bg-transparent border-b-2 border-slate-400 h-11 px-2 outline-none"
                                    name="description"
                                    id="description"></textarea>
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