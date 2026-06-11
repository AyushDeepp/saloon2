import React from 'react';
import SEO from '../components/SEO';
import { CONTACT_INFO } from '../constants/siteData';
import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="legal-page terms-of-service-page animate-fade-in">
      <SEO 
        title="Terms of Service | Elite Makeover Studio"
        description="Review the Terms of Service for Elite Makeover Studio. Information on booking appointments, cancellations, payments, and salon policies."
        keywords="terms of service elite makeover studio, salon terms of service, appointment booking terms"
      />
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container text-center">
          <span className="banner-subtitle gold-text">LEGAL INFORMATION</span>
          <h1 className="banner-title">Terms of Service</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-content-wrapper">
            <div className="legal-last-updated">Last Updated: June 11, 2026</div>
            
            <div className="legal-content">
              <p>
                Welcome to <strong>{CONTACT_INFO.studioName}</strong>. By accessing our website (located in Huda Market, Sector 31, Faridabad) or using our services, you agree to comply with and be bound by the following Terms of Service. Please review these terms carefully.
              </p>
              
              <p>
                If you do not agree to these terms, you should not access this website or book appointments for our beauty and grooming services.
              </p>

              <h2>1. Salon Services and Bookings</h2>
              <p>
                We strive to provide premium unisex salon services, including hair styling, colors, skin facials, bridal makeovers, and grooming.
              </p>
              <ul>
                <li><strong>Appointments:</strong> Bookings can be requested via our website form, phone call, or WhatsApp. A booking request is only confirmed once you receive a confirmation message from our studio team.</li>
                <li><strong>Cancellations and Rescheduling:</strong> We value your time and our stylists' schedules. If you need to cancel or reschedule, please notify us at least 2 hours prior to your scheduled appointment.</li>
                <li><strong>Late Arrival:</strong> If you are running late, please call us. Arriving more than 15 minutes late may result in your appointment being shortened or rescheduled to ensure our other clients are not delayed.</li>
              </ul>

              <h2>2. Pricing and Payments</h2>
              <p>
                Prices for all salon services are subject to change without prior notice. Rates vary based on hair length, styling requirements, and product usage.
              </p>
              <ul>
                <li><strong>Payments:</strong> All payments for services rendered must be completed at the salon counter. We accept Cash, UPI, and major Credit/Debit Cards.</li>
                <li><strong>Taxes:</strong> All prices are subject to applicable local service taxes unless explicitly stated otherwise.</li>
              </ul>

              <h2>3. Client Conduct and Health</h2>
              <p>
                To maintain a safe, premium, and hygienic environment for all clients and staff, we require compliance with the following:
              </p>
              <ul>
                <li><strong>Health Disclosures:</strong> You must inform our stylists of any skin allergies, sensitivities, scalp conditions, or medical concerns before starting any treatment.</li>
                <li><strong>Patch Tests:</strong> For chemical services such as hair colors or permanent treatments, we recommend a patch test 24 hours prior to service. If you opt out of a recommended patch test, you do so at your own risk.</li>
                <li><strong>Respectful Behavior:</strong> Respectful conduct is expected towards all salon staff and fellow clients. We reserve the right to refuse service to anyone demonstrating inappropriate or disruptive behavior.</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>
                All content, logo designs, images, graphics, and text on this website are the intellectual property of {CONTACT_INFO.studioName} unless otherwise noted. Unauthorized reproduction, modification, distribution, or reuse of any content on this website for commercial purposes is strictly prohibited without written consent.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                {CONTACT_INFO.studioName} and its stylists make every effort to deliver outstanding, tailored makeovers. However, the salon is not liable for:
              </p>
              <ul>
                <li>Adverse reactions to products or treatments if you did not disclose pre-existing allergies or sensitivities prior to the service.</li>
                <li>Unsatisfactory styling or coloring outcomes resulting from client-requested procedures that go against professional styling advice.</li>
                <li>Loss or damage to personal belongings brought onto the salon premises. We advise clients to keep valuables secure at all times.</li>
              </ul>

              <h2>6. Governing Law</h2>
              <p>
                These Terms of Service and any dispute arising from your use of this website or our salon services shall be governed by and construed in accordance with the laws of Haryana, India, and shall be subject to the exclusive jurisdiction of the courts in Faridabad.
              </p>

              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to revise or update these Terms of Service at any time. Any changes will be posted directly to this page with an updated "Last Updated" date. Continued use of our website or services following any updates signifies your acceptance of the revised terms.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                For questions regarding these Terms of Service, please contact the studio management:
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

export default TermsOfService;
