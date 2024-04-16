
import { useState, React } from "react";
import CardHeader from "../Header/CardHeader"
import Navbbar from "../Navbar/NavBar"
import { IoArrowBackOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import ModalDelete from "./ModalDelete";
import useRouteDestination from "../../components/CustomHook/useRouteDestination"

export default function InputForm({ modal, userDataforId, loading, idUser, addUser, updateUser, initialData, deleteUser }) {
    const { LinkComponent } = useRouteDestination('/home', "Volver");


    const { close, isOpen, open } = modal
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.id) {
            updateUser(formData);
        } else {
            addUser(formData);
        }
        setFormData({ id: "", name: "", lastName: "", address: "", age: "", weight: "", tel: "", time: "" });
    };

    if (loading) {
        return <div>Cargando...</div>;
    }


    return (
        <>

            <Navbbar avatarUrl="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" name="JohanFit" />
            <CardHeader title={` ${userDataforId.title} ${userDataforId.surnames}`} />
            <hr class="my-2 h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" />

            <div className="py-12  bg-slate-950 bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div class="mb-4 inline-flex rounded-md shadow-sm text-base font-medium text-[#07074D]" role="group">
                    <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                            <svg onClick={close} xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                        <button onClick={open} type="button" class="  inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <div class="w-3 h-3 me-2">
                                <TiDeleteOutline />
                            </div>
                            Eliminar cuenta
                        </button>
                        <div type="button" class="inline-flex items-center px-4 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <div class="w-3 h-3 me-2">
                                <IoArrowBackOutline />
                            </div>
                            {LinkComponent}
                        </div>

                    </div>
                    <ModalDelete close={close} isOpen={isOpen} deleteUser={deleteUser} idUser={idUser} />

                    <form onSubmit={handleSubmit}>
                        <div class="mb-2">
                            <label for="name" class=" block text-base font-medium text-[#07074D]">
                                Nombres
                            </label>
                            <input placeholder={userDataforId.title} type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="mb-2">
                            <label for="phone" class=" block text-base font-medium text-[#07074D]">
                                Apellidos
                            </label>
                            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} placeholder={userDataforId.surnames}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="mb-2">
                            <label for="address" class=" block text-base font-medium text-[#07074D]">
                                Correo
                            </label>
                            <input type="email" name="address" id="address" value={formData.address} onChange={handleInputChange} placeholder={userDataforId.email}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <br />
                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="age" class="  block text-base font-medium text-[#07074D]">
                                        Edad
                                    </label>
                                    <input type="number" name="age" id="age" value={formData.age} onChange={handleInputChange} placeholder={userDataforId.age}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="weight" class=" block text-base font-medium text-[#07074D]">
                                        Peso
                                    </label>
                                    <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleInputChange} placeholder={userDataforId.weight}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="tel" class=" block text-base font-medium text-[#07074D]">
                                        Telefono
                                    </label>
                                    <input type="tel" name="tel" id="tel" value={formData.tel} onChange={handleInputChange} placeholder={userDataforId.phone}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="time" class=" block text-base font-medium text-[#07074D]">
                                        Registro:  {userDataforId.registrationDate}
                                    </label>
                                    <input type="date" name="time" id="time" value={formData.time} onChange={handleInputChange}
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
                       
                    </form>
                </div>
            </div>
            </div>
        </>
    );
}
