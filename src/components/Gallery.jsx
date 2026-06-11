import React, { useState } from 'react';
import { CONTACT_INFO, GALLERY_ITEMS } from '../constants/siteData';
import './Gallery.css';
import HeicImage from './HeicImage';
import Lightbox from './Lightbox';

const Gallery = () => {
  // Use the first 6 items for the home page layout
  const galleryItems = GALLERY_ITEMS.slice(0, 6);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Portfolio</span>
          <h2 className="section-title">Capturing Our Creations</h2>
          <p className="section-description">Hover over any styling capture to pause the orbit and click to view full screen.</p>
        </div>
        
        <div className="circle-gallery-container">
          <div className="circle-gallery-center">
            <div className="center-badge logo-badge">
              <img src={CONTACT_INFO.logoUrl} alt={CONTACT_INFO.studioName} className="center-logo-image" />
            </div>
          </div>
          
          <div className="circle-gallery-wrapper">
            {galleryItems.map((item, index) => (
              <div 
                className="gallery-item-circle" 
                key={item.id}
                style={{ '--index': index }}
              >
                <div className="circle-item-inner" onClick={() => handleOpenLightbox(index)}>
                  <HeicImage src={item.img} alt={item.title} loading="lazy" />
                  <div className="circle-item-overlay">
                    <span className="circle-item-cat">{item.category}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox 
        isOpen={isOpen}
        images={galleryItems}
        currentIndex={currentIndex}
        onClose={() => setIsOpen(false)}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
};

export default Gallery;
