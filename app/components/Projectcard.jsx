import React from 'react'

const Projectcard = ({imgUrl, title, description, link }) => {
  return (
    <div>
        <a className='relative group' target='_blank' href= {link}>
            <div className='overlay absolute top-0 rounded-xl left-0 w-full h-full bg-[#6aa5e9] bg-opacity-0 hidden group-hover:flex  group-hover:bg-opacity-80 transition-all duration-300 text-white'> 
                <p className='m-8'>{description}</p>
            </div>
            <div className='h-48 md:h-60 rounded-t-xl' style = {{background: `url(${imgUrl})`, backgroundSize: "cover"}}> </div>
            <div className='text-white rounded-b-xl bg-[#6aa5e9] py-6 px-4'>
                <h5 className='font-semibold'>{title}</h5>
            </div>

        </a>




    </div>
  )
} 

export default Projectcard
