import React from 'react';
import SEO from '../components/SEO';
import { ABOUT_DATA } from '../constants/siteData';
import './About.css';

const About = () => {
  const renderStandardIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'shield':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
    }
  };

  return (
    <div className="about-page animate-fade-in">
      <SEO 
        title="About Elite Makeover Studio | Premium Unisex Salon Faridabad"
        description="Learn about Elite Makeover Studio, the premier unisex salon in Sector 31 Huda Market, Faridabad. Meet our expert hair stylists, makeup artists, and grooming team."
        keywords="about elite makeover studio, hair stylists faridabad, professional salon team faridabad, unisex salon sector 31, premium beauty products faridabad, elite salon history"
      />
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container text-center">
          <span className="banner-subtitle gold-text">{ABOUT_DATA.bannerSubtitle}</span>
          <h1 className="banner-title">{ABOUT_DATA.bannerTitle}</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="about-details section">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-images">
              <div className="img-wrapper main-img">
                <img 
                  src={ABOUT_DATA.images.main} 
                  alt="Elite Makeover Studio Styling Area" 
                  loading="lazy" 
                />
              </div>
              <div className="img-wrapper sub-img">
                <img 
                  src={ABOUT_DATA.images.sub} 
                  alt="Stylist Hair Cut Session" 
                  loading="lazy" 
                />
              </div>
            </div>
            
            <div className="about-content">
              <span className="section-subtitle gold-text">{ABOUT_DATA.sectionSubtitle}</span>
              <h2 className="section-title">{ABOUT_DATA.sectionTitle}</h2>
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p className="about-text" key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid Section */}
      <section className="about-highlights-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle gold-text">Why Choose Us</span>
            <h2 className="section-title">The Elite Standard</h2>
          </div>
          
          <div className="grid grid-3">
            {ABOUT_DATA.standards.map((std) => (
              <div className="about-card" key={std.id}>
                <div className="card-icon">
                  {renderStandardIcon(std.icon)}
                </div>
                <h3>{std.title}</h3>
                <p>{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
