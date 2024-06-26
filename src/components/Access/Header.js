import { Link } from 'react-router-dom';
// import IconLogin from "../Icon/Iconlogin"

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-4 ">
           

            <h2 className="text-center text-white text-3xl font-extrabold  block font-sans  antialiased font-semibold leading-snug tracking-normal">
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