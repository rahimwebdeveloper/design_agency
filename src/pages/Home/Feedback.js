import React from 'react';
import customer1 from '../../assets/images/customer-1.png'
import customer2 from '../../assets/images/customer-2.png'
import customer3 from '../../assets/images/customer-3.png'

const Feedback = () => {
    return (
        <div className='mt-20 lg:mx-[135px] mb-20'>
            <h1 className='text-center font-bold text-4xl'>Clients <span className='text-accent'>Feedback</span></h1>
            <div className='mt-24 grid grid-cols-3 gap-10'>

                <div className='w-[350px] h-[212px] p-5 border'>
                    <div className='flex items-center mb-3'>
                        <div className='mr-3'>
                            <img className='w-16' src={customer1} alt="" />
                        </div>
                        <div>
                            <h2>Nash Patrik</h2>
                            <p>CEO, Manpol</p>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                </div>
                {/* customer2 */}
                <div className='w-[350px] h-[212px] p-5 border'>
                    <div className='flex items-center mb-3'>
                        <div className='mr-3'>
                            <img className='w-16' src={customer2} alt="" />
                        </div>
                        <div>
                            <h2>Miriam Barron</h2>
                            <p>CEO, Manpol</p>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                </div>
                {/* customer3 */}
                <div className='w-[350px] h-[212px] p-5 border'>
                    <div className='flex items-center mb-3'>
                        <div className='mr-3'>
                            <img className='w-16' src={customer3} alt="" />
                        </div>
                        <div>
                            <h2>Bria Malone</h2>
                            <p>CEO, Manpol</p>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;