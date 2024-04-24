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
            <label htmlFor={label} className=" text-left mb-2 block text-base font-medium text-white">
                {label}
            </label>
            <div className="relative">
                <input
                id={label}
                    type={type}
                    name={name}
                    placeholder={placeholders}
                    value={value}
                    onChange={handleChange}
                    className={t+fixedInputClass+customClass}
                // className={fixedInputClass + customClass}
                />
                <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none">
                    
                    {icon}
                </div>
            </div>
            {errorMessage && !isValid && (
                <div role="alert" className="mt-2 relative block w-full px-2 py-2 text-base text-white bg-gray-900 rounded-lg font-regular"
                >
                    <div className="mr-12 ">{errorMessage}</div>
                </div>
                // <span className=" text-left mb-2 block text-base font-medium text-white">{errorMessage}</span>
            )}
        </div>
    );
}
