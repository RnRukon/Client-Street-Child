import React from 'react';
import Feature1 from '../../Components/Features/Feature1';
import Feature2 from '../../Components/Features/Feature2';
import Banner from '../../Components/Header/Banner/Banner';
import NewsMedia from '../../Components/NewsMedia/NewsMedia';
import Services from '../../Components/Services/Services';
import Footer from '../../Components/Shared/Footer/Footer';

const Home = () => {
    return (
        <div>

            <Banner />
            <Services />
            <Feature1 />
            <Feature2 />
            <NewsMedia />
            
        </div>
    );
};

export default Home;