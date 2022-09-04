import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MakeAdmin = () => {
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
                <h1 className='text-2xl font-bold'> Make Admin</h1>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="" />
                        </div>
                    </div>
                    <h1 className='text-2xl ml-3'>{displayName}</h1>
                </div>
            </div>
            <div className='m-10 bg-white p-10'>
                <form  className='flex'>
                    <div class="form-control w-3/6">
                        <label class="label">
                            <span class="label-text text-base font-bold">Email</span>
                        </label>
                        <input type="text" placeholder="jon@gamil.com" class="input input-bordered w-full" />
                    </div>
                    <input className='btn btn-sm my-10 ml-2 w-28 h-10 bg-neutral  text-white normal-case text-base' type="button" value="Submit" />
                </form>

            </div>

        </div>
    );
};

export default MakeAdmin;