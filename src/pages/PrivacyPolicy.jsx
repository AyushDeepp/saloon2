import React from 'react';
import SEO from '../components/SEO';
import { CONTACT_INFO } from '../constants/siteData';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page privacy-policy-page animate-fade-in">
      <SEO 
        title="Privacy Policy | Elite Makeover Studio"
        description="Read the Privacy Policy of Elite Makeover Studio. Learn how we handle and protect your personal information collected for salon bookings."
        keywords="privacy policy elite makeover studio, salon privacy policy, booking privacy policy"
      />
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container text-center">
          <span className="banner-subtitle gold-text">LEGAL INFORMATION</span>
          <h1 className="banner-title">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-content-wrapper">
            <div className="legal-last-updated">Last Updated: June 11, 2026</div>
            
            <div className="legal-content">
              <p>
                At <strong>{CONTACT_INFO.studioName}</strong>, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information we collect, how we use it, and the steps we take to protect your personal details when you interact with our website and salon services.
              </p>
              
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information to provide better services to our clients. The types of personal information we may collect include:
              </p>
              <ul>
                <li><strong>Contact Details:</strong> Your name, email address, and phone number when you fill out our contact or inquiry form, or when you message us on WhatsApp.</li>
                <li><strong>Service Preferences:</strong> Information regarding the services you are interested in (e.g., hair styling, coloring, highlights, facials, bridal makeovers).</li>
                <li><strong>Appointment Data:</strong> Date and time preferences, styling choices, and any specific notes you share with us regarding your booking.</li>
                <li><strong>Usage Details:</strong> Information about how you navigate our website, including your IP address, browser type, and duration of visit, gathered via analytics.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our website and scheduling services.</li>
                <li>Process and schedule your appointments at {CONTACT_INFO.studioName}.</li>
                <li>Communicate with you directly, including responding to inquiries, confirming bookings, or providing updates about our salon.</li>
                <li>Improve and personalize your experience both online and in our salon.</li>
                <li>Understand and analyze how you use our website to enhance usability and page performance.</li>
                <li>Send occasional promotional offers, styling tips, or reminders (only if you have opted in to receive them).</li>
              </ul>

              <h2>3. Data Protection and Security</h2>
              <p>
                The security of your personal data is very important to us. We implement industry-standard physical, electronic, and administrative safeguards to protect your personal information from unauthorized access, loss, misuse, or alteration.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>4. Cookies and Tracking Technologies</h2>
              <p>
                {CONTACT_INFO.studioName} uses 'cookies' to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences, analyze website traffic, and understand which sections of our site are most popular.
              </p>
              <p>
                You can choose to disable cookies through your individual browser options. However, please note that disabling cookies may affect the functionality of certain elements on our website.
              </p>

              <h2>5. Third-Party Websites and Services</h2>
              <p>
                Our website includes links to third-party services and platforms, such as Instagram (for styling portfolios) and WhatsApp (for quick booking). This Privacy Policy does not apply to external websites or social platforms.
              </p>
              <p>
                We encourage you to consult the respective Privacy Policies of these third-party platforms for more detailed information regarding their data practices and opt-out instructions.
              </p>

              <h2>6. Your Rights and Choices</h2>
              <p>
                You have the right to request access to the personal information we hold about you, request corrections to incorrect data, or request the deletion of your personal records from our database. To exercise any of these rights, please reach out to us using the contact details below.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact the studio management:
              </p>
              
              <div className="legal-contact-box">
                <p><strong>Studio Name:</strong> {CONTACT_INFO.studioName}</p>
                <p><strong>Owners:</strong> {CONTACT_INFO.owners}</p>
                <p><strong>Address:</strong> <a href={CONTACT_INFO.addressMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>{CONTACT_INFO.address}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${CONTACT_INFO.phoneRaw}`} style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>{CONTACT_INFO.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>{CONTACT_INFO.email}</a></p>
                <p><strong>Opening Hours:</strong> {CONTACT_INFO.openingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
