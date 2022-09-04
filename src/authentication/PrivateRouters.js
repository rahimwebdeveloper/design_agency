import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const PrivateRouters = () => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    if(loading){
        return<p> thi loading</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />
}

export default PrivateRouters;