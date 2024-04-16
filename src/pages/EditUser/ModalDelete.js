import React from "react";
// import CardHeader from "../Header/CardHeader"
import Icon from '@mdi/react';
import { mdiDeleteEmpty } from '@mdi/js'
import CardHeader from "../Header/CardHeader"
// import { TiDelete } from "react-icons/ti";
export default function ModalDelete({close,  isOpen, deleteUser, idUser }) {


    return (
        <>

            {isOpen ? (
                <>
                    <div
                        className="justify-center m-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        <CardHeader title="Eliminar usuario" />
                                    </h3>
                                    
                                </div>
                                {/*body*/}
                                <Icon path={mdiDeleteEmpty} size={4}className="mx-auto mb-4 h-20 w-20   dark:text-gray-200" />
                                <mdiDeleteEmpty   />
                                <div className="relative p-6 flex-auto">
                                    <p
                                    class="text-center text-gray-500 dark:text-gray-400 text-3xl md:text-3xl sm:text-3xl lg:text-base  text-gray-900 dark:text-white" 
                                    // className="my-4 text-blueGray-500 text-lg leading-relaxed"
                                    >
                                        Esta acción eliminará la cuenta de manera definitiva, no se podrá recuperar
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="  flex justify-around  items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                   
                                    <button
                                        className="bg-emerald-500 text-white hover:bg-emerald-800 font-bold text-lg px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150    "
                                        type="button"
                                        onClick={close}
                                    >
                                        Cancelar
                                    </button>
                                    <button onClick={() => deleteUser(idUser)} class="bg-red-500 text-white hover:bg-red-800 font-bold md:text-lg sm:text-lg  text-md px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Eliminar cuenta
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
