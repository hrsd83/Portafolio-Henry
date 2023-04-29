import React from 'react';
import Clima2 from "../assets/img/clima2.jpg"


const Portafolio = () => {
    const portafolios = [

        {
            id: 1,
            src: Clima2
        },
        {
            id: 2,
            src: Clima2
        },
        {
            id: 3,
            src: Clima2
        },

    ]
  return (
    <div className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
                <p className='py-6'>Mira algunos de mis trabajos aqui</p>
            </div>
                
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'
            >
                {portafolios.map(({id, src}) => ( 
                    <div key={id} className=' shadow-md shadow-red-600 rounded-lg '>
                    <img src= {src} alt='clima' className='rounded-md duration-200 hover:scale-105'></img>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Cypress</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Selenium</button>

                    </div>
                </div>
                ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Portafolio
