import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
}

const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    const fullTitle = title === 'Talon & Tide' ? 'Talon & Tide | Ethically Vetted Wildlife Experiences' : `${title} | Talon & Tide`;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);

    // Self-referencing canonical and og:url so each route owns its own URL
    const currentUrl = window.location.href;
    setMeta('link[rel="canonical"]', 'href', currentUrl);
    setMeta('meta[property="og:url"]', 'content', currentUrl);
  }, [title, description]);
};

export default usePageMeta;
