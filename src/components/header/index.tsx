import Link from "next/link";
import { SideMenu } from "./sideMenu";
import logo from '@/../../public/images/logo-removebg-preview.png' 
import Image from "next/image";


export function Header(){
    return(
        <header className="relative w-full  h-28 bg-slate-100 text-black px-2">
            <div className="container mx-auto h-full flex items-center justify-between px-2">
                    <SideMenu/>
                <Link 
                href={'/'}
                >
                    <Image
                    src={logo}
                    alt="Logo go nuts"
                    width={100}
                    height={100}
                    priority
                    quality={100}
                    />
                </Link>
                <nav className='hidden sm:flex items-center  gap-7'>
                            <Link
                              className="text-2xl"
                              href='/'>Home</Link>
                              <Link
                              className="text-2xl "
                              href='/aboutus'>About Us</Link>
                              
                              <Link
                              className="text-2xl "
                              href='/order'>Order
                              </Link>  
                </nav>
            </div>
        </header>
    )
}