import Header from "../components/Access/Header";
// import Signup from "../components/Access/Signup";
import image from "../image/logo1.PNG"
import useFormSignUp from "../components/CustomHook/useFormSignUp";
import { signupFormText } from "../components/Access/formConfig"


export default function SignUpPage() {
    const { renderFormInputs, isFormValid } = useFormSignUp(signupFormText);


    return (
        <>

            <div class=" max-w-lg p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
                {/* <div className="flex space-y-20"> */}
                    <div class="  absolute inset-0    overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center shadow-none">
                        <div class="absolute inset-0 w-full h-full bg-black from-black/80 via-black/50 opacity-50"></div>
                        <img
                            alt=""
                            className="my-8 mx-4 h-24 w-24 inline-block  rounded-full border-2 border-white  object-center  p-1 ring-gray-300 dark:ring-gray-500"

                            src={image}

                        />
                    </div>

                    <div class="relative md:px-12">

                        <Header
                            heading="Crea una cuenta"
                            paragraph="Ya tienes una cuenta?"
                            linkName="Inicia sesion"
                            linkUrl="/"
                        />
                        <form className="signupForm">
                            {renderFormInputs()}
                        </form>
                        {isFormValid() ?
                            <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                                disabled={!isFormValid()}>
                                Enviar
                            </button> : <h1 class="mb-12 block text-base font-sm text-red-700">Por favor completa todos los campos</h1>
                        }
                        {/* <Signup /> */}
                    </div>
                    </div>
                {/* </div> */}
            </>
            )
}