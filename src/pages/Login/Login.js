import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';
import google from '../../assets/images/google.png';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Loading from '../../Shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading ) {
        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className='w-[450px] h-[400px]'>
                <Link className='flex justify-center mb-10' to="/"> <img height={47} width={150} src={logo} alt="" /></Link>
                <div className='border-4 rounded-md py-20 px-14'>
                    <h1 className='text-center text-2xl font-bold mb-5'>Login With</h1>

                    <div onClick={() => signInWithGoogle()} className='cursor-pointer hover:bg-yellow-300  flex items-center justify-center border-2 rounded-2xl p-1'>
                        <img width={31} height={31} src={google} alt="" />
                        <p className='text-center ml-6'>Continue With Google</p>
                    </div>

                    <p className='text-center mt-3'>You can Login with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;