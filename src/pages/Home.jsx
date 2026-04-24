import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Marquee from '../components/Marquee';
import PromoBanner from '../components/PromoBanner';
import SocialProof from '../components/SocialProof';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <PromoBanner />
      <SocialProof />
    </>
  );
};

export default Home;
