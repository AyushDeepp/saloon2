import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
