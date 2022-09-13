import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Review = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }
    const { displayName, photoURL } = user;

    return (
        <div>
            <div className='bg-white lg:flex items-center justify-between py-2 px-12 hidden lg:block'>
                <h1 className='text-2xl font-bold'> Review </h1>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl ml-3'>{displayName}</h1>
                </div>
            </div>

            <div className='p-10'>
                <form className='lg:w-3/6 w-5/6'>
                    <input type="text" placeholder="Your name" className="input mb-3 w-full rounded-none" />
                    <input type="text" placeholder="Company’s name, Designation" className="input mb-3 w-full rounded-none" />
                   
                    <textarea type="text" placeholder="Description" className="input mb-3 w-full h-28 rounded-none" />
                   
                    <input className='btn btn-sm mt-2 w-2/12 rounded-none normal-case' type="button" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Review;