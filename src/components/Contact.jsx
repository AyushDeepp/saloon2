import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Inside Our Studio</span>
          <h2 className="section-title">Experience Elite Makeover</h2>
          <p className="section-description">Take a virtual tour of our premium unisex styling salon and grooming spaces in Faridabad.</p>
        </div>
      </div>

      {/* Video tour section outside of container to enable full viewport width breakout */}
      <div className="video-wrapper full-width-video">
        <video 
          src="/vid.mp4" 
          className="salon-video" 
          controls 
          autoPlay 
          muted 
          loop 
          playsInline
          title="Elite Makeover Studio Video Tour"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Contact;
