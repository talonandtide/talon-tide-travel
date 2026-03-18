import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
}

const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    const fullTitle = title === 'Talon & Tide' ? 'Talon & Tide | Ethically Vetted Wildlife Experiences' : `${title} | Talon & Tide`;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
  }, [title, description]);
};

export default usePageMeta;
