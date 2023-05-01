import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'
import {BsFileEarmarkPdf} from 'react-icons/bs'



const SocialLinks = () => {
    const linsksSocial = [

        {
            id: 1,
            child: (
                <>
                    GitHihub <FaGithub size={ 30 }/>
                </>
            ),
            href:"https://github.com/hrsd83",
        },
        {
            id: 2,
            child: (
                <>
                    Email<AiOutlineMail size={ 30 }/>
                </>
            ),
            href:"mailto:hrsd83@gmail.com?",
        },
        {
            id: 3,
            child: (
                <>
                    Resumen <BsFileEarmarkPdf size={ 30 }/>
                </>
            ),
            href:"/HenryCv.pdf",
            style: 'rounded-br-md',
            download:"/HenryCv.pdf"
        },
    ]
  return (
      <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
          <ul>

          {linsksSocial.map(({ id, child, href, style, download }) => (
              <li key={ id } 
              className={'flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-cyan-950 to-black ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + " " + 
              style}
              >
                  <a
                   href={ href } 
                   className='flex justify-between items-center w-full text-white'
                   download={ download }
                   target='_blank'
                   >
                      
                     { child }
                      
                  </a>
              </li>
          ))}  
          </ul>
      </div>
  );
}

export default SocialLinks
