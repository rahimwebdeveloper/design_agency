import React from 'react';
import { toast } from 'react-toastify';

const Footer = () => {

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        toast.success("Your message Send")
    }
    return (
        <footer className='bg-primary pt-14  lg:px-[135px]'>
            <div className='lg:flex justify-between'>
                <div className='lg:w-5/12 w-5/6 mx-auto mb-10'>
                    <h1 className='text-4xl mb-3 font-bold' >Let us handle your project, professionally.</h1>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className='lg:w-6/12 w-5/6 mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Your Email address" className="input w-full rounded-none"  required/>
                        <input type="text" placeholder="Your name / company’s name" className="input w-full mt-4 rounded-none"  required/>
                        <textarea type="text" placeholder="Your message" className="input h-60 w-full mt-4 rounded-none" required/>
                        <input className='btn normal-case w-40 mt-3 text-white' type="submit" value="Send"  />
                    </form>
                </div>
            </div>
            <p className='text-center mt-14'>copyright Orange labs 2022</p>
        </footer>
    );
};

export default Footer;