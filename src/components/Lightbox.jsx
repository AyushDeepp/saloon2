import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import HeicImage from './HeicImage';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ isOpen, images, currentIndex, onClose, setCurrentIndex }) => {
  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close-btn" onClick={onClose} aria-label="Close lightbox">
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button className="lightbox-nav-btn prev" onClick={handlePrev} aria-label="Previous image">
            <ChevronLeft size={36} />
          </button>
          <button className="lightbox-nav-btn next" onClick={handleNext} aria-label="Next image">
            <ChevronRight size={36} />
          </button>
        </>
      )}

      <div className="lightbox-content-container" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image-wrapper">
          {currentImage.isVideo ? (
            <video 
              src={currentImage.videoUrl} 
              className="lightbox-video" 
              controls 
              autoPlay 
              playsInline
            />
          ) : (
            <HeicImage src={currentImage.img} alt={currentImage.title} className="lightbox-image" />
          )}
        </div>
        
        <div className="lightbox-caption">
          {currentImage.category && <span className="lightbox-category">{currentImage.category}</span>}
          {currentImage.title && <h3 className="lightbox-title">{currentImage.title}</h3>}
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
