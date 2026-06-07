import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      category: 'Hair Styling',
      title: 'Perfect Blow-dry',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      category: 'Salon Interior',
      title: 'Styling Room',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      category: 'Makeup Artistry',
      title: 'Bridal Elegance',
      img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      category: 'Grooming',
      title: 'Sharp Beard Fade',
      img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      category: 'Hair Color',
      title: 'Couture Balayage',
      img: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      category: 'Skincare',
      title: 'Signature Glow',
      img: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="gallery-page animate-fade-in">
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
            {galleryItems.map((item) => (
              <div className="gallery-item" key={item.id}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-cat">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
