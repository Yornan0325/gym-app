import Header from "../components/Access/Header"
import Login from "../components/Access/Login"


export default function LoginPage() {
    return (
        <>
            <div class="max-w-lg p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
                <div className="max-w-md w-full space-y-8">
                    <div class="grid h-[auto] w-full max-w-[auto] flex-col items-end overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                        <div class="absolute bg-cover bg-clip-border bg-center shadow-none inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                            <div class="absolute inset-0 w-full h-full bg-black from-black/80 via-black/50 opacity-60"></div>

                        </div>

                        <div class="relative md:px-12">
                            <Header
                                heading="Ingrese a su cuenta"
                                paragraph="Aún no tienes una cuenta?"
                                linkName="Registrate"
                                linkUrl="/signup"
                            />
                            
                                <Login />
                            
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}