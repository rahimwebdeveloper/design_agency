import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ServiceList = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }
    const { displayName, photoURL } = user;

    return (
        <div>

            <div className='bg-white flex items-center justify-between py-2 px-12'>
                <h1 className='text-2xl font-bold'> Service List</h1>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl ml-3'>{displayName}</h1>
                </div>
            </div>
            <div className='m-10'>
                
            </div>
            <h1>this is service list </h1>
        </div>
    );
};

export default ServiceList;