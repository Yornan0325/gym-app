import React from "react";
import CardHeader from "../../../pages/Header/CardHeader"
// import useForm from "../../CustomHook/useForm";
export default function ModalAddNewUser({ modal }) {
    // const { handleChange, values, errors, handleSubmit } = useForm();
    const { close, isOpen } = modal
    // formLogin
    // const modal = useModal(false)

    return (
        <>

            {isOpen ? (
                <>
                    <div>
                        <div className="py-12  bg-slate-950 bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                    <div className="w-full flex justify-start text-gray-600 mb-3">
                                        <CardHeader title="Crear usuario" />
                                    </div>


                                    <form  >
                                        <div class="mb-2">
                                            <label for="name" class=" block text-base font-medium text-[#07074D]">
                                                Nombres
                                            </label>
                                            <input type="text" name="name" id="name"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                        <div class="mb-2">
                                            <label for="phone" class=" block text-base font-medium text-[#07074D]">
                                                Apellidos
                                            </label>
                                            <input type="text" name="lastName" id="lastName"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                        <div class="mb-2">
                                            <label for="address" class=" block text-base font-medium text-[#07074D]">
                                                Correo
                                            </label>
                                            <input type="email" name="address" id="address"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                        <br />
                                        <div class="-mx-3 flex flex-wrap">
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-2">
                                                    <label for="age" class="  block text-base font-medium text-[#07074D]">
                                                        Edad
                                                    </label>
                                                    <input type="number" name="age" id="age"
                                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-2">
                                                    <label for="weight" class=" block text-base font-medium text-[#07074D]">
                                                        Peso
                                                    </label>
                                                    <input type="number" name="weight" id="weight"
                                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-2">
                                                    <label for="tel" class=" block text-base font-medium text-[#07074D]">
                                                        Telefono
                                                    </label>
                                                    <input type="tel" name="tel" id="tel"
                                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                </div>
                                            </div>
                                            <div class="w-full px-3 sm:w-1/2">
                                                <div class="mb-2">
                                                    <label for="time" class=" block text-base font-medium text-[#07074D]">
                                                        Registro:
                                                    </label>
                                                    <input type="date" name="time" id="time"
                                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit"
                                                class="hover:shadow-form w-full rounded-md bg-[#6A64F1] my-4 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                                Enviar
                                            </button>
                                        </div>
                                        <div className="cursor-pointer absolute top- right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                                            <svg onClick={close} xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    
                </>
            ) : null}
        </>
    );
}
