import React, { useState } from 'react';
import SEO from '../components/SEO';
import { CONTACT_INFO, SERVICES_DETAILED } from '../constants/siteData';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('hair');
  const servicesData = SERVICES_DETAILED;

  const getWhatsAppLink = (text) => {
    return `${CONTACT_INFO.whatsAppUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="services-page animate-fade-in">
      <SEO 
        title="Hair, Skin, Makeup & Grooming Services | Elite Makeover Studio"
        description="Explore our menu of professional salon services in Faridabad. From precision haircuts and global hair coloring to HD bridal makeup, facial cleanups, and pedicures."
        keywords="salon services faridabad, bridal makeup packages faridabad, hair coloring faridabad, best facial faridabad, pedicure foot care faridabad, mens grooming faridabad, beauty salon menu sector 31"
      />
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container text-center">
          <span className="banner-subtitle gold-text">FARIDABAD</span>
          <h1 className="banner-title">Our Service Menu</h1>
        </div>
      </div>
      
      {/* Menu List */}
      <section className="services-menu section">
        <div className="container">
          
          {/* Category Tabs */}
          <div className="services-tabs">
            <button 
              className={`tab-btn ${activeTab === 'hair' ? 'active' : ''}`} 
              onClick={() => setActiveTab('hair')}
            >
              Hair Services
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skin' ? 'active' : ''}`} 
              onClick={() => setActiveTab('skin')}
            >
              Skin & Beauty
            </button>
            <button 
              className={`tab-btn ${activeTab === 'makeup' ? 'active' : ''}`} 
              onClick={() => setActiveTab('makeup')}
            >
              Makeup Services
            </button>
            <button 
              className={`tab-btn ${activeTab === 'grooming' ? 'active' : ''}`} 
              onClick={() => setActiveTab('grooming')}
            >
              Grooming & Foot Care
            </button>
          </div>

          {/* Services Grid Content */}
          <div className="services-content">
            <div className="tab-pane active">
              <div className="grid grid-3">
                {servicesData[activeTab].map((service) => (
                  <div className="service-card" key={service.id}>
                    <div className="service-img-wrapper">
                      <img src={service.img} alt={service.title} loading="lazy" />
                      <div className="service-price">{service.price}</div>
                    </div>
                    <div className="service-info">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <a 
                        href={getWhatsAppLink(service.waText)} 
                        className="service-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Book via WhatsApp 
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          style={{ marginLeft: '6px', transition: 'transform 0.3s' }}
                          className="arrow-icon"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
