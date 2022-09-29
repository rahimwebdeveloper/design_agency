import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const SingUp = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);


    let message;

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        createUserWithEmailAndPassword(email, password)
        await updateProfile({ name })
        event.target.reset();
    }

    if (error || error2) {
        if (error?.message === "Firebase: Error (auth/wrong-password).") {
            message = "User Not Found";
        }
        else if (error?.message === "FirebaseError: Firebase: Error (auth/email-already-in-use).") {
            message = "Email already in use";
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
    }

    if (loading || updating) {
        return <Loading />
    }

    if (user) {
        toast.success("Login SuccessFull")
        navigate("/")
    }




    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin} action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            {
                                message && <p className="text-red-500" >{message},{error.message}</p>
                            }
                            <div className="form-control mt-6">
                                <button type="submit" className="btn">Sign Up</button>
                            </div>
                        </form>
                        <p className="ml-3">Already Have an Place? <Link to="/login_Email" className="text-blue-500">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;