import { Link } from 'react-router-dom';

export default function useRouteDestination(linkName, icon ) {
    // const navigate = useNavigate();
    return {
        LinkComponent: <Link to={linkName} >{icon}</Link>
    }
         
    
}