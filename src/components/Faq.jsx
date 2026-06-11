import React, { useState } from 'react';
import { FAQ_DATA } from '../constants/siteData';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = FAQ_DATA;

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
