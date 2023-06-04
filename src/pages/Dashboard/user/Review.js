import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading';

const Review = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }
    const { displayName, photoURL } = user;

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const position = event.target.companyName.value;
        const review = event.target.review.value;

        const feedback = {
            image: photoURL,
            name: name,
            position: position,
            review: review,
        }
        fetch('https://server-side-rahimwebdeveloper.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Review Add Success Full')
                    event.target.reset();
                }
            })


    }


    return (
        <div>
            <div className='bg-white lg:flex items-center justify-between py-2 px-12 hidden lg:block'>
                <h1 className='text-2xl font-bold'> Review </h1>
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
                <form onSubmit={handleSubmit} className='lg:w-3/6 w-5/6'>
                    <input type="text" name='name' placeholder="Your name" className="input mb-3 w-full rounded-none" />
                    <input type="text" name='companyName' placeholder="Company’s name, Designation" className="input mb-3 w-full rounded-none" />

                    <textarea type="text" name='review' placeholder="Description" className="input mb-3 w-full h-28 rounded-none" />

                    <input className='btn btn-sm mt-2 w-2/12 rounded-none normal-case' type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Review;