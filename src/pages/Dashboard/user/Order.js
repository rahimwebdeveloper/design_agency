import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import icon from '../../../assets/images/upload.png';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading';

const Order = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '599226558ac2fbf78c1da0a2dcb07de3';

    const { displayName, photoURL, email } = user;

    const { data: service, isLoading } = useQuery('service',
        () => fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json()))

    if (isLoading) {
        return < Loading />
    }


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
                    const order = {
                        companyName: data.name,
                        email: email,
                        icon: service.image,
                        service: service.title,
                        details: data.details,
                        price: data.price,
                        img: img,
                    }
                    fetch('http://localhost:5000/order', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(order),
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.acknowledged) {
                                reset();
                                toast.success('Your Order Send Successfully. Pay Now ')
                                navigate("/dashboard/orderList")
                            }

                        })
                }
            })

    };

    console.log(service)

    if (loading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }


    return (
        <div>

            <div className='bg-white lg:flex items-center justify-between py-2 px-12 hidden lg:block'>
                <h1 className='text-2xl font-bold'> Order</h1>
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

                <form onSubmit={handleSubmit(onSubmit)} className="w-3/6">

                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Your name / company’s name"
                            className="input mb-3 w-full text-sm font-bold rounded-none"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    <input
                        type="email"
                        disabled
                        value={email}
                        className="input mb-3 w-full text-sm font-bold rounded-none"
                    />
                    <input
                        type="service"
                        disabled
                        value={service?.title}
                        className="input mb-3 w-full text-sm font-bold rounded-none"
                    />




                    <div className="form-control w-full">
                        <textarea
                            type="text"
                            placeholder="Project Details"
                            className="input w-full h-28  text-sm font-bold rounded-none"
                            {...register("details", {
                                required: {
                                    value: true,
                                    message: 'Project Details is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                        </label>
                    </div>


                    <div className='flex justify-between'>

                        <div className="form-control  w-[49%]">
                            <input
                                type="number"
                                placeholder="Your Price"
                                className="input mb-3 rounded-none"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Project Details is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>


                        <div className='btn normal-case text-sm font-bold bg-[#DEFFED] text-[#009444] border-0 hover:bg-[#DEFFED] w-[49%]  '>
                            <input id='file' type="file" className='hidden' {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })} />
                            <label htmlFor='file' className='flex justify-between'>
                                <img className='h-6 w-6 mr-2' src={icon} alt="" />
                                Upload project file
                            </label>
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                    </div>

                    <input className='btn btn-sm w-2/12 rounded-none normal-case' type="submit" value="Send" />

                </form>

            </div >
        </div >
    );
};

export default Order;