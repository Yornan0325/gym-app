const fixedInputClass = "rounded-md appearance-none relative block   px-3 py-2 border border-blue-300 placeholder-blue-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-gradient-500 focus:z-10 sm:text-sm"
// import { Input } from "tailwindcss";
// import Input from "./Input";
// import Select from 'react-select';
export default function SearchBar({ filterValue, handleSearch }) {
  return (
    <>
      {/* <!-- Buscar (primer bloque) --> */}
      <form className="m-2" >
        <input
          className={fixedInputClass}
          type="text"
          placeholder="Buscar Usuario"
          name="search"
          value={filterValue}
          onChange={handleSearch}
        />
      </form>
    </>
  );
};

