import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-primary pt-14 px-[135px]'>
            <div className='flex justify-between	'>
                <div className='w-5/12'>
                    <h1 className='text-4xl mb-3 font-bold' >Let us handle your project, professionally.</h1>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className='w-6/12'>
                    <input type="email" placeholder="Your Email address" class="input w-full rounded-none" />
                    <input type="text" placeholder="Your name / company’s name" class="input w-full mt-4 rounded-none" />
                    <textarea type="text" placeholder="Your message" class="input h-60 w-full mt-4 rounded-none" />
                    <button className='btn normal-case w-40 mt-3 text-white '>Send</button>
                </div>
            </div>
            <p className='text-center mt-14'>copyright Orange labs 2022</p>
        </footer>
    );
};

export default Footer;