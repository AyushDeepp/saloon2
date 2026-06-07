import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'hair',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        message: 'Please fill in all required fields.',
        error: true
      });
      return;
    }

    setStatus({
      submitting: true,
      message: 'Sending your inquiry...',
      error: false
    });

    // Simulate API delay
    setTimeout(() => {
      setStatus({
        submitting: false,
        message: `Thank you, ${formData.name}! Your inquiry has been received. We'll contact you shortly.`,
        error: false
      });
      setFormData({
        name: '',
        email: '',
        service: 'hair',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container text-center">
          <span className="banner-subtitle gold-text">FARIDABAD</span>
          <h1 className="banner-title">Contact Elite</h1>
        </div>
      </div>
      
      {/* Contact Form Details */}
      <section className="contact-details-section section">
        <div className="container">
          <div className="grid grid-2">
            <div className="contact-info">
              <span className="section-subtitle gold-text">Get In Touch</span>
              <h2 className="section-title">Schedule Your Elite Makeover</h2>
              <p className="contact-desc">Ready to experience a premium makeover? Send us a message, call, or drop by our studio in Faridabad. We look forward to serving you.</p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h3>Address</h3>
                    <p>DSS No. 23, Huda Market, Sector 31, Near HR 51 Restaurant, Faridabad, Haryana – 121003</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h3>Phone Number</h3>
                    <p>+91 8383856742</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h3>Owners</h3>
                    <p>Sumit Saini & Deepak Saini</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h3>Opening Hours</h3>
                    <p>Mon - Sun: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send An Inquiry</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="john@example.com" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Interested Service</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="hair">Hair Cut & Styling</option>
                    <option value="color">Hair Colors</option>
                    <option value="wash">Hair Wash & Set</option>
                    <option value="highlights">Highlights</option>
                    <option value="beauty">Facials & Cleanup</option>
                    <option value="makeup">Professional Makeup</option>
                    <option value="grooming">Grooming & Foot Care</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    placeholder="Please let us know your preferred date, time, and service details..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {status.message && (
                  <div 
                    className={`form-feedback ${status.error ? 'error' : 'success'}`}
                    style={{ color: status.error ? '#ff3333' : (status.submitting ? '#DFA54E' : '#4BB543') }}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Google Maps Embed Section */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.0264102927236!2d77.32049447599026!3d28.34293977538575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7e30d7bcfd%3A0xe54ef3909748bdfb!2sSector%2031%20Huda%20Market!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Makeover Studio Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
