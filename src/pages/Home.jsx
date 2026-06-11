import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import InstagramFeed from '../components/InstagramFeed';
import Reviews from '../components/Reviews';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <SEO 
        title="Best Unisex Salon in Faridabad | Elite Makeover Studio"
        description="Elite Makeover Studio is the premier unisex salon in Faridabad (Sector 31). We offer professional hair styling, HD makeup, skin treatments, bridal packages, and grooming for men & women."
        keywords="best unisex salon in faridabad, beauty parlour faridabad, hair styling faridabad, makeup artist faridabad, elite makeover studio, sector 31 faridabad salon, premium hair cut faridabad"
      />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <InstagramFeed />
      <Reviews />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
