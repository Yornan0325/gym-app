import { useState, React } from "react";
 
import Navbbar from "../Navbar/NavBar";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiDelete } from "@mdi/js";

import ModalDelete from "./ModalDelete";
import useRouteDestination from "../../components/CustomHook/useRouteDestination";
// const dimentionLogo = "w-12 h-12"
export default function InputForm({
  modal,
  userDataforId,
  loading,
  idUser,
  addUser,
  updateUser,
  initialData,
  deleteUser,
}) {
  const { LinkComponent } = useRouteDestination(
    "/home",
    <Icon path={mdiArrowLeft} size={2} />
  );


  const { open } = modal;
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
    setFormData({
      id: "",
      name: "",
      lastName: "",
      address: "",
      age: "",
      weight: "",
      tel: "",
      time: "",
    });
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Navbbar
        imgUser="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
        name={` ${userDataforId.title} ${userDataforId.surnames}`}
        dimention="w-12 h-12"
        logoState="image"
        
      />
    
{/* 
      <hr className="  h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" /> */}

      <div role="alert" className="mx-auto w-11/12 md:w-2/3 ">
        <div className="relative  px-5 md:px-10 bg-white">
          <div
            className="h-16 grid grid-cols-2 gap-4 content-between inline-flex text-base font-medium text-[#07074D]"
            role="group"
          >
            <div className="cursor-pointer absolute top-0 right-0 mt-2 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
              {LinkComponent}
            </div>
            <div className="cursor-pointer absolute  mt-2 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
              <button onClick={open} type="button">
                <Icon path={mdiDelete} size={2} />
              </button>
            </div>
          </div>
          <ModalDelete modal={modal} deleteUser={deleteUser} idUser={idUser} />

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="mx-2 block text-base font-medium text-[#07074D]"
              >
                Nombres
              </label>
              <input
                placeholder={userDataforId.title}
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="lastName"
                className="mx-2 block text-base font-medium text-[#07074D]"
              >
                Apellidos
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={userDataforId.surnames}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="address"
                className="mx-2 block text-base font-medium text-[#07074D]"
              >
                Correo
              </label>
              <input
                type="email"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={userDataforId.email}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <br />
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-2">
                  <label
                    htmlFor="age"
                    className="mx-2  block text-base font-medium text-[#07074D]"
                  >
                    Edad
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder={userDataforId.age}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-2">
                  <label
                    htmlFor="weight"
                    className="mx-2 block text-base font-medium text-[#07074D]"
                  >
                    Peso
                  </label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder={userDataforId.weight}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-2">
                  <label
                    htmlFor="tel"
                    className="mx-2 block text-base font-medium text-[#07074D]"
                  >
                    Telefono
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    value={formData.tel}
                    onChange={handleInputChange}
                    placeholder={userDataforId.phone}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-2">
                  <label
                    htmlFor="time"
                    className="mx-2 block text-base font-medium text-[#07074D]"
                  >
                    Registro: {userDataforId.registrationDate}
                  </label>
                  <input
                    type="date"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] my-4 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
