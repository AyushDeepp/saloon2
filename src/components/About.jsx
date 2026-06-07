import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
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
                alt="Hair Styling Session" 
                loading="lazy" 
              />
            </div>
          </div>
          <div className="about-content">
            <span className="section-subtitle gold-text">About Us</span>
            <h2 className="section-title">Welcome to Elite Makeover Studio</h2>
            <p className="about-text">Welcome to Elite Makeover Studio, your destination for professional beauty, grooming, and makeover services in Faridabad. We offer personalized salon experiences for both men and women with a focus on quality, style, and customer satisfaction.</p>
            <p className="about-text">Whether you're looking for a fresh haircut, hair coloring, skincare treatments, makeup services, or grooming solutions, our experienced team is here to help you look and feel your best.</p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className="highlight-info">
                  <h3>Unisex Salon</h3>
                  <p>Tailored layouts and services for both men and women.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="highlight-info">
                  <h3>Professional Team</h3>
                  <p>Our experienced professionals follow modern styling techniques.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="highlight-info">
                  <h3>Premium Products & Consultation</h3>
                  <p>Enjoy customized treatments backed by high-quality products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
