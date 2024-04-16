
import Icon from '@mdi/react';
import { mdiAccountMultiplePlusOutline  } from '@mdi/js';
export default function ButtonNewUser({ modal }) {
  const { open } = modal
  return (
    <>
      {/* <div class="bg-blue-400 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-400 xl:bg-indigo-400 py-2 px-4 text-center">Resize window</div> */}
      <div
       
        class="
        inline-flex items-center
        bg-slate-950 text-white 
        md:bg-white md:text-gray-600
        sm:bg-slate-950 sm:text-white
        text-md w-full  rounded-lg 
        py-5 px-4 h-2 border  
       border-gray-600   focus:ring-2  focus:ring-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
        {/* <div class="w-4 h-4 me-2" > */}
          <Icon path={mdiAccountMultiplePlusOutline    }
            title="Nuevo usuario"
            onClick={open}
            size={1.5}
           
          />
        {/* </div> */}


      </div>

    </>
  );
};

