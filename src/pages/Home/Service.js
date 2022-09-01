import React from 'react';

const Service = ({ text, title, img, boxShadow }) => {
    return (
        <div className={`card   ${boxShadow}`}>
            <figure>
                <img className='h-24 w-24' src={img} alt="logo" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Service;