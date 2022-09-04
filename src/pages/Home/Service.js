import React from 'react';

const Service = ({ service }) => {
    const { title, image, descriptions, boxShadow} = service;


    return (
        <div className={`card  ${boxShadow} `}>
            <figure>
                <img className='h-24 w-24' src={image} alt="logo" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{descriptions}</p>
            </div>
        </div>
    );
};

export default Service;