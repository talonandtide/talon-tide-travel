
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Temporary public token - in production this should be stored in environment variables
// This is a restricted token for demo purposes only
const MAPBOX_TOKEN = 'pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNsbzBsZ25vZzA4OHUya3BmcTNwZ2duMm4ifQ.UJPUg-oaZzR_gdS-3ynCIQ';

interface ExpeditionMapProps {
  className?: string;
}

const ExpeditionMap = ({ className = '' }: ExpeditionMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  
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

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    try {
      // Initialize mapbox
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
      console.log('Initializing Mapbox with token:', MAPBOX_TOKEN);
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [15.6267, 78.2232], // Center on Longyearbyen, Svalbard
        zoom: 3.5,
        projection: { name: 'globe' },
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
      setMapError('Failed to initialize map.');
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-sm shadow-md" />
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-talon-sand/10">
          <div className="bg-white p-4 rounded-sm shadow text-talon-navy">
            <p>{mapError}</p>
            <p className="text-sm mt-2">Make sure you have a stable internet connection and that third-party content is not blocked.</p>
          </div>
        </div>
      )}
      {mapLoaded && !mapError && (
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-sm text-xs text-talon-navy z-10">
          <h3 className="font-serif text-talon-green text-sm mb-1">Arctic Expedition Route</h3>
          <p>Follow the journey through the pristine Arctic wilderness of Svalbard</p>
        </div>
      )}
    </div>
  );
};

export default ExpeditionMap;
