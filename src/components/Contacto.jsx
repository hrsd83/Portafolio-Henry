import React from 'react'

const Contacto = () => {
  return (
    <div name= "Contacto" className=' w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Formulario</p>
            <p className='py-6 '>Llene el formulario para contactarme</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/69c47dbc-f431-458d-b5a6-1146fbbe7a32' method='POST' className='flex flex-col w-full md:w-1/3'> 
                <input 
                type='text' 
                name='name' 
                placeholder='Ingrese su nombre'
                className='p-2 bg-transparent border-2 rounded-md text-white focus: outline-none'>

                </input>
                <input 
                type='text' 
                name='email' 
                placeholder='Ingrese su email'
                className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus: outline-none'>
                </input>
                <textarea name='message' rows="10" placeholder='Ingresa un mensaje' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  >
                

                </textarea>
                <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-black hover:scale-110 duration-300 cursor-pointer'> Enviar </button>
            </form>
        </div>
      </div>

    </div>
  )
}

export default Contacto
