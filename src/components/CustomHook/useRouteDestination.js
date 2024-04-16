import { Link } from 'react-router-dom';

export default function useRouteDestination(to, children,icon ) {
    // const navigate = useNavigate();
    return {
        LinkComponent: <Link to={to} children={children}/>
    }
         
    
}