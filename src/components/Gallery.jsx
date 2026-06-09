import React from 'react';
import './Gallery.css';
import HeicImage from './HeicImage';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      category: 'Hair Styling',
      title: 'Perfect Blow-dry',
      img: '/g1.webp'
    },
    {
      id: 2,
      category: 'Salon Interior',
      title: 'Styling Room',
      img: '/g2.webp'
    },
    {
      id: 3,
      category: 'Makeup Artistry',
      title: 'Bridal Elegance',
      img: '/g3.webp'
    },
    {
      id: 4,
      category: 'Grooming',
      title: 'Sharp Beard Fade',
      img: '/g4.webp'
    },
    {
      id: 5,
      category: 'Hair Color',
      title: 'Couture Balayage',
      img: '/g5.webp'
    },
    {
      id: 6,
      category: 'Skincare',
      title: 'Signature Glow',
      img: '/g6.webp'
    }
  ];

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Portfolio</span>
          <h2 className="section-title">Capturing Our Creations</h2>
          <p className="section-description">Hover over any styling capture to pause the orbit and inspect our creations.</p>
        </div>
        
        <div className="circle-gallery-container">
          <div className="circle-gallery-center">
            <div className="center-badge">
              <svg width="45" height="45" viewBox="0 0 100 100" className="center-logo">
                <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="#DFA54E" strokeWidth="4" />
                <text x="50" y="62" fontFamily="'Playfair Display', serif" fontSize="42" fontWeight="bold" fill="#DFA54E" textAnchor="middle">E</text>
              </svg>
              <span className="badge-label">ELITE</span>
            </div>
          </div>
          
          <div className="circle-gallery-wrapper">
            {galleryItems.map((item, index) => (
              <div 
                className="gallery-item-circle" 
                key={item.id}
                style={{ '--index': index }}
              >
                <div className="circle-item-inner">
                  <HeicImage src={item.img} alt={item.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
