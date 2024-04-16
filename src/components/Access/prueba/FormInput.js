import { useState, React } from "react"
export default function FormInput({
  labelText,
  type,
  name,
  handleChange,
  errorMessage,
  isValid,
  value,
  labelFor,
  id,
  isRequired = false,
  placeholder,

  icon
}) {
  const [showPassword, setShowPassword] = useState(true);
  const inputType = showPassword && type === "password" ? "password" : 'text';
  const tt = () => {
    setShowPassword(!showPassword)

  }
  return (
    <>
      <div class="container max-w-full mx-auto ">
        <div class="font-sans">
          <div class="max-w-sm mx-auto  ">
            <div class="w-full relative">
              <div class="mx-auto max-w-lg">
                <div class="py-2">
                  <input
                    onChange={handleChange}
                    value={value}
                    id={id}
                    name={name}
                    required={isRequired}
                    type={inputType}
                    placeholder={placeholder}
                    class="text-md block px-3 py-2 rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                      focus:placeholder-gray-500
                      focus:bg-white 
                      focus:border-gray-600  
                      focus:outline-none"
                  // class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"

                  />
                </div>
                {showPassword ?
                  <button type="button" onClick={tt}
                    class="absolute top-0 end-0 p-3.5 rounded-e-md">
                    <div class="h-6 text-gray-700" >
                      {icon.icon_A}
                    </div>
                  </button>
                  :
                  <button type="button" onClick={tt}
                    class="absolute top-0 end-0 p-3.5 rounded-e-md">
                    <div class="h-6 text-gray-700" >
                      {icon.icon_B}
                    </div>
                  </button>
                }
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
      {/* <form class="">
       
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {path}

          </div>
          <input type="search"
            onChange={handleChange}
            value={value}
            id={id}
            name={name}

            placeholder="Buscar usuario"
            class="
            rounded-md appearance-none   my-2 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm
            
            text-lg text-gray-600 w-96 rounded-lg 
           py-6 px-4 h-2 border  
          border-gray-600 ps-16 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

        </div>
      </form> */}


      {/* <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass }
        placeholder={placeholder}
      />
    </div> */}
    </>
  )
}