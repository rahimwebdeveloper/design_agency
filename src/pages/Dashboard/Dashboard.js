import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png'
import addAdmin from '../../assets/images/addAdmin.svg';
import plus from '../../assets/images/plus.svg';
import list from '../../assets/images/serviceList.svg';
import review from '../../assets/images/review.svg';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  bg-[#F4F7FC] ">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <Link className='flex justify-center mb-10' to="/"> <img height={47} width={150} src={logo} alt="" /></Link>


                    {admin ||
                        <>

                            <li className='mt-2'>

                                <Link to="/dashboard/orderList"> <img src={list} alt="" /> Order List</Link>
                            </li>
                            <li className='mt-2'>

                                <Link to="/dashboard/Review"> <img src={review} alt="" />Review</Link>
                            </li>
                        </>
                    }


                    {admin &&
                        <>
                            <li className=' mt-2'>
                                <Link to="/dashboard/serviceList"> <img src={list} alt="" />Service List</Link>
                            </li>
                            <li className=' mt-2'>
                                <Link to="/dashboard/addService"><img src={plus} alt="" />Add Service </Link>
                            </li>
                            <li className=' mt-2'>
                                <Link to="/dashboard/makeAdmin"><img src={addAdmin} alt="" />Make Admin</Link>
                            </li>
                        </>


                    }


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
