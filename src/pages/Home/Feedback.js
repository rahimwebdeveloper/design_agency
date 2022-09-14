import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import Footer from './Footer';
import Navbar from './Navbar';

const Feedback = ({ home, size }) => {

    const { data: feedback, isLoading } = useQuery('review', () => fetch('https://young-coast-42098.herokuapp.com/review').then(res => res.json()))

    if (isLoading ) {
      return <Loading />
    }
    return (
        <>
            {
                home || <Navbar />
            }
            <div className='mt-20 mx-10 lg:mx-[135px] mb-10'>
                <h1 className='text-center font-bold text-4xl'>Clients <span className='text-accent'>Feedback</span></h1>
                <div className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        feedback.slice(0, size).map(({ image, name, position, review, _id}) =>
                            <div key={_id} className='lg:w-[335px] lg:h-[212px] p-5 border'>
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