import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday through Sunday, from 10:00 AM to 8:00 PM."
    },
    {
      question: "Where is Elite Makeover Studio located?",
      answer: "Our studio is located at DSS No. 23, Huda Market, Sector 31, Near HR 51 Restaurant, Faridabad, Haryana – 121003. You can find our exact location on the Google Map in the contact section."
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer: "While we accept walk-ins based on availability, we highly recommend booking an appointment in advance to secure your preferred slot and avoid waiting. You can book instantly by clicking our WhatsApp quick inquiry links."
    },
    {
      question: "Is Elite Makeover Studio a unisex salon?",
      answer: "Yes, we are a premium unisex salon. We offer dedicated hair, skin, makeup, and grooming services tailored for both men and women."
    },
    {
      question: "What products do you use for treatments?",
      answer: "We work exclusively with certified, high-performance, and premium cosmetic and hair labels to ensure optimal results and safety for all skin and hair profiles."
    },
    {
      question: "How can I book bridal or bulk event makeovers?",
      answer: "For specialized bridal packages, party makeovers, or group bookings, you can get in touch with our owners, Sumit Saini & Deepak Saini, directly at +91 8383856742 or send an inquiry via our contact page."
    }
  ];

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if clicked again
    } else {
      setActiveIndex(index); // Expand
    }
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">Here are answers to the most common questions about our salon, services, and bookings.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="chevron-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
