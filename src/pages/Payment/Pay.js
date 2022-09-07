import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L44DAFgaYc598OmubgAtDM7g7gzf7PY7zl11hA2Xkt2kKrZD6HVUyB6qnP4tiyGKS9BXkIQD8WHY98TgyXY7WwX00cLtk7Rxu');
const Pay = () => {
    const { id } = useParams();

    const { data: order, isLoading } = useQuery('pay', () => fetch(`http://localhost:5000/order/${id}`).then(res => res.json()))

    if (isLoading) {
        return <p> is loading</p>
    }

    const { companyName, service, price, icon } = order;

    return (
        <div className='flex justify-center items-center h-full' >
            <div className="card bg-base-100 shadow-xl ">
                <div className='flex items-center'>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-neutral">{service} </h2>
                        <h2 className='text-xl'>{companyName}</h2>
                        <h1 className='font-semibold'>Pay for : <span className='text-neutral'>${price}</span></h1>
                    </div>
                    <div>
                        <img className='w-24 h-24 mr-5' src={icon} alt="" />
                    </div>
                </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>

        </div>
    );
};

export default Pay;