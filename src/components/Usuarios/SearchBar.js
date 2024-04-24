import React, { useState, useEffect } from 'react';
// const fixedInputclassName = "rounded-md appearance-none relative block   px-3 py-2 border border-blue-300 placeholder-blue-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-gradient-500 focus:z-10 sm:text-sm"
// import { Input } from "tailwindcss";
// import Input from "./Input";
// import Select from 'react-select';
// import { ImSearch } from "react-icons/im";
import Icon from '@mdi/react';
import { mdiAccountSearch } from '@mdi/js';
export default function SearchBar({ filterValue, handleSearch }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768); // 768px es el breakpoint md de Tailwind CSS
  };
  useEffect(() => {
    handleResize(); // Llamamos la función para establecer el estado inicial
    window.addEventListener('resize', handleResize); // Añadir event listener
    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar event listener en la desmontada
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (

        <div className="relative rounded-lg bg-slate-950">
          <form>
            <input
              className="text-white font-medium py-2.5 relative cursor-pointer z-30  w-12 rounded-full   bg-transparent pl-12  focus:w-full focus:cursor-text   focus:outline-none"
              type="text"
              placeholder="Buscar usuario"
              name="search"
              value={filterValue}
              onChange={handleSearch}
            />
            <Icon path={mdiAccountSearch}
              size={1.5}
              className="absolute inset-y-0 my-auto"
              color="white"
            />
          </form>

        </div>

      ) : null}

      {isSmallScreen ? null : (
        <form className="max-w-md mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Icon path={mdiAccountSearch}
                size={1.5}
                className="absolute inset-y-0 my-auto"
                color="gray"
              />
            </div>
            <input type="search"
            id="default-search"
              name="search"
              value={filterValue}
              onChange={handleSearch}
              placeholder="Buscar usuario"
              className="text-lg text-gray-600 w-96 rounded-lg 
           py-6 px-4 h-2 border  
          border-gray-600 ps-16 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

          </div>
        </form>
        // <div className="flex flex-col items-center justify-center">
          // <form className="max-w-md mx-auto">
          //   <input
          //     name="search"
          //     value={filterValue}
          //     onChange={handleSearch}

          //     type="text" placeholder="Buscar usuario"
          //     className="text-md text-gray-600 w-96 rounded-lg 
          //  py-6 px-4 h-2 border  
          // border-gray-600 " />
          //   <Icon path={mdiAccountSearch}
          //     size={1.5}
          //     className="absolute inset-y-0 my-auto"

          //   />
          // </form>  
        // </div>

      )}

    </>
  );
};

