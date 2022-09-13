import React from 'react';
import frame from '../../assets/images/logos/Frame.png'
import airbnb from '../../assets/images/logos/airbnb.png';
import google from '../../assets/images/logos/google.png';
import netflix from '../../assets/images/logos/netflix.png';
import slack from '../../assets/images/logos/slack.png';
import uber from '../../assets/images/logos/uber.png';


const TopBanner = () => {
    const logos = [
        slack,
        google,
        uber,
        netflix,
        airbnb,
    ]
    return (
        <section className='pb-5'>
            <div className='bg-primary pt-5 px-10 lg:px-[135px] flex items-center flex-col lg:flex-row-reverse lg:pb-5  '
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 100%)"
                }}
            >
                <div className='mb-10'>
                    <img className='lg:w-[1300px] lg:h-[422px]' src={frame} alt="" />
                </div>

                <div className='lg:mr-[100px] mb-5'>
                    <h1 className='text-5xl leading-tight mb-2 font-bold'>Let’s Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                    <button className='btn mt-3 normal-case rounded'>Hire us</button>
                </div>

            </div>
            <div className='grid grid-cols-3 lg:grid-cols-5 lg:gap-20 gap-5 mx-10 lg:mx-44 mt-16'>
                {
                    logos.map(l => <img key={l} className='h-[56px]' src={l} alt=''></img>)
                }
            </div>
        </section >
    );
};

export default TopBanner;