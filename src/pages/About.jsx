import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container text-center">
          <span className="banner-subtitle gold-text">FARIDABAD</span>
          <h1 className="banner-title">About Our Studio</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="about-details section">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-images">
              <div className="img-wrapper main-img">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" 
                  alt="Elite Makeover Studio Styling Area" 
                  loading="lazy" 
                />
              </div>
              <div className="img-wrapper sub-img">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                  alt="Stylist Hair Cut Session" 
                  loading="lazy" 
                />
              </div>
            </div>
            
            <div className="about-content">
              <span className="section-subtitle gold-text">Welcome</span>
              <h2 className="section-title">About Elite Makeover Studio</h2>
              <p className="about-text">Welcome to Elite Makeover Studio, your destination for professional beauty, grooming, and makeover services in Faridabad. We offer personalized salon experiences for both men and women with a focus on quality, style, and customer satisfaction.</p>
              <p className="about-text">Whether you're looking for a fresh haircut, hair coloring, skincare treatments, makeup services, or grooming solutions, our experienced team is here to help you look and feel your best.</p>
              <p className="about-text">Our state-of-the-art unisex salon in Huda Market is structured to provide comfortable and hygienic environments. We pair personalized consultations with premium brands to secure style options aligned with your needs.</p>
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
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3>Premium Products</h3>
              <p>We work exclusively with premium cosmetic and hair labels, ensuring safe and luxury applications for all skin and hair types.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Experienced unisex Team</h3>
              <p>Our stylists specialize in both men's and women's styling profiles, blending classic cuts with modern styling techniques.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3>Hygienic Environment</h3>
              <p>Your safety is our priority. We enforce rigid sterilization measures across all stations and use single-use disposables where possible.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
