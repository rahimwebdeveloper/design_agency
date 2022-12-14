import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const LoginPass = () => {
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)

    let message;
    const handleLogin = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        event.target.reset();

    }

    if (error) {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
            message = "User Not Found";
        }
        // else if(error.message === "Firebase: Error (auth/wrong-password)."){
        //     message = "Password Not Match" ;
        // }
        // else if(error.message === "Firebase: Error (auth/wrong-password)."){
        //     message = "Password Not Match" ;
        // }
        // else if(error.message === "Firebase: Error (auth/wrong-password)."){
        //     message = "Password Not Match" ;
        // }
        // else if(error.message === "Firebase: Error (auth/wrong-password)."){
        //     message = "Password Not Match" ;
        // }
        // else if(error.message === "Firebase: Error (auth/wrong-password)."){
        //     message = "Password Not Match" ;
        // }
    }

    if (loading) {
        <Loading />
    }

    if (user) {
        if (user?.user) {
            toast.success('Login Success Full')
            navigate("/")
        }
    }






    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin} action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/forget_password" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            {
                                message && <p className="text-red-500" >{message},{error.message}</p>
                            }
                            <div className="form-control mt-6">
                                <button type="submit" className="btn">Login</button>
                            </div>
                        </form>
                        <p className="ml-2">Create New Account? <Link to="/singUp" className="text-blue-500">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPass;