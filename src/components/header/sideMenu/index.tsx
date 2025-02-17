"use client"

import { useState } from "react";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import Link from "next/link";
import { WiDayCloudy } from "react-icons/wi";

export function SideMenu() {

    const [menuOpen, setMenuOpen] = useState(false);


    function handleOpenMenu() {
        setMenuOpen(!menuOpen);
    }

    return (


        <div className="sm:hidden">
            <div className={`absolute top-0 left-0 z-50 flex flex-col h-screen transition-all duration-500 ease-in-out bg-slate-200 ${menuOpen ? "w-full" : "w-0"}`}

            >
                {
                    menuOpen && (
                        <div
                        >
                            <nav className='w-full h-full flex flex-col items-start mt-24  gap-4 py-2 px-5 text-black'>
                                <Link
                                    className="text-2xl"
                                    href='/'>Home</Link>
                                <Link
                                    className="text-2xl "
                                    href='#aboutus'>About Us
                                </Link>
                                <Link
                                    className="text-2xl "
                                    href='#services'>Services
                                </Link>
                                <Link
                                    className="text-2xl "
                                    href='/gallery'>Galery
                                </Link>
                                <Link
                                    className="text-2xl"
                                    href='/order'>Order</Link>
                            </nav>
                        </div>
                    )
                }
            </div>

            <div className="block sm:hidden absolute z-50 "
                style={{ top: '47px' }}
            >
                <button onClick={handleOpenMenu}>
                    {menuOpen ? <CgClose size={30} color="#000" /> : <CgMenuMotion size={30} color='#000' />}
                </button>

            </div>
        </div>
    )
}