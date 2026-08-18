import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage SEO titles and meta descriptions.
 * 
 * @param {string} title - The title of the page.
 * @param {string} description - The meta description content.
 */
export const useDocumentMetadata = (title, description) => {
  useEffect(() => {
    // Set document title
    document.title = title ? `${title} | Apex Solutions` : 'Apex Solutions - Enterprise Cloud & Digital Solutions';

    // Set meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.content = description || 'Apex Solutions delivers next-generation enterprise technology, cloud consulting, and digital integration.';
  }, [title, description]);
};
export default useDocumentMetadata;
