import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionID, setTransactionID] = useState('')


    const { price, companyName, email, _id, service } = order;

    useEffect(() => {
        fetch('http://localhost:5000/create_payment_intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true);

        const { paymentIntent, error: internError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: companyName,
                        email: email,
                    },
                },
            },
        );

        if (internError) {
            setCardError(internError?.message)
            setProcessing(false);
        } else {
            setCardError('')
            setTransactionID(paymentIntent.id)
            setSuccess('Congrats ! your payment is completed')

            // backend update
            const payment= {
                order: _id ,
                name: service,
                transactionID: paymentIntent.id , 

            }
            
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
            .then(data => {
                console.log(data)
                setProcessing(false)
            })

        }

    }


    return (
        <>
            <form className='p-10 ' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-3 btn btn-success btn-sm' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    cardError && <p className='text-red-500 text-center mt-3 '>{cardError}</p>
                }
                {
                    success && <>
                    <p className='text-green-500 text-center mt-3 '>{success}</p>
                    <p>Your Transaction ID <span className='text-orange-500'>{transactionID}</span></p>
                    </>
                }
            </form>

        </>
    );
};

export default CheckoutForm;