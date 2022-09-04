import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import icon from '../../../assets/images/upload.png'
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);
    const { displayName, photoURL } = user;

    const onSubmit = async data => { 
        console.log(data)
    }

    if (loading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }

    return (
        <div>

            <div className='bg-white flex items-center justify-between py-2 px-12'>
                <h1 className='text-2xl font-bold'> Add Service </h1>
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
            <form onSubmit={handleSubmit(onSubmit)} className="w-5/6">

                    <div className='flex bg-white p-5'>
                        <div className='w-6/12'>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text text-base font-bold"> Service Tittle</span>
                                </label>
                                <input type="text"  placeholder="Enter Title" class="input input-bordered w-full" {...register("title")} />
                            </div>
                            <div class="form-control mt-3">
                                <label class="label">
                                    <span class="label-text text-base font-bold">Designation</span>
                                </label>
                                <textarea type="text" placeholder="Enter Designation" class="input input-bordered h-28 w-full" {...register("designation")} />
                            </div>
                        </div>
                        <div className='ml-10'>
                            <label class="label">
                                <span class="label-text text-base font-bold">Icon</span>
                            </label>
                            <div className='btn normal-case bg-[#DEFFED] text-neutral border-0 hover:bg-[#DEFFED] '>
                                <input id='add' type="file" className='hidden' {...register("image")} />
                                <label htmlFor='add' className='flex justify-between'>
                                    <img className='h-6 w-6 mr-2' src={icon} alt="" />
                                    Upload project file
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-end mt-4'>
                        <input className='btn btn-sm w-28 h-10 bg-neutral  text-white normal-case text-base' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;