"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navlink from './Navlink';
import { Bars3Icon, XMarkIcon, HomeIcon} from "@heroicons/react/24/solid";
import Menuoverlay from  "./Menuoverlay"
import Home from '../page';


    const navlinks = [
    {
        title: 'About',
        path: '#About',

    },
    {
        title: 'Projects',
        path: '#Projects',

    },
    {
        title: 'Contact',
        path: '#Contact',

    },
]


const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#6aa5e9] via-[#6aa5e9]">
            <div className='flex flex-wrap item-center justify-between mx-auto p-8'>
                <Link 
                    href={"/"} 
                    className='text-2xl md:text-2xl text-white'
                    > 
                    <HomeIcon className='h-7 w-7'/>

                </Link>


                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick = {() => setNavbarOpen(true)} className='flex items-center px-3 py-2  text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-7 w-7'/> 
                            </button>
                        ) : (
                            <button onClick = {() => setNavbarOpen(false)} className='flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-7 w-7'/> 
                            </button>
                        )
                    }
                </div>


                <div className='menu hidden md:block md:w-auto' id = 'navbar'> 
                    <ul className = "flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navlinks.map((link, index) => (
                                <li key = {index}>
                                    <Navlink href = {link.path} title = {link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {navbarOpen ? <Menuoverlay links = {navlinks} /> : null}
        </nav>
    );
};

export default Navbar
