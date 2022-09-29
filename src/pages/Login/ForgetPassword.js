import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const ForgetPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    let errorMessage;
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);




    const onSubmit = async (data) => {
        const { email } = data;
        await sendPasswordResetEmail(email);
        

    };

    if (sending) {
        return <Loading></Loading>
    }

    if (error?.message === 'Firebase: Error (auth/user-not-found).') {
        errorMessage = 'User Not Found'
    }

    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }
                            })} />
                            <label>
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <p className='text-red-500 mt-2 ml-1'>{errorMessage}</p>
                        <input className='btn  mt-3 w-full' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;