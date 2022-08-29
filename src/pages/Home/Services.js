import React from 'react';
import service1 from '../../assets/images/icons/service1.png'
import service2 from '../../assets/images/icons/service2.png'
import service3 from '../../assets/images/icons/service3.png'
import Service from './Service';

const Services = () => {

    return (
        <div className='mt-52 mx-[135px]'>
            <h1 className='text-4xl font-bold text-center'>Provide awesome <span className='text-accent'>services</span></h1>

            <div className='grid lg:grid-cols-3 gap-20 mt-20'>

                <Service title="Web & Mobile design" text="We craft stunning and amazing web UI, using a well drrafted UX to fit your product." img={service1} ></Service>

                <Service boxShadow="shadow-2xl" title="Graphic design" text="Amazing flyers, social media posts and brand representations that would make your brand stand out." img={service2} ></Service>

                <Service title="Web development" text="With well written codes, we build amazing apps for all platforms, mobile and web apps in general." img={service3} ></Service>
            </div>

        </div>
    );
};

export default Services;