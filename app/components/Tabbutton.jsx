import React from 'react'

const Tabbutton = ({active, selectTab, children}) => {
const buttonClasses = active ?   'text-[#4474cf]' : 'text-white'



    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-[#4474cf] ${buttonClasses}`}>{children}</p>
        </button>

    )
}

export default Tabbutton
