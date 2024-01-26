const fixedInputClass="rounded-md appearance-none relative block   px-3 py-2 border border-blue-300 placeholder-blue-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-gradient-500 focus:z-10 sm:text-sm"
// import { Input } from "tailwindcss";
// import Input from "./Input";

const SearchBar = () => {
  return (
    <>
      {/* <!-- Buscar (primer bloque) --> */}
      <form className="" >
        <input
          type="text"
          placeholder="Buscar usuario"
          name="search"
          className={fixedInputClass}
        />
      </form>
    </>
  );
};

export default SearchBar;