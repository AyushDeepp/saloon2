import React, { useState } from 'react';
import SEO from '../components/SEO';
import { GALLERY_ITEMS } from '../constants/siteData';
import './Gallery.css';
import HeicImage from '../components/HeicImage';
import Lightbox from '../components/Lightbox';

const Gallery = () => {
  const galleryItems = GALLERY_ITEMS;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery-page animate-fade-in">
      <SEO 
        title="Our Work Portfolio | Hair Styles & Makeup | Elite Makeover Studio"
        description="Browse the Elite Makeover Studio gallery. See our professional bridal makeovers, stylish haircuts, creative nail art, and premium salon interior in Faridabad."
        keywords="salon portfolio faridabad, bridal makeup photos, hair style gallery, makeup artistry portfolio, elite makeover studio pictures, nail art gallery"
      />
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container text-center">
          <span className="banner-subtitle gold-text">Portfolio</span>
          <h1 className="banner-title">Our Visual Gallery</h1>
        </div>
      </div>
      
      {/* Gallery Showcase */}
      <section className="gallery-showcase section">
        <div className="container">
          <div className="gallery-grid">
             {galleryItems.map((item, index) => (
              <div 
                className={`gallery-item ${item.size}`} 
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <HeicImage src={item.img} alt={item.title} className={item.customClass || ''} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-cat">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox 
        isOpen={isOpen}
        images={galleryItems}
        currentIndex={currentIndex}
        onClose={() => setIsOpen(false)}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Gallery;
