import React from 'react';
import './Gallery.css';
import HeicImage from '../components/HeicImage';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      category: 'Hair Styling',
      title: 'Perfect Blow-dry',
      img: '/g1.webp',
      size: 'small'
    },
    {
      id: 2,
      category: 'Salon Interior',
      title: 'Styling Room',
      img: '/g2.webp',
      size: 'tall'
    },
    {
      id: 3,
      category: 'Makeup Artistry',
      title: 'Bridal Elegance',
      img: '/g3.webp',
      size: 'small'
    },
    {
      id: 4,
      category: 'Grooming',
      title: 'Sharp Beard Fade',
      img: '/g4.webp',
      size: 'small'
    },
    {
      id: 5,
      category: 'Hair Color',
      title: 'Couture Balayage',
      img: '/g5.webp',
      size: 'small'
    },
    {
      id: 6,
      category: 'Skincare',
      title: 'Signature Glow',
      img: '/g6.webp',
      size: 'wide'
    },
    {
      id: 7,
      category: 'Nail Art',
      title: 'Luxury Manicure',
      img: '/g7.webp',
      size: 'small'
    },
    {
      id: 8,
      category: 'Skincare',
      title: 'Organic Facial',
      img: '/g8.webp',
      size: 'small'
    },
    {
      id: 9,
      category: 'Hair Styling',
      title: 'Glamour Curls',
      img: '/g9.webp',
      size: 'wide'
    },
    {
      id: 10,
      category: 'Bridal Makeup',
      title: 'Royal Makeover',
      img: '/g10.webp',
      size: 'small'
    },
    {
      id: 11,
      category: 'Salon Interior',
      title: 'Luxury Comfort',
      img: '/gt.webp',
      size: 'tall'
    },
    {
      id: 12,
      category: 'Hair Styling',
      title: 'Creative Cut',
      img: '/gt1.webp',
      size: 'small'
    },
    {
      id: 13,
      category: 'Nail Art',
      title: 'Elegant Nails',
      img: '/gt2.webp',
      size: 'small'
    },
    {
      id: 14,
      category: 'Makeup Artistry',
      title: 'Glamour Look',
      img: '/gt3.webp',
      size: 'wide'
    },
    {
      id: 15,
      category: 'Makeup Artistry',
      title: 'Premium Styling',
      img: '/IMG_6885.webp',
      size: 'small',
      customClass: 'crop-pillarbox'
    },
    {
      id: 16,
      category: 'Makeup Artistry',
      title: 'Bridal Makeover',
      img: '/IMG_6882.webp',
      size: 'small',
      customClass: 'crop-pillarbox'
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
              <div className={`gallery-item ${item.size}`} key={item.id}>
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
    </div>
  );
};

export default Gallery;
