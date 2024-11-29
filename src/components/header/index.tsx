import Link from "next/link";
import { SideMenu } from "./sideMenu";

export function Header(){
    return(
        <header className="relative w-full  h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-2">
                    <SideMenu/>

                    
                <h1 className="text-5xl md:7xl">GoNuts</h1>

                <nav className='hidden sm:flex items-center  gap-7'>
                            <Link
                              className="text-2xl"
                              href='/'>Home</Link>
                              <Link
                              className="text-2xl "
                              href='/aboutus'>About Us</Link>
                              <Link
                              className="text-2xl "
                              href='/services'>Products</Link>
                              <Link
                              className="text-2xl "
                              href='/order'>Order
                              </Link>  
                </nav>

            </div>
        </header>
    )
}