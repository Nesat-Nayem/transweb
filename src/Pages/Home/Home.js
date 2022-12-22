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
                  <body
        id="body"
        class="home page-template page-template-page-templates page-template-full-width page-template-page-templatesfull-width-php page page-id-305 wp-custom-logo theme-mover woocommerce-no-js singular no-sidebar meta-icons-hidden container-1170 meta-icons-main woo header-sticky animation-enabled title-hidden elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-305"

      >
         
            <Banner></Banner>
            <div
            data-elementor-type="wp-page"
            data-elementor-id="305"
            class="elementor elementor-305"
          >
            <div class="elementor-inner">
              <div class="elementor-section-wrap">
            <Services></Services>
            <About></About>
            <Contract></Contract>
            <Blog></Blog>
            <Testmonials></Testmonials>
            <DownloadApps></DownloadApps>
            <Mission></Mission>
            <FAQNewsLetter></FAQNewsLetter>
            </div>
            </div>
            </div>
          
            </body>
        </div>
    );
};

export default Home;