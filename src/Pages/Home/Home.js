import React from 'react';
import Feature1 from '../../Components/Features/Feature1';
import Feature2 from '../../Components/Features/Feature2';
import Banner from '../../Components/Header/Banner/Banner';
import NewsMedia from '../../Components/NewsMedia/NewsMedia';
import Services from '../../Components/Services/Services';

import Navigation from '../../Components/Shared/Navigation/Navigation';
import Footer from '../../Components/Shared/Footer/Footer';
import HomePageDeliveredChild from '../../Components/HomePageChild/HomePageDeliveredChild';
import HomePageChild from '../../Components/HomePageChild/HomePageChild'; 

const Home = () => {
    return (
        <div>
            <div className='fixed w-full z-50'>
                <Navigation />
            </div>
            <Banner />
            <Services />
            <HomePageDeliveredChild />
            <HomePageChild/>
            <Feature1 />
            <Feature2 />
            <NewsMedia />
            <Footer />
        </div>
    );
};

export default Home;