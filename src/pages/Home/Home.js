import React from 'react';
import Services from './Services';
import TopBanner from './TopBanner';
import Profile from './Profile';
import Feedback from './Feedback';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <TopBanner />
            <Services />
            <Profile />
            <Feedback />
            <Footer />

        </div>
    );
};

export default Home;