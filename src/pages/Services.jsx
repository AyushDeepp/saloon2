import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('hair');

  const servicesData = {
    hair: [
      {
        id: 'h1',
        title: 'Cut & Style',
        desc: 'Precision haircuts and customized styling profiles for both men and women, finished with a professional blow-dry.',
        price: 'Popular',
        img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
        waText: "I'd like to book a Cut & Style appointment"
      },
      {
        id: 'h2',
        title: 'Hair Colors',
        desc: 'Global hair coloring and root touch-ups using premium, safe color brands that enrich and protect your locks.',
        price: 'Trending',
        img: '/hc.webp',
        waText: "I'd like to inquire about Hair Coloring"
      },
      {
        id: 'h3',
        title: 'Hair Wash & Set',
        desc: 'Restorative shampoo wash, deep conditioning, and signature setting finishes for smooth, daily manageable styling.',
        price: 'Standard',
        img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
        waText: "I'd like to book a Hair Wash & Set"
      },
      {
        id: 'h4',
        title: 'Highlights',
        desc: 'Custom highlight streaks, balayage, and custom panel lights tailored to define your style.',
        price: 'Premium',
        img: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=600&q=80',
        waText: "I'd like to inquire about Highlights"
      }
    ],
    skin: [
      {
        id: 's1',
        title: 'Facials & Skin Glow',
        desc: 'Signature skin facials, fruit therapies, and D-Tan treatments to refresh and hydrate facial skin cells.',
        price: 'Essential',
        img: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=600&q=80',
        waText: "I'd like to book a Facial appointment"
      },
      {
        id: 's2',
        title: 'Beauty Care & Cleanup',
        desc: 'Cleanups and soothing masks customized for normal, sensitive, or oil-prone skin surfaces.',
        price: 'Popular',
        img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
        waText: "I'd like to book a Skin Cleanup"
      }
    ],
    makeup: [
      {
        id: 'm1',
        title: 'Party & Event Makeover',
        desc: 'Glamorous and HD party makeup styles customized for birthdays, anniversaries, and family events.',
        price: 'Elite',
        img: '/party.webp',
        waText: "I'd like to book Party Makeup"
      },
      {
        id: 'm2',
        title: 'Bridal Makeovers',
        desc: 'Specialized bridal, engagement, and sangeet makeover packages delivered by experienced artists.',
        price: 'Bespoke',
        img: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=600&q=80',
        waText: "I'd like to inquire about Bridal Makeover packages"
      }
    ],
    grooming: [
      {
        id: 'g1',
        title: 'Pedicure & Foot Care',
        desc: 'Relaxing hot water foot soak, skin scrub massage, nail trimming, and moisture recovery therapies.',
        price: 'Standard',
        img: '/serv2.webp',
        waText: "I'd like to book Foot Care/Pedicure"
      },
      {
        id: 'g2',
        title: 'Grooming Services',
        desc: 'Unisex hair trims, custom beard fades, shaving rituals, and herbal facial cleanups for a clean, sharp look.',
        price: 'Essential',
        img: '/groom.webp',
        waText: "I'd like to book Grooming Services"
      }
    ]
  };

  const getWhatsAppLink = (text) => {
    return `https://wa.me/918383856742?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="services-page animate-fade-in">
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
