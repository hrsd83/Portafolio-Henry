import React, { useState } from 'react'
import { FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [

        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'Sobre mi'
        },
        {
            id:3,
            link: 'Portafolio'
        },
        {
            id: 4,
            link: 'Experiencia'
        },
        {
            id: 5,
            link: 'Contacto'
        }

    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>HenryS</h1>
        </div>
        <ul className='hidden md:flex'>
        {/* Se mapean los links */}
        {links.map(({id,link}) =>(
            <li key={id} className='px-4 cursor-pointer capitalize font- text-gray-400 hover:scale-110 duration-200 '>
                {link}
            </li>
        ))}    
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Menu toggler */}
            {nav &&(
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {/* Se mapean los links */}
        {links.map(({ id,link }) =>(
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                {link}
        </li>
        ))}    
       
        </ul>
            )}
        


    </div>
  )
}

export default NavBar
