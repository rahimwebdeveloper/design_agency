import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const OrderList = () => {

    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([])


    const { displayName, photoURL, email } = user;

    useEffect(() => {
        axios.get(`http://localhost:5000/order?email=${email}`)
            .then(data => {
                console.log(data)
                setOrders(data.data)
            })
    }, [email])

    console.log(orders)

    if (loading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }
    let position = 'done';

    return (
        <div>
            <div className='bg-white flex items-center justify-between py-2 px-12'>
                <h1 className='text-2xl font-bold'>Order List </h1>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl ml-3'>{displayName}</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-20 m-10'>

                {
                    orders.map(({pay, price, icon, details, service, _id, }) =>
                        <div key={_id} className="card shadow-2xl">
                            <div className={`flex ${pay === true ? "justify-between" : "justify-center"} items-center p-5`}>
                                <img className='h-24 w-24' src={icon} alt="logo" />
                                <div className={` ${pay === true ? "block":  "hidden"} `}>

                                    {
                                        position === 'done' ?
                                            <p className='bg-[#C6FFE0] py-3 px-10 font-bold text-[#009444]'>Done</p>
                                            :
                                            <p className='bg-[#FFE3E3] py-3 px-8 font-bold text-[#FF4545]'>Pending</p>
                                    }
                                </div>

                            </div>
                            <div className="card-body pt-0 items-center text-center">
                                <h2 className="card-title">{service}</h2>
                                <h3>Price: ${price}</h3>
                                <p>{details}</p>

                                {pay ||
                                    <div>
                                        <button className='btn btn-sm border-none hover:bg-red-700 mr-2 bg-red-600'>Delete</button>
                                        <button className='btn btn-sm'>Pay Naw</button>
                                    </div>
                                }


                            </div>
                        </div>)
                }

            </div>

        </div>
    );
};

export default OrderList;