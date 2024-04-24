import Header from "../components/Access/Header";
// import Signup from "../components/Access/Signup";
// import image from "../image/logo1.PNG"
import Avatar from "../components/Avatar/Avatar";
import useFormSignUp from "../components/CustomHook/useFormSignUp";
import { signupFormText } from "../components/Access/formConfig";

export default function SignUpPage() {
  const { renderFormInputs, isFormValid } = useFormSignUp(signupFormText);

  return (
    <>
      <div className=" max-w-lg px-4 mx-auto bg-gray-200 ">
        <div className="max-w-md w-full  lg:space-y-8  space-y-32   ">
          {/* <div className=" max-w-lg p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100"> */}

          <div className="absolute bg-cover bg-clip-border bg-center shadow-none inset-0 m-0 h-auto w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="absolute object-cover z-0 inset-0 w-full h-auto bg-black from-black/80 via-black/50 opacity-60"></div>
            <div className="flex items-center justify-center  w-28 h-28 my-8 mx-4 w-24  h-24 inline-block  rounded-full border-2 border-white  object-center    ">
              <div className="w-24 h-24 rounded-full overflow-hidden relative items-center justify-center  bg-white">
                <Avatar name={""} dimention={"w-24 h-24 "} />
              </div>
            </div>
          </div>

          <div className="relative ">
            <Header
              heading="Crea una cuenta"
              paragraph="Ya tienes una cuenta?"
              linkName="Inicia sesion"
              linkUrl="/"
            />

            <form>
              {renderFormInputs()}

              {isFormValid() ? (
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                  disabled={!isFormValid()}
                >
                  Enviar
                </button>
              ) : (
                <h1 className="mb-12 block text-base font-sm text-red-700 mt-2 relative block w-full px-2 py-2 text-center text-base text-red-700 bg-gray-900 rounded-lg font-regular">
                  Por favor completa todos los campos
                </h1>
              )}
            </form>

            {/* <Signup /> */}
          </div>
        </div>
      </div>
    </>
  );
}
