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
            href:"https://www.canva.com/design/DAFgxfARk5E/NHfRpgr8UFdk4F9P76yXRg/view?utm_content=DAFgxfARk5E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelinkhttps://www.canva.com/design/DAFgxfARk5E/9zW62BWS8K5v6oHIxB9JYw/edit?utm_content=DAFgxfARk5E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" ,
            style: 'rounded-br-md',
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
