import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png'

const Dashboard = () => {

    const admin = true;




    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side bg-primary">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-primary text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <Link className='flex justify-center mb-10' to="/"> <img height={47} width={150} src={logo} alt="" /></Link>


                    {admin ||
                        <>
                            <li><Link to="/dashboard/order">Order</Link></li>
                            <li><Link to="/dashboard/orderList">Order List</Link></li>
                            <li><Link to="/dashboard/Review">Review</Link></li>
                        </>}


                    {admin &&
                        <> <li><Link to="/dashboard/serviceList">Service List</Link></li>
                            <li><Link to="/dashboard/addService">Add Service </Link></li>
                            <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                        </>


                    }




                </ul>

            </div>
        </div>
    );
};

export default Dashboard;