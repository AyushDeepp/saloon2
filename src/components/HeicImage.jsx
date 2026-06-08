import React, { useState, useEffect } from 'react';

// Cache to store converted object URLs so we don't reconvert the same image multiple times
const heicCache = {};

const HeicImage = ({ src, alt, className, loading = "lazy" }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [error, setError] = useState(false);
  const [converting, setConverting] = useState(false);

  useEffect(() => {
    if (!src) return;

    // If it's not a HEIC image, use it directly
    const isHeic = src.toLowerCase().endsWith('.heic');
    if (!isHeic) {
      setImgSrc(src);
      return;
    }

    // Check cache first
    if (heicCache[src]) {
      setImgSrc(heicCache[src]);
      return;
    }

    let isMounted = true;
    setConverting(true);

    const convertHeic = async () => {
      try {
        // Load heic2any script if not already loaded
        if (!window.heic2any) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        if (!isMounted) return;

        // Fetch HEIC file
        const response = await fetch(src);
        const blob = await response.blob();

        if (!isMounted) return;

        // Convert blob to JPEG using heic2any
        const convertedBlob = await window.heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.8
        });

        if (!isMounted) return;

        // Handle array response (if multiple images are in the HEIC container)
        const finalBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        const objectUrl = URL.createObjectURL(finalBlob);

        // Save to cache
        heicCache[src] = objectUrl;

        setImgSrc(objectUrl);
        setConverting(false);
      } catch (err) {
        console.error('Error converting HEIC image:', err);
        if (isMounted) {
          setError(true);
          setConverting(false);
        }
      }
    };

    convertHeic();

    return () => {
      isMounted = false;
    };
  }, [src]);

  if (converting) {
    return (
      <div className={`${className} heic-loader-container`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', height: '100%', minHeight: '200px' }}>
        <div className="heic-loader" style={{ width: '24px', height: '24px', border: '2px solid #DFA54E', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      </div>
    );
  }

  if (error) {
    return <div className={`${className} heic-error`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: '#ff4d4d', fontSize: '0.8rem', height: '100%', minHeight: '200px' }}>Failed to load image</div>;
  }

  return imgSrc ? <img src={imgSrc} alt={alt} className={className} loading={loading} /> : null;
};

// Add spinning keyframes if not already defined
if (typeof document !== 'undefined') {
  const styleId = 'heic-loader-keyframes';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
}

export default HeicImage;
