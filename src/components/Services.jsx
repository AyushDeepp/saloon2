import React from 'react';
import { CONTACT_INFO, SERVICES_SIMPLE } from '../constants/siteData';
import './Services.css';

const Services = () => {
  const servicesList = SERVICES_SIMPLE;

  const getWhatsAppLink = (text) => {
    return `${CONTACT_INFO.whatsAppUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Our Services</span>
          <h2 className="section-title">Professional Salon Services</h2>
          <p className="section-description">Premium hair, skin, makeup, and grooming packages. Click on any service card to book instantly via WhatsApp.</p>
        </div>
        
        <div className="services-icon-grid">
          {servicesList.map((service, index) => (
            <a 
              href={getWhatsAppLink(service.waText)}
              className="service-icon-card"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-icon-img-wrapper">
                <img src={service.img} alt={service.title} loading="lazy" />
              </div>
              <h3 className="service-icon-title">{service.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
