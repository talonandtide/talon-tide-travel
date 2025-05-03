
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle } from 'lucide-react';

interface ExpeditionMapProps {
  className?: string;
}

const ExpeditionMap = ({ className = '' }: ExpeditionMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isTokenSubmitted, setIsTokenSubmitted] = useState(false);
  
  // Svalbard expedition route coordinates
  const route = [
    { name: 'Oslo', coordinates: [10.7522, 59.9139] },
    { name: 'Longyearbyen', coordinates: [15.6267, 78.2232] },
    { name: 'Ny-Ålesund', coordinates: [11.9258, 78.9242] },
    { name: 'Monaco Glacier', coordinates: [16.3233, 79.4513] },
    { name: 'Hinlopen Strait', coordinates: [19.5000, 79.6000] },
    { name: 'Nordaustlandet', coordinates: [22.5000, 79.8000] },
    { name: 'Kvitøya', coordinates: [31.5000, 80.1000] },
    { name: 'Longyearbyen', coordinates: [15.6267, 78.2232] },
    { name: 'Oslo', coordinates: [10.7522, 59.9139] },
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken || map.current) return;
    
    try {
      setMapError(null);
      
      // Initialize mapbox
      mapboxgl.accessToken = mapboxToken;
      
      console.log('Initializing Mapbox with provided token');
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [15.6267, 78.2232], // Center on Longyearbyen, Svalbard
        zoom: 3.5,
        projection: 'globe', // Use string instead of object
        pitch: 40,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        if (!map.current) return;
        
        console.log('Map loaded successfully');
        
        // Add atmosphere and fog effects for realism
        map.current.setFog({
          'range': [0.5, 10],
          'color': '#f8f9fa',
          'horizon-blend': 0.2,
        });
        
        // Add a geojson source with the route data
        const routeCoordinates = route.map(point => point.coordinates);
        
        map.current.addSource('route', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': routeCoordinates
            }
          }
        });
        
        // Add a line layer for the expedition route
        map.current.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#BC9A5F', // talon-gold
            'line-width': 3,
            'line-dasharray': [2, 1]
          }
        });

        // Add markers for each stop
        route.forEach((stop) => {
          // Create a marker element
          const el = document.createElement('div');
          el.className = 'expedition-marker';
          el.style.backgroundColor = '#2C3E35'; // talon-green
          el.style.width = '12px';
          el.style.height = '12px';
          el.style.borderRadius = '50%';
          el.style.border = '2px solid white';
          el.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
          
          // Add a popup for each marker
          const popup = new mapboxgl.Popup({ offset: 20 })
            .setHTML(`<div class="font-serif text-talon-green">${stop.name}</div>`);
            
          // Add marker to map
          new mapboxgl.Marker(el)
            .setLngLat(stop.coordinates)
            .setPopup(popup)
            .addTo(map.current);
        });
        
        setMapLoaded(true);
      });

      // Error handling
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError('An error occurred while loading the map. Please try again later.');
      });

    } catch (error) {
      console.error('Failed to initialize map:', error);
      setMapError('Failed to initialize map. Please check your Mapbox token.');
    }
  };

  const handleSubmitToken = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mapboxToken.trim()) {
      setMapError('Please enter a valid Mapbox token');
      return;
    }
    
    // Clean up previous map instance if it exists
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    
    setIsTokenSubmitted(true);
    initializeMap();
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  // Initialize map when token is set from localStorage on load
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setIsTokenSubmitted(true);
    }
  }, []);

  // Initialize map after token is submitted or loaded from localStorage
  useEffect(() => {
    if (isTokenSubmitted) {
      localStorage.setItem('mapbox_token', mapboxToken);
      initializeMap();
    }
  }, [isTokenSubmitted]);

  return (
    <div className={`relative ${className}`}>
      {!isTokenSubmitted ? (
        <div className="w-full h-full bg-talon-sand/10 flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full bg-white p-6 rounded-sm shadow-md">
            <h3 className="font-serif text-xl text-talon-green mb-2">Mapbox Token Required</h3>
            <p className="text-talon-navy/80 mb-4 text-sm">
              To view this interactive map, please enter your Mapbox public token. 
              You can get one by signing up at <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-talon-gold hover:underline">mapbox.com</a>.
            </p>
            <form onSubmit={handleSubmitToken} className="space-y-4">
              <div>
                <Input
                  type="text"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  placeholder="Enter your Mapbox public token"
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-talon-green hover:bg-talon-green/90 text-white">
                Load Map
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div ref={mapContainer} className="w-full h-full rounded-sm shadow-md" />
          {mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-talon-sand/10">
              <div className="bg-white p-4 rounded-sm shadow text-talon-navy max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="font-medium">Map Error</p>
                </div>
                <p className="mb-2">{mapError}</p>
                <p className="text-sm mb-4">Make sure you have a stable internet connection and that third-party content is not blocked.</p>
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsTokenSubmitted(false);
                      localStorage.removeItem('mapbox_token');
                    }}
                    className="text-sm"
                  >
                    Change Token
                  </Button>
                  <Button 
                    onClick={() => {
                      if (map.current) {
                        map.current.remove();
                        map.current = null;
                      }
                      initializeMap();
                    }}
                    className="bg-talon-green hover:bg-talon-green/90 text-white text-sm"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          )}
          {mapLoaded && !mapError && (
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-sm text-xs text-talon-navy z-10">
              <h3 className="font-serif text-talon-green text-sm mb-1">Arctic Expedition Route</h3>
              <p>Follow the journey through the pristine Arctic wilderness of Svalbard</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExpeditionMap;
