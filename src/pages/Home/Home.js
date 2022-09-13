import React from 'react';
import Services from './Services';
import TopBanner from './TopBanner';
import Profile from './Profile';
import Feedback from './Feedback';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {

    return (
        <>
            <Navbar />
            <TopBanner />
            <Services home={true} size={3}  />
            <Profile />
            <Feedback home={true} size={3} />
            <Footer />

        </>
    );
};

export default Home;