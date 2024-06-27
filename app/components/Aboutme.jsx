"use client";
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import Tabbutton from './Tabbutton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "Skills",
        content: (
            <ul>
                <li>ML Pipelines</li>
                <li>Database Desgin</li>
                <li>ML Pipelines</li>
                
            </ul>
        ),
        mobilecontent: (
            <p>
                ML pipelines, comptuer vision, communication
            </p>
        )
    },

    {
        title: "Tools",
        id: "Tools",
        content: (
            <ul>
                <li>Python</li>
                <li>Java</li>
                <li>React</li>
                <li>R</li>
            </ul>
        ),
        mobilecontent: (
            <p>
                Python, Java, React, R
            </p>
        )
    }
]



const Aboutme = () => {
    const [tab, setTab] = useState("Skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);

        });

    }


  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-centered py-0 md:px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
            className=' md:hidden lg:hidden'
            src = "/images/t.png" 
            //src = "https://steamuserimages-a.akamaihd.net/ugc/770616950637706003/8FF807E120B2942915834FE4CA204D44658CB2A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            width = {500}
            height = {500}
        />
        <Image
            className='hidden md:block lg:block'
            //src = "/images/t.png" 
            src = "/images/eepy.png"
            //src = "https://steamuserimages-a.akamaihd.net/ugc/770616950637706003/8FF807E120B2942915834FE4CA204D44658CB2A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            width = {500}
            height = {500}
        />
        <div>
            <h1 className='text-3xl mt-3 mb-3 md:mt-0 lg:mt-0'>About Me</h1>
            <p className='text-base text-white'>
                Hey, I&apos;m Calwin 👋🏻. I am a rising junior at UCSD double majoring in Data Science and Applied Mathamatics. I serve as an instructional assistant for DSC40B (algorithms). Currently, I am building a couple of fullstack ML projects with hopes of finding an internship this summer 😅  
            </p>
            
            <div className='flex flex-row mt-3'>
                <Tabbutton 
                selectTab={() => handleTabChange("Skills")} 
                active = {tab === "Skills"}
                > Skills 
                </Tabbutton>
                <Tabbutton 
                selectTab={() => handleTabChange("Tools")} 
                active = {tab === "Tools"}
                > Tools 
                </Tabbutton>
            </div>
            <div className='hidden md:block mt-1'>
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
            <div className=' md:hidden mt-1'>
                {TAB_DATA.find((t) => t.id === tab).mobilecontent}
            </div>
        </div>
      </div>

    </section>
  )
}

export default Aboutme
