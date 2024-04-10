export default function ButtonNewUser({open}) {

  return (
    <div className="">
      <button
        onClick={open}
        type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Nuevo Usuario
      </button>
    </div>
  );
};

