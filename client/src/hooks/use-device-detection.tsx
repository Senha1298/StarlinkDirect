import { useState, useEffect } from 'react';

export function useDeviceDetection() {
  const [device, setDevice] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      let detectedDevice = '';

      if (userAgent.match(/iPhone/i)) {
        detectedDevice = 'iPhone';
      } else if (userAgent.match(/iPad/i)) {
        detectedDevice = 'iPad';
      } else if (userAgent.match(/Android/i)) {
        detectedDevice = 'Android Phone';
      } else if (userAgent.match(/BlackBerry/i)) {
        detectedDevice = 'BlackBerry';
      } else if (userAgent.match(/Windows Phone/i)) {
        detectedDevice = 'Windows Phone';
      } else {
        detectedDevice = 'Smartphone';
      }

      setDevice(detectedDevice);
      setIsLoading(false);
    };

    detectDevice();
  }, []);

  return { device, isLoading };
}
