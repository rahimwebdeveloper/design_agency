import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import icon from '../../../assets/images/upload.png'
import { useForm } from 'react-hook-form';

const Order = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const imageStorageKey = '599226558ac2fbf78c1da0a2dcb07de3';

    if (loading) {
        return <div>
            <h1>this loading</h1>
        </div>
    }
    const { displayName, photoURL } = user;

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
                const img = result.data.url ;

                if(result.success){
                    const order = {
                        companyName: data.name ,
                        email : data.email ,
                        service : data.service,
                        details : data.details ,
                        price : data.price ,
                        img : img ,
                    }
                    
                    
                }
            })

    };




    return (
        <div>

            <div className='bg-white flex items-center justify-between py-2 px-12'>
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

                    <input type="text" placeholder="Your name / company’s name" className="input mb-3 w-full text-sm font-bold rounded-none" {...register("name")} required />
                    <input type="email" placeholder="Your email address" className="input mb-3 w-full text-sm font-bold rounded-none" {...register("email")} required />
                    <select class=" select w-full font-bold rounded-none mb-3" {...register("service")}>
                        <option selected>Graphic Design</option>
                        <option>Web development</option>
                        <option>Web & Mobile design</option>
                    </select>

                    <textarea type="text" placeholder="Project Details" className="input mb-3 w-full h-28 text-sm font-bold rounded-none" {...register("details")} required />
                    <div className='flex justify-between'>

                        <input type="number" placeholder="Your Price" className="input mb-3 rounded-none w-[49%]" {...register("price")} required />

                        <div className='btn normal-case text-sm font-bold bg-[#DEFFED] text-[#009444] border-0 hover:bg-[#DEFFED] w-[49%]  '>
                            <input id='file' type="file" className='hidden' {...register("image")} />
                            <label htmlFor='file' className='flex justify-between'>
                                <img className='h-6 w-6 mr-2' src={icon} alt="" />
                                Upload project file
                            </label>
                        </div>
                    </div>

                    <input className='btn btn-sm mt-2 w-2/12 rounded-none normal-case' type="submit" value="Send" />

                </form>

            </div >
        </div >
    );
};

export default Order;