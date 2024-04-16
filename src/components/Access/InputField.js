const fixedInputClass = "rounded-md   w-full  placeholder-gray-500   focus:ring-purple-500 focus:border-purple-500"
const t = "pl-12 pr-4 py-2 border "

// import "./Input.css";

export default function InputField(props) {
    const {
        label, type,
        name, placeholders,
        handleChange, errorMessage,
        isValid, value, customClass,icon
    } = props;

    return (
        <div className="my-4">
            <label htmlFor={label} class=" text-left mb-2 block text-base font-medium text-white">
                {label}
            </label>
            <div class="relative">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholders}
                    value={value}
                    onChange={handleChange}
                    class={t+fixedInputClass+customClass}
                // className={fixedInputClass + customClass}
                />
                <div class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none">
                    {/* <svg class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
                        </path>
                    </svg> */}
                    {icon}
                </div>
            </div>
            {errorMessage && !isValid && (
                <div role="alert" class="mt-2 relative block w-full px-2 py-2 text-base text-white bg-gray-900 rounded-lg font-regular"
                >
                    <div class="mr-12 ">{errorMessage}</div>
                </div>
                // <span class=" text-left mb-2 block text-base font-medium text-white">{errorMessage}</span>
            )}
        </div>
    );
}
