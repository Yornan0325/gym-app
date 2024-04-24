import { React } from "react";

import { Link } from 'react-router-dom';

export default function UserItem({ data }) {
    return (
        <>
            <div className="flex rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-full max-w-sm min-w-64  px-2 mx-4 flex-col shadow bg-slate-950 overflow-hidden hover:shadow-2xl group rounded-xl transition-all duration-500 transform">
                <div className="flex">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                        className="w-20 m-2 h-20 group-hover:w-24 group-hover:h-24  object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                        alt="titulo"
                    />
                    <div className="w-fit transition-all transform duration-500 mt-5">
                        <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                            {data.title} {data.surnames}
                        </h1>
                        {/* <h1 className="text-gray-400">  {data.title}</h1> */}
                        <div className="justify-between columns-2  text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                            <div className="flex flex-col items-center justify-around">
                                <p>
                                    Edad: {data.age}
                                </p>
                                <p >
                                    Peso: {data.weight}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute group-hover:top-1  -top-16 transition-all duration-500  dark:bg-gray-100 right-1 rounded-lg">
                    <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                        {/* <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
                                        <path
                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                                    </svg>
                                    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <svg viewBox="0 0 960 1000" fill="currentColor" height="1em" width="1em">
                                        <path
                                            d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                                    </svg> */}

                        <Link to={`/editar/${data.id}`}
                            className="flex p-2.5  rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </Link  >


                    </div>
                </div>




                {/* <div className="w-auto">
                                <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">{items.content}</h1>
                                <p className="text-sm text-gray-500 md:text-base">Fotografer</p>
                                <p className="text-sm text-gray-800 md:text-base">Lorem ipsum dolor sit  </p>
                            </div> */}
                <ul className="py-2 mx-8 mt-2 text-gray-500 flex items-center justify-between">
                    <li className="flex flex-col items-center justify-around">
                        <div>Rutinas</div>
                    </li>
                    <Link to={`/calendario/${data.id}`}>
                    <li className="flex flex-col items-center justify-around">
                        <div>Calendario</div>
                    </li>
                    </Link>
                </ul>
            </div>




        </>
        // <div classNameName="card">
        //   <h2>{data.title}</h2>
        //   <p>{data.description}</p>
        // </div>
    );
};



