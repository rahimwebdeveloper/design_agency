import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import Loading from '../Shared/Loading';

const AdminRouters = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <p><Loading/></p>
    }

    if (!user || !admin) {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }

    return <Outlet />
};

export default AdminRouters;