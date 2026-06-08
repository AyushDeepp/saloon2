import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Cut & Style',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
      waText: "I'd like to book a Cut & Style appointment at Elite Makeover Studio"
    },
    {
      title: 'Hair Colors',
      img: '/hc.png',
      waText: "I'd like to inquire about Hair Coloring at Elite Makeover Studio"
    },
    {
      title: 'Hair Wash & Set',
      img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
      waText: "I'd like to book a Hair Wash & Set at Elite Makeover Studio"
    },
    {
      title: 'Highlights',
      img: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=600&q=80',
      waText: "I'd like to inquire about Highlights at Elite Makeover Studio"
    },
    {
      title: 'Facials & Skin Glow',
      img: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=600&q=80',
      waText: "I'd like to book a Facial appointment at Elite Makeover Studio"
    },
    {
      title: 'Beauty Cleanup',
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
      waText: "I'd like to book a Skin Cleanup at Elite Makeover Studio"
    },
    {
      title: 'Party Makeover',
      img: '/party.png',
      waText: "I'd like to book Party Makeup at Elite Makeover Studio"
    },
    {
      title: 'Bridal Makeovers',
      img: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&w=600&q=80',
      waText: "I'd like to inquire about Bridal Makeover packages at Elite Makeover Studio"
    },
    {
      title: 'Pedicure & Foot Care',
      img: '/serv2.png',
      waText: "I'd like to book Foot Care/Pedicure at Elite Makeover Studio"
    },
    {
      title: 'Grooming Services',
      img: '/groom.png',
      waText: "I'd like to book Grooming Services at Elite Makeover Studio"
    }
  ];

  const getWhatsAppLink = (text) => {
    return `https://wa.me/918383856742?text=${encodeURIComponent(text)}`;
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
