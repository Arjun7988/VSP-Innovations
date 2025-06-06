import React from 'react';
import Banner from '../components/home/Banner';
import Services from '../components/home/Services';
import UseCases from '../components/home/UseCases';
import AIEcosystem from '../components/home/AIEcosystem';
import Portfolio from '../components/home/Portfolio';
import AboutUs from '../components/home/AboutUs';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <UseCases />
      <AIEcosystem />
      <Portfolio />
      <AboutUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;