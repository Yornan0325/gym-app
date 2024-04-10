// import React from "react";
// // import CardHeader from "../Header/CardHeader"

// import CardHeader from "../Header/CardHeader"

// // import useModal from "../../CustomHook/useModal";
// import useForm from "../../CustomHook/useForm";

// export default function ModalNewUser({ handleClose, isOpen, deleteUser, idUser }) {
//     const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
//     // const modal = useModal(false)

//     return (
//         <>

//             {isOpen ? (
//                 <>

//                     <CardHeader title={` ${userDataforId.title} ${userDataforId.surnames}`} />
//                     <hr class="my-2 h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" />
//                     <div class="flex items-center justify-center p-12">
//                         {/* <!-- Author: FormBold Team --> */}
//                         <div class="mx-auto w-full max-w-[550px] bg-white">


//                             <form onSubmit={handleSubmit}>
//                                 <div class="mb-5">
//                                     <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
//                                         Nombres
//                                     </label>
//                                     <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder={userDataforId.title}
//                                         class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                 </div>
//                                 <div class="mb-5">
//                                     <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
//                                         Apellidos
//                                     </label>
//                                     <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="{userDataforId.surnames}"
//                                         class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                 </div>
//                                 <div class="mb-5">
//                                     <label for="address" class="mb-3 block text-base font-medium text-[#07074D]">
//                                         Correo
//                                     </label>
//                                     <input type="email" name="address" id="address" value={formData.address} onChange={handleChange} placeholder="{userDataforId.email}"
//                                         class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                 </div>
//                                 <div class="-mx-3 flex flex-wrap">
//                                     <div class="w-full px-3 sm:w-1/2">
//                                         <div class="mb-5">
//                                             <label for="age" class="mb-3 block text-base font-medium text-[#07074D]">
//                                                 Edad
//                                             </label>
//                                             <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} placeholder="{userDataforId.age}"
//                                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                         </div>
//                                     </div>
//                                     <div class="w-full px-3 sm:w-1/2">
//                                         <div class="mb-5">
//                                             <label for="weight" class="mb-3 block text-base font-medium text-[#07074D]">
//                                                 Peso
//                                             </label>
//                                             <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleChange} placeholder="{userDataforId.weight}"
//                                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                         </div>
//                                     </div>
//                                     <div class="w-full px-3 sm:w-1/2">
//                                         <div class="mb-5">
//                                             <label for="tel" class="mb-3 block text-base font-medium text-[#07074D]">
//                                                 Telefono
//                                             </label>
//                                             <input type="tel" name="tel" id="tel" value={formData.tel} onChange={handleChange} placeholder="{userDataforId.phone}"
//                                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                         </div>
//                                     </div>
//                                     <div class="w-full px-3 sm:w-1/2">
//                                         <div class="mb-5">
//                                             <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
//                                                 Registro
//                                             </label>
//                                             <input type="date" name="time" id="time" value={formData.time} onChange={handleChange}
//                                                 class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <input  type="submit"
//                                     value="submit"
//                                         class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" />
                                
                
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                 </>
//             ) : null}
//         </>
//     );
// }
