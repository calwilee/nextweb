import React from 'react'
import Navlink from './Navlink'

const Menuoverlay = ({ links }) => {
  return (
    <ul className=' md:hidden lg:hidden flex flex-col pt- pb-20 items-center bg-gradient-to-b from-[#6aa5e9] from-20% '>
        {links.map((link, index) => (
            <li key = {index}>
                <Navlink href = {link.path} title = {link.title} target = {link.target}/>
            </li>
        ))}
      
    </ul>
  )
}

export default Menuoverlay
