import React from 'react';
import carousel1 from '../../assets/images/carousel-1.png'
import carousel2 from '../../assets/images/carousel-2.png'
import carousel3 from '../../assets/images/carousel-3.png'
import carousel4 from '../../assets/images/carousel-4.png'

const profile = () => {
    return (
        <div className='bg-secondary py-12 mt-24 px-[135px]'>
            <h1 className='text-center mb-10 text-4xl text-white font-semibold	'>Here are some of <span className='text-accent'>our works</span></h1>
            <div className='grid grid-cols-4 gap-5'>
                <img className='w-[350px] h-[250px]' src={carousel1} alt="" />
                <img className='w-[350px] h-[250px]' src={carousel2} alt="" />
                <img className='w-[350px] h-[250px]' src={carousel3} alt="" />
                <img className='w-[350px] h-[250px]' src={carousel4} alt="" />
            </div>
        </div>
    );
};

export default profile;