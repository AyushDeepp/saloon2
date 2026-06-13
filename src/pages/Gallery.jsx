import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { GALLERY_ITEMS } from '../constants/siteData';
import { Play } from 'lucide-react';
import './Gallery.css';
import HeicImage from '../components/HeicImage';
import Lightbox from '../components/Lightbox';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'clients', label: 'Clients' },
  { id: 'interior', label: 'Studio Tour' },
  { id: 'videos', label: 'Videos' }
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle the gallery items once when the component mounts
  const shuffledItems = useMemo(() => {
    const items = [...GALLERY_ITEMS];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, []);

  const filteredItems = useMemo(() => {
    return shuffledItems.filter(item => {
      if (activeTab === 'all') return true;
      if (activeTab === 'videos') return item.isVideo;
      if (activeTab === 'interior') return item.category === 'Salon Interior';
      if (activeTab === 'clients') return item.category !== 'Salon Interior';
      return true;
    });
  }, [shuffledItems, activeTab]);

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
          {/* Category Filter Tabs */}
          <div className="gallery-filters-container">
            <div className="gallery-filters">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setIsOpen(false);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
             {filteredItems.map((item, index) => (
              <div 
                className={`gallery-item ${item.size} ${item.isVideo ? 'video-item' : ''}`} 
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <HeicImage src={item.img} alt={item.title} className={item.customClass || ''} loading="lazy" />
                {item.isVideo && (
                  <div className="video-play-badge">
                    <Play size={24} fill="currentColor" />
                  </div>
                )}
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
        images={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setIsOpen(false)}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Gallery;
