import React, { useEffect } from 'react';
import { INSTAGRAM_WIDGET, CONTACT_INFO } from '../constants/siteData';
import './InstagramFeed.css';

const InstagramFeed = () => {
  const isPlaceholder = 
    INSTAGRAM_WIDGET.elfsightWidgetId === "YOUR_ELFSIGHT_WIDGET_ID" && 
    INSTAGRAM_WIDGET.beholdFeedId === "YOUR_BEHOLD_FEED_ID";

  useEffect(() => {
    if (isPlaceholder) return;

    // Load widget scripts dynamically depending on the selected widget platform
    let script = document.createElement('script');
    
    if (INSTAGRAM_WIDGET.type === "elfsight") {
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (INSTAGRAM_WIDGET.type === "behold") {
      script.src = "https://w.behold.so/widget.js";
      script.type = "module";
      document.body.appendChild(script);
    }

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isPlaceholder]);

  return (
    <section className="instagram-section section" id="instagram-feed">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Instagram</span>
          <h2 className="section-title">Follow Our Journey</h2>
          <p className="section-description">
            Tune in to our latest makeovers, hair highlights, and trending reels directly from our Instagram feed.
          </p>
        </div>

        {isPlaceholder ? (
          /* Premium Setup Guide Placeholder */
          <div className="instagram-placeholder-card">
            <div className="placeholder-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <h3>Connect Your Instagram Feed</h3>
            <p>Showcase your gorgeous makeup tutorials, client reviews, and haircut reels by linking your Instagram account:</p>
            <ol className="placeholder-steps">
              <li>Go to <a href="https://elfsight.com/instagram-feed-widget/" target="_blank" rel="noopener noreferrer">Elfsight.com</a> or <a href="https://behold.so/" target="_blank" rel="noopener noreferrer">Behold.so</a>.</li>
              <li>Create a free Instagram widget and connect it to your handle <strong>@{CONTACT_INFO.instagramUrl.split('/').pop()}</strong>.</li>
              <li>Copy the generated widget ID or feed ID.</li>
              <li>Open <strong>siteData.js</strong> and replace the placeholder ID with your own.</li>
            </ol>
            <a 
              href={CONTACT_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
              style={{ marginTop: '1.5rem' }}
            >
              Visit @{CONTACT_INFO.instagramUrl.split('/').pop()}
            </a>
          </div>
        ) : (
          /* Live Widget Container */
          <div className="instagram-widget-wrapper">
            {INSTAGRAM_WIDGET.type === "elfsight" ? (
              <div 
                className={`elfsight-app-${INSTAGRAM_WIDGET.elfsightWidgetId}`} 
                data-elfsight-app-lazy
              ></div>
            ) : (
              <behold-widget feed-id={INSTAGRAM_WIDGET.beholdFeedId}></behold-widget>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;
