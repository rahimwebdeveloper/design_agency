import React from 'react';
import Services from './Services';
import TopBanner from './TopBanner';
import Profile from './Profile';
import Feedback from './Feedback';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Services />
            <Profile />
            <Feedback />
            <Footer />

        </div>
    );
};

export default Home;