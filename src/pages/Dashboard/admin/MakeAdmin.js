import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading';

const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const { displayName, photoURL } = user;
    const emailRef = useRef('');

    const handleSubmit = () => {

        const email = emailRef.current.value;

        const admin = {
            email,
        }

        fetch('https://young-coast-42098.herokuapp.com/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(admin),

        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Admin Success Full')
                }
                else{
                    toast.error(data?.message)
                }
            })


    }

    if (loading) {
        return <Loading />
    }

    return (
        <div>

            <div className='bg-white lg:flex items-center justify-between py-2 px-12 hidden lg:block'>
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
                <form className='flex'>
                    <div class="form-control w-3/6">
                        <label class="label">
                            <span class="label-text text-base font-bold">Email</span>
                        </label>
                        <input ref={emailRef} type="email" placeholder="jon@gamil.com" class="input input-bordered w-full" />
                    </div>
                    <input onClick={handleSubmit} className='btn btn-sm my-10 ml-2 w-28 h-10 bg-neutral  text-white normal-case text-base' type="button" value="Submit" />
                </form>

            </div>

        </div>
    );
};

export default MakeAdmin;