"use client"
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
/*import  IconLinkedin  from '/public/icons/linkedin.js'*/


const imageloader = ({ src, width, quality }) => {
    return "https://steamuserimages-a.akamaihd.net/ugc/770616950637706003/8FF807E120B2942915834FE4CA204D44658CB2A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
}




const description = () => {
  return (
    <section>
        <div className = "grid grid-cols-1 sm:grid-cols-12 ">
            <div className = "col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl'>
                    <div className = "text-xl">
                        Hello World!   
                    </div>
                    <TypeAnimation
                        sequence={[
            
                            // Same substring at the start will only be typed out once, initially
                            "I'm Calwin Li",
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Student",
                            2000,
                            "Instructor",
                            2000,
                            "Developer",
                            2000,
                            "I'm Calwin Li",

                            
        
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' }}
x                        />
                </h1>
                <p className='text-[#656a6e] text-base:sm text-lg  mb-6 lg:text-xl'>
                    A Data Science and Applied Math student at <a className = "text-[#4474cf] font-bold" target='_blank' href="https://ucsd.edu/">UCSD</a>
                </p>
                <div>
                    <a target = "blank" href = "https://google.com">
                    <button className = "px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#4474cf] border-2 border-[#4474cf] hover:bg-[#4a78cd] hover:border-[#4a78cd]  text-white mb-3">Resume</button>
                    </a>
                    
                    <a target = "blank" href = "https://www.linkedin.com/in/calwin-li-74623324a">
                    <button className = "px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-[#4474cf] hover:text-white border-2 border-[#4474cf]  hover:border-[#4474cf] text-[#4474cf]">LinkedIn</button>

                    </a>
                

                </div>
              
            </div>
            <div className='hidden md:block col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className = " w-[250px] h-[250px] lg:w-400px relative ">
                    <Image
                        src = "/images/t.png" 
                        //src = "/images/eepy.png"
                        //src = "https://steamuserimages-a.akamaihd.net/ugc/770616950637706003/8FF807E120B2942915834FE4CA204D44658CB2A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                        alt = "pixelart"
                        className='absolute  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width = {300}
                        height = {300}
                    />
                    
                </div>

            </div>
            
        </div>
    </section>
  );
}

export default description
