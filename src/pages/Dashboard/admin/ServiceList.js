import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Service from './Service';

const ServiceList = () => {
    const [user, loading] = useAuthState(auth);
    const { displayName, photoURL } = user;


    const { data: serviceList, isLoading, refetch } = useQuery('serviceList', () => fetch("http://localhost:5000/orders").then(res => res.json()))


    if (loading || isLoading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }

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
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceList.map( (services, index) => <Service
                                key={services._id}
                                services={services}
                                index={index}
                                refetch={refetch}
                                ></Service>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <h1>this is service list </h1>
        </div>
    );
};

export default ServiceList;