import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Portafolio",
    },
    {
      id: 3,
      link: "Experiencia",
    },
    {
      id: 4,
      link: "Contacto",
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed z-10 
    "
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">HenryS</h1>
      </div>
      <ul className="hidden md:flex">
        {/* Se mapean los links */}
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" ml-5 px-8 cursor-pointer capitalize font-bold text-gray-400 hover:scale-110 duration-200 bg-gradient-to-r from-cyan-950 to-black py-1 hover:rounded-2xl  "
          >
            <Link to={link} offset={-70} smooth duration={400}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Menu toggler */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {/* Se mapean los links */}
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                offset={-80}
                smooth
                duration={400}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
