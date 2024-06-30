"use client"
import Image from "next/image";


import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

import  Description  from "./components/description";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projectsection from "./components/Projectsection";
import Footer from "./components/Footer";
import { Fade, AttentionSeeker } from "react-awesome-reveal";



export default function Home() {



  return (
    <main className="flex min-h-screen flex-col bg-[url('./images/pillars.jpg')] bg-cover ">
      <Navbar/>
      <div className = "container mt-20 mx-auto px-12 py-4">
        <Fade duration={2200} triggerOnce = {true}fraction={.9}>
        <div className= "h-20 md:h-40"></div>

        <Description/>
        <div className= "h-40 md:h-20"></div>
        <div className=" md:hidden animate-bounce container flex justify-center text-slate-200"> <ChevronDoubleDownIcon className="h-6 y-6"/> </div>
        <div id = "aboutme" className= "h-20 md:h-0"></div>
        <div className= "h-40 md:h-29"></div>
        </Fade>

        
        <Fade duration={2200} triggerOnce = {true}fraction={.4}>

        <Aboutme/>
        </Fade>

        
        <Fade duration={2200} triggerOnce = {true} fraction={.1}>


        <div  className= "h-10 md:h-20"></div>
        <div id = "projects" className= "h-10 md:h-12"></div>
        <div className= "h-20 md:h-20"></div>


        <Projectsection/>

        </Fade>
        
      </div>
      <Footer/>

    </main>
  );
} 
