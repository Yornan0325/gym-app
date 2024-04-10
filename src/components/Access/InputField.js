const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"


// import "./Input.css";

export default function InputField(props) {
    const {
        label,
        type,
        name,
        placeholders,
        handleChange,
        errorMessage,
        isValid,
       
        value,
        customClass
    } = props;
//  console.log("placeholders",placeholders)
    return (
        <div className="my-4">
            <label  htmlFor={label} class=" text-left mb-2 block text-base font-medium text-white">
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholders}
                value={value}
                onChange={handleChange}
                className={fixedInputClass + customClass}
            />
            {errorMessage && !isValid && (
                <div role="alert" class="relative block w-full px-4 py-4 text-base text-white bg-gray-900 rounded-lg font-regular"
                 >
                <div class="mr-12 ">{errorMessage}</div>
              </div>
                // <span class=" text-left mb-2 block text-base font-medium text-white">{errorMessage}</span>
            )}
        </div>
    );
}
