
import React from "react";
import CardHeader from "./Header/CardHeader"
import useModal from "../components/CustomHook/useModal";
// import MainCard from "../components/Usuarios/Cards/CardComponent "
import NavBar from "./Navbar/NavBar";
import { useContextApps } from "../Context/Context"
import UsersList from "../components/Usuarios/Cards/UsersList";
import ModalAddNewUser from "../components/Usuarios/NewUser/ModalAddNewUser";
import logoUser from "../pages/svg123.svg"
 

export default function HomePage() {
  const { jsonData } = useContextApps()
  const modal = useModal()

  return (
    <>
  
      <NavBar imgUser={logoUser} name="JohanFit"  logoState="logo" dimention="w-12 h-12"/>
      {/* <NavBar avatarUrl="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" name="JohanFit" /> */}
      <CardHeader title="Usuario" />
      <div className="flex justify-between flex-col md:flex-row mx-2">

      </div>
      {/* <hr className="my-2 h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" /> */}
      <main>

        <UsersList modal={modal} jsonData={jsonData} />
        <ModalAddNewUser modal={modal} />
      </main>

      
    </>
  );
}



