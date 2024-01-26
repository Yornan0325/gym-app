
import React from "react";
import CardHeader from "../components/Usuarios/CardHeader"
import SearchBar from "../components/Usuarios/SearchBar"
import Buttons from "../components/Usuarios/Buttons";
import Card from "../components/Usuarios/Card"
import NavBar from "./Navbar/Nav";

// import Buttons from "../components/Usuarios/Buttons"
// import SearchBar from "../components/Usuarios/SearchBar"
// import UserInfo from "../components/Usuarios/UserInfo"

export default function HomePage() {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavBar />
      <CardHeader />
      <div class=" flex justify-between items-center mx-2 content-center p-2 ">
        <SearchBar />
        <Buttons />
      </div>
      <hr class="my-2 h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" />
      <Card />
      {/* <main className="flex justify-center">
            <section className="w-1/2">
              <SearchBar />
            </section>
            <section className="w-1/2">
              <UserInfo />
            </section>
          </main> */}

      {/* <footer className="text-center">
            <Buttons />
          </footer> */}



      {/* <div class="tracking-tighter absolute w-274 h-50 left-75 top-112 font-inter font-semibold text-54 leading-50 flex items-center capitalize text-dark">
        Usuarios
      </div> */}
    </>
  );
}



