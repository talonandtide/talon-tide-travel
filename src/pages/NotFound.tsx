
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the attempted access to non-existent route
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-talon-sand/10">
      <div className="text-center p-8">
        <h1 className="font-serif text-6xl text-talon-green mb-4">404</h1>
        <p className="text-xl text-talon-navy mb-6">Oops! Page not found</p>
        <Link 
          to="/" 
          onClick={() => window.scrollTo(0, 0)} 
          className="btn-primary group inline-flex"
        >
          Return to Home
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
