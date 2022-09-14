import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import icon from '../../../assets/images/upload.png';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);
    const { displayName, photoURL } = user;
    const navigate = useNavigate();
    const imageStorageKey = 'e768a17919a764104981409d61a9068b';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                const img = result.data.url;
                if (result.success) {
                    const service = {
                        title: data.title,
                        descriptions: data.designation,
                        image: img,
                    }
                    fetch('https://young-coast-42098.herokuapp.com/service', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(service),
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                reset();
                                navigate('/')
                                toast.success('Your Product Add Success full')

                            }
                        })
                }
            })
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div>

            <div className='bg-white lg:flex items-center justify-between py-2 px-12 hidden lg:block'>
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
                                <input type="text" placeholder="Enter Title" class="input input-bordered w-full" {...register("title")} />
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