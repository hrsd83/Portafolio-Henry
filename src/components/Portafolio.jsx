import React from "react";

const Portafolio = () => {
  const portafolios = [
    {
      id: 1,
      src: "/img_landing_page.png",
      url: "https://landing-page-wheat-iota.vercel.app/",
    },
  ];
  return (
    <div
      name="Portafolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portafolio
          </p>
          <p className="py-6">
            Mira algunos trabajos a cual se le realizo pruebas
          </p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-30 sm:px-0">
          {portafolios.map(({ id, src, url }) => (
            <div key={id} className=" shadow-md shadow-gray-500 rounded-lg ">
              <a href={url}>
                {" "}
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                ></img>
              </a>
              <div className="flex items-center justify-center">
                <button className="w-60 h-24  px-6 flex text-center  py-3 m-4">
                  Landing Page Realizada con el framework React y Libreria
                  Talwind Css
                </button>
                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        Cypress</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
