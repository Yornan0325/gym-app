import { Link } from 'react-router-dom';
// import IconLogin from "../Icon/Iconlogin"
import image from "../../image/logo1.PNG"
export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-8 ">
            <div className="flex justify-start mb-28 ">
                <img
                    alt=""
                    className="mr-4 h-24 w-24 inline-block  rounded-full border-2 border-white  object-center  p-1 ring-gray-300 dark:ring-gray-500"

                    src={image}

                />
             
               
            </div>
            
            <h2 class="text-center text-white text-3xl font-extrabold  block font-sans  antialiased font-semibold leading-snug tracking-normal">
                {heading}
            </h2>

            <p className="mt-4 text-center text-sm text-white ">
                {paragraph} {' '}
                <Link to={linkUrl} className="ml-2 font-medium text-purple-500 hover:text-purple-900">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}