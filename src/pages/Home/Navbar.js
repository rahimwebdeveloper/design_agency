import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Shared/Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user)

    if (loading) {
        return <Loading/>
    }

    const handleLogOut = () => {
        signOut(auth)
        console.log('btn is click')
    }

    return (
        <div className="navbar bg-primary lg:px-[135px]">
            <div className="navbar md:justify-start justify-around">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/review'>Review</Link></li>
                        {admin ||
                            <li><Link to='/dashboard/orderList'>Dashboard</Link></li>
                        }
                        {admin &&
                            <li><Link to='/dashboard/serviceList'>Dashboard</Link></li>
                        }

                        {user ?
                            <li><p onClick={handleLogOut}>Login Out</p></li>
                            :
                            <li><Link to='/Login'>Login</Link></li>
                        }
                    </ul>
                </div>
                <Link to="/"> <img height={47} width={150} src={logo} alt="" /></Link>

            </div>
            <div className="navbar hidden lg:flex justify-end">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/review'>Review</Link></li>
                    {admin ||
                        <li><Link to='/dashboard/orderList'>Dashboard</Link></li>
                    }
                    {admin &&
                        <li><Link to='/dashboard/serviceList'>Dashboard</Link></li>
                    }

                    {user ?
                         <li><p onClick={handleLogOut}>Login Out</p></li>
                        :
                        <li><Link to='/Login'>Login</Link></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;