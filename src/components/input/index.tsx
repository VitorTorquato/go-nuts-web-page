'use client'

import { RegisterOptions, UseFormRegister } from "react-hook-form";



interface InputProps{
    type:string;
    placeholder?:string;
    name:string;
    error?:string;
    register:UseFormRegister<any>;
    rules?:RegisterOptions
}



export function Input({name,placeholder,register,type,error,rules}:InputProps){


    return(
        <div >
            <input
            className="w-full bg-transparent border-b-2 border-slate-400 h-11 px-2 outline-none"
            type={type}
            placeholder={placeholder}
            {...register(name,rules)}
            id={name}
            />
            {error && <p>{error}</p>}
        </div>
    )
}