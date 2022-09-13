import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { title, image, descriptions, boxShadow, _id} = service;

    const buyNaw = id => {
        navigate(`/dashboard/order/${id}`)
    }

    return (
        <div className={`card  ${boxShadow} `}>
            <figure>
                <img className='h-24 w-24' src={image} alt="logo" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{descriptions}</p>
                <button onClick={() => buyNaw(_id)} className='btn btn-sm'>Buy Now</button>
            </div>
        </div>
    );
};

export default Service;