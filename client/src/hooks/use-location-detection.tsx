import { useState, useEffect } from 'react';

interface LocationData {
  city: string;
  region: string;
  country: string;
  formatted: string;
}

export function useLocationDetection() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try ipapi.co first
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          setLocation({
            city: data.city || 'Unknown City',
            region: data.region || 'Unknown Region',
            country: data.country_name || 'Unknown Country',
            formatted: `${data.city || 'Unknown City'}, ${data.region || 'Unknown Region'}, ${data.country_name || 'Unknown Country'}`
          });
        } else {
          throw new Error('Primary API failed');
        }
      } catch (error) {
        try {
          // Fallback to ip-api.com
          const fallbackResponse = await fetch('http://ip-api.com/json/');
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            setLocation({
              city: fallbackData.city || 'Unknown City',
              region: fallbackData.regionName || 'Unknown Region', 
              country: fallbackData.country || 'Unknown Country',
              formatted: `${fallbackData.city || 'Unknown City'}, ${fallbackData.regionName || 'Unknown Region'}, ${fallbackData.country || 'Unknown Country'}`
            });
          } else {
            throw new Error('Fallback API failed');
          }
        } catch (fallbackError) {
          console.error('Location detection failed:', fallbackError);
          // Set default location
          setLocation({
            city: 'New York',
            region: 'NY',
            country: 'United States',
            formatted: 'New York, NY, United States'
          });
          setError('Unable to detect location, using default');
        }
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  return { location, isLoading, error };
}
