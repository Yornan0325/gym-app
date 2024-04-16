import Header from "../components/Access/Header"
import Login from "../components/Access/Login"
import Avatar from "../components/Avatar/Avatar"



export default function LoginPage() {
    return (
        <>
            <div class=" max-w-lg px-4 mx-auto mt-2 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
                <div className="max-w-md w-full lg:space-y-16 space-y-32">
                    <div class="absolute bg-cover bg-clip-border bg-center shadow-none inset-0 m-0 h-full w-full object-cover z-0 overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                        <div class="absolute inset-0 w-full h-full bg-black from-black/80 via-black/50 opacity-60"></div>
                        <div className="flex items-center justify-center  w-28 h-28 my-8 mx-4 w-24  h-24 inline-block  rounded-full border-2 border-white  object-center    ">
                            <div className="w-24 h-24 rounded-full overflow-hidden relative items-center justify-center  bg-white">
                                <Avatar name={""} dimention={"w-24 h-24 "} />
                            </div>
                        </div>
                    </div>
                    <div class="relative md:px-4">
                        <Header
                            heading="Ingrese a su cuenta"
                            paragraph="Aún no tienes una cuenta?"
                            linkName="Registrate"
                            linkUrl="/signup"
                        />
                        <div class="relative p-10 z-10">
                            <Login />
                        </div>

                    </div>


                    {/* </div> */}
                </div>

            </div>
        </>
    )
}