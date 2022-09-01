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
            <div className='bg-primary pt-5 px-[135px] flex items-center pb-5' 
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 100%)"
            }}
             >
                <div className='lg:mr-[100px]'>
                    <h1 className='text-5xl leading-tight mb-2 font-bold'>Let’s Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                    <button className='btn mt-3 normal-case rounded'>Hire us</button>
                </div>
                <div>
                    <img className='w-[1300px] h-[422px]' src={frame} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-5 gap-20 lg:mx-44 mt-16'>
                {
                    logos.map(l => <img className='h-[56px]' src={l} alt=''></img>)
                }
            </div>
        </section >
    );
};

export default TopBanner;