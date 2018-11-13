import React from 'react';
import Footer from '../shared/Footer';
import Hero from '../LandingPage/HeroSection';
import Body from '../LandingPage/LandingPageBody';
import Explore from '../LandingPage/ExploreSection';

const LandingPageLayout = () => (
  <div>
    <Hero />
    <Body />
    <Explore />
    <Footer />
  </div>
);

export default LandingPageLayout;
