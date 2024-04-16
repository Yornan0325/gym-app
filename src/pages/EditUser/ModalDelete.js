import React from "react";
// import CardHeader from "../Header/CardHeader"

import CardHeader from "../Header/CardHeader"
import { TiDelete } from "react-icons/ti";
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
                                <TiDelete className="mx-auto mb-4 h-20 w-20 text-red-400 dark:text-gray-200" />
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Esta accion eliminará la cuenta de manera definitiva, no se podra recuperar
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                   
                                    <button
                                        className="bg-emerald-500 text-white hover:bg-emerald-800 font-bold text-lg px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150    "
                                        type="button"
                                        onClick={close}
                                    >
                                        Cancelar
                                    </button>
                                    <button onClick={() => deleteUser(idUser)} class="bg-red-500 text-white hover:bg-red-800 font-bold text-lg px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Eliminar cuenta
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
