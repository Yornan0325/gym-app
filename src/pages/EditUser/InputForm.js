
import { useState, React } from "react";
import CardHeader from "../Header/CardHeader"
import Navbbar from "../Navbar/NavBar"
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiDelete } from '@mdi/js';

import ModalDelete from "./ModalDelete";
import useRouteDestination from "../../components/CustomHook/useRouteDestination"

export default function InputForm({ modal, userDataforId, loading, idUser, addUser, updateUser, initialData, deleteUser }) {
    const { LinkComponent } = useRouteDestination('/home', <Icon path={mdiArrowLeft} size={2} />);


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
            <hr class="  h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" />


            <div role="alert" className="mx-auto w-11/12 md:w-2/3 ">
                <div className="relative  px-5 md:px-10 bg-white">
                    <div class="h-16 grid grid-cols-2 gap-4 content-between inline-flex text-base font-medium text-[#07074D]" role="group">
                        <div className="cursor-pointer absolute top-0 right-0 mt-2 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                            <button type="button" >
                                {LinkComponent}
                            </button>
                        </div>
                        <div className="cursor-pointer absolute  mt-2 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
                            <button onClick={open} type="button">
                                <Icon path={mdiDelete} size={2} />
                            </button>
                        </div>

                    </div>
                    <ModalDelete close={close} isOpen={isOpen} deleteUser={deleteUser} idUser={idUser} />

                    <form onSubmit={handleSubmit}>

                        <div class="mb-2">
                            <label for="name" class="mx-2 block text-base font-medium text-[#07074D]">
                                Nombres
                            </label>
                            <input placeholder={userDataforId.title} type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="mb-2">
                            <label for="phone" class="mx-2 block text-base font-medium text-[#07074D]">
                                Apellidos
                            </label>
                            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} placeholder={userDataforId.surnames}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="mb-2">
                            <label for="address" class="mx-2 block text-base font-medium text-[#07074D]">
                                Correo
                            </label>
                            <input type="email" name="address" id="address" value={formData.address} onChange={handleInputChange} placeholder={userDataforId.email}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <br />
                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="age" class="mx-2  block text-base font-medium text-[#07074D]">
                                        Edad
                                    </label>
                                    <input type="number" name="age" id="age" value={formData.age} onChange={handleInputChange} placeholder={userDataforId.age}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="weight" class="mx-2 block text-base font-medium text-[#07074D]">
                                        Peso
                                    </label>
                                    <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleInputChange} placeholder={userDataforId.weight}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="tel" class="mx-2 block text-base font-medium text-[#07074D]">
                                        Telefono
                                    </label>
                                    <input type="tel" name="tel" id="tel" value={formData.tel} onChange={handleInputChange} placeholder={userDataforId.phone}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-2">
                                    <label for="time" class="mx-2 block text-base font-medium text-[#07074D]">
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

        </>
    );
}
