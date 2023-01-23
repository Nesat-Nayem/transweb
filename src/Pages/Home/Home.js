import React from 'react';
import Mission from '../../Mission/Mission';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contract from '../Contract/Contract';
import DownloadApps from '../DownloadApps/DownloadApps';
import FAQNewsLetter from '../FAQNewsLetter/FAQNewsLetter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testmonials from '../Testmonials/Testmonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contract></Contract>
            <Blog></Blog>
            <Testmonials></Testmonials>
            <DownloadApps></DownloadApps>
            <FAQNewsLetter></FAQNewsLetter>
     
        </div>
    );
};

export default Home;