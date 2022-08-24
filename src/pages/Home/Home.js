import React from 'react';
import Services from './Services';
import TopBanner from './TopBanner';
import Profile from './Profile';

const Home = () => {
    return (
        <div className='mb-20'>
            <TopBanner ></TopBanner>
            <Services></Services>
            <Profile></Profile>

        </div >
    );
};

export default Home;