import React from 'react'
import bootstrap from '../assets/img/experiencia/bootstrap.png'
import css from '../assets/img/experiencia/css.png'
import git from '../assets/img/experiencia/git.png'
import github from '../assets/img/experiencia/github.png'
import html from '../assets/img/experiencia/html.png'
import javascript from '../assets/img/experiencia/javascript.png'
import jira from '../assets/img/experiencia/jira.png'
import postman from '../assets/img/experiencia/postman.png'
import react from '../assets/img/experiencia/react.png'
import selenium from '../assets/img/experiencia/selenium.png'
import tailwind from '../assets/img/experiencia/tailwind.png'
import trello from '../assets/img/experiencia/trello.png'
import visualSCode from '../assets/img/experiencia/visualSCode.png'
import cypress from '../assets/img/experiencia/cypress.png'






const Experiencia = () => {

    const tecnologias = [

        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-400'
        },
        {
            id: 5,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-green-300'
        },
        {
            id: 7,
            src: git,
            title: 'Git',
            style: 'shadow-orange-900'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-white'
        },
        {
            id: 9,
            src: selenium,
            title: 'Selenium,',
            style: 'shadow-green-700'
        },
        {
            id: 10,
            src: cypress,
            title: 'Cypress',
            style: 'shadow-green-300'
        },
        {
            id: 11,
            src: jira,
            title: 'Jira',
            style: 'shadow-blue-800'
        },
        {
            id: 12,
            src: trello,
            title: 'Trello',
            style: 'shadow-blue-900'
        },
        {
            id: 13,
            src: postman,
            title: 'Postman',
            style: 'shadow-orange-600'
        },
        {
            id: 14,
            src: visualSCode,
            title: 'Visual Studio Code',
            style: 'shadow-blue-500'
        },

    ] 

  return (
    <div name ="Experiencia" className ='bg-gradient-to-b from-gray-800 to-black w-full h-full '> 

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experiencia</p>
                <p className='py-6'>Estas son las tecnologias con las que he trabajado</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0'>
            {tecnologias.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='experiencia' className=" w-48 mx-auto"></img>
                    <p className='mt-4'>{title}</p>
                </div>
            ))
            
            }
              
            </div>
        </div>
    
    
   
      
    </div>
  )
}

export default Experiencia
