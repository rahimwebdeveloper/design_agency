import React from 'react';
import { Link } from 'react-router-dom';
import customer1 from '../../assets/images/customer-1.png'
import customer2 from '../../assets/images/customer-2.png'
import customer3 from '../../assets/images/customer-3.png'
import Footer from './Footer';
import Navbar from './Navbar';

const Feedback = ({ home, size }) => {

    const feedback = [
        {
            image: customer1,
            name: 'Nash Patrik',
            position: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        },
        {
            image: customer2,
            name: 'Nash Patrik',
            position: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        },
        {
            image: customer3,
            name: 'Nash Patrik',
            position: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        },
        {
            image: customer2,
            name: 'Nash Patrik',
            position: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        },
        {
            image: customer3,
            name: 'Nash Patrik',
            position: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
        }
    ]
    return (
        <>
            {
                home || <Navbar />
            }
            <div className='mt-20 mx-10 lg:mx-[135px] mb-10'>
                <h1 className='text-center font-bold text-4xl'>Clients <span className='text-accent'>Feedback</span></h1>
                <div className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        feedback.slice(0, size).map(({ image, name, position, review }) =>
                            <div className='lg:w-[335px] lg:h-[212px] p-5 border'>
                                <div className='flex items-center mb-3'>
                                    <div className='mr-3'>
                                        <img className='w-16' src={image} alt="" />
                                    </div>
                                    <div>
                                        <h2>{name}</h2>
                                        <p>{position}</p>
                                    </div>
                                </div>
                                <p>{review}</p>
                            </div>
                        )
                    }
                </div>

                <div>
                    {
                        home && (
                            <div className='bg-primary mt-10  mb-10 p-2 text-center font-bold'>
                                Please Visit the Review sections to. <Link to="/review" className='underline' >See More</Link>
                            </div>
                        )}
                </div>
            </div>
            {
                home || <Footer />
            }
        </>
    );
};

export default Feedback;