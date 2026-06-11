import { useEffect } from 'react';

const SEO = ({ title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (nameAttr, nameVal, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameVal);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update standard meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'author', author || 'Elite Makeover Studio');

    // Update Open Graph (OG) meta tags
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    updateMetaTag('property', 'og:image', ogImage || '/logo2.webp');
    updateMetaTag('property', 'og:url', ogUrl || window.location.href);
    updateMetaTag('property', 'og:type', 'website');

    // Update Twitter card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', ogTitle || title);
    updateMetaTag('name', 'twitter:description', ogDescription || description);
    updateMetaTag('name', 'twitter:image', ogImage || '/logo2.webp');

    // Update canonical link tag
    const updateCanonical = (url) => {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', url);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        document.head.appendChild(link);
      }
    };
    updateCanonical(ogUrl || window.location.href);

  }, [title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl]);

  return null;
};

export default SEO;
