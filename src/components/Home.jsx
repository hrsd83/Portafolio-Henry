import React from 'react'
import HenryS from '../assets/img/Henry_Perfil1.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'


const Home = () => {
  return (
    <div name = "Home" className=' h-full w-full bg-gradient-to-b from-black to-gray-800 '>

        <div className='max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row  '>
            <div className='flex flex-col justify-center h-full   '>
                <h2 className='text-4xl sm:text-7xl font-bold  text-white'>Tester QA</h2>

                <p className='text-gray-500 py-4 hidden sm:block'>Soy una persona proactiva, excelente compañero de equipo, organizado, responsable y me gusta ayudar a los demas. Comenzar mi carrera profesional en una empresa reconocida me motiva arduamente,  tengo gran facilidad de aprender procesos nuevos y un inmenso placer en integrarme al equipo de trabajo, por lo que le puedo asegurar  que en breve  estaré desempeñando las funciones del puesto optimamente.</p>
                <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-950 to-black hover:scale-110 duration-200 cursor-pointer'>
                        <a href='/HenryCv.pdf' download>Portafolio</a>
                         <span  className='hover:rotate-90 duration-200'><MdKeyboardArrowRight size={ 25 } className='ml-2'/> </span>
                    </button>
                </div>
            </div>
            <div className='rounded-2xl mx-auto w-full md:w-full mb-24' >
                <img src={HenryS} alt='Mi Foto' className='rounded-2xl mx-auto h-auto md:w-full sm: w-full  '></img>
            </div>
        </div>
    </div>
  )
}

export default Home
