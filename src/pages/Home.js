
import React from "react";
import CardHeader from "./Header/CardHeader"
import useModal from "../components/CustomHook/useModal";
// import MainCard from "../components/Usuarios/Cards/CardComponent "
import NavBar from "./Navbar/NavBar";
import { useContextApps } from "../Context/Context"
import UsersList from "../components/Usuarios/Cards/UsersList";
import ModalNewUser from "../components/Usuarios/NewUser/ModalNewUser";
 

export default function HomePage() {
  const { jsonData } = useContextApps()
  const modal = useModal()
  
  return (
    <>
      <NavBar avatarUrl="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" name="Home" />
      <CardHeader title="Usuarios" />
      <div class="flex justify-between flex-col md:flex-row mx-2">
     
      </div>
      <hr class="my-2 h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" />
      {/* <main> */}
        <UsersList open={modal.open} jsonData={jsonData} />
        <ModalNewUser isOpen={modal.isOpen} handleClose={modal.close} />
      {/* </main> */}

       
    </>
  );
}



