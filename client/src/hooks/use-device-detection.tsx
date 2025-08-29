import { useState, useEffect } from 'react';

export function useDeviceDetection() {
  const [device, setDevice] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      let detectedDevice = '';

      // iPhone detection with models
      if (userAgent.match(/iPhone/i)) {
        if (userAgent.match(/iPhone15/i)) {
          detectedDevice = 'iPhone 15';
        } else if (userAgent.match(/iPhone14/i)) {
          detectedDevice = 'iPhone 14';
        } else if (userAgent.match(/iPhone13/i)) {
          detectedDevice = 'iPhone 13';
        } else if (userAgent.match(/iPhone12/i)) {
          detectedDevice = 'iPhone 12';
        } else if (userAgent.match(/iPhone11/i)) {
          detectedDevice = 'iPhone 11';
        } else if (userAgent.match(/iPhoneX/i)) {
          detectedDevice = 'iPhone X';
        } else {
          // More detailed iPhone detection based on OS version and other indicators
          const iosVersion = userAgent.match(/OS (\d+)_/);
          if (iosVersion && parseInt(iosVersion[1]) >= 17) {
            detectedDevice = 'iPhone 15 Pro';
          } else if (iosVersion && parseInt(iosVersion[1]) >= 16) {
            detectedDevice = 'iPhone 14 Pro';
          } else if (iosVersion && parseInt(iosVersion[1]) >= 15) {
            detectedDevice = 'iPhone 13 Pro';
          } else {
            detectedDevice = 'iPhone 12 Pro';
          }
        }
      }
      // iPad detection
      else if (userAgent.match(/iPad/i)) {
        if (userAgent.match(/iPad.*Pro/i)) {
          detectedDevice = 'iPad Pro';
        } else if (userAgent.match(/iPad.*Air/i)) {
          detectedDevice = 'iPad Air';
        } else {
          detectedDevice = 'iPad';
        }
      }
      // Android detection with popular models
      else if (userAgent.match(/Android/i)) {
        if (userAgent.match(/SM-G99/i)) {
          detectedDevice = 'Samsung Galaxy S23';
        } else if (userAgent.match(/SM-G98/i)) {
          detectedDevice = 'Samsung Galaxy S22';
        } else if (userAgent.match(/SM-G97/i)) {
          detectedDevice = 'Samsung Galaxy S21';
        } else if (userAgent.match(/SM-N99/i)) {
          detectedDevice = 'Samsung Galaxy Note 20';
        } else if (userAgent.match(/Pixel 8/i)) {
          detectedDevice = 'Google Pixel 8';
        } else if (userAgent.match(/Pixel 7/i)) {
          detectedDevice = 'Google Pixel 7';
        } else if (userAgent.match(/Pixel 6/i)) {
          detectedDevice = 'Google Pixel 6';
        } else if (userAgent.match(/Pixel/i)) {
          detectedDevice = 'Google Pixel';
        } else if (userAgent.match(/OnePlus/i)) {
          detectedDevice = 'OnePlus';
        } else if (userAgent.match(/Xiaomi/i)) {
          detectedDevice = 'Xiaomi';
        } else if (userAgent.match(/Huawei/i)) {
          detectedDevice = 'Huawei';
        } else if (userAgent.match(/Samsung/i)) {
          detectedDevice = 'Samsung Galaxy';
        } else {
          detectedDevice = 'Android Phone';
        }
      }
      // Other devices
      else if (userAgent.match(/BlackBerry/i)) {
        detectedDevice = 'BlackBerry';
      } else if (userAgent.match(/Windows Phone/i)) {
        detectedDevice = 'Windows Phone';
      } else {
        // Fallback for desktop/other
        if (userAgent.match(/Mac/i)) {
          detectedDevice = 'MacBook';
        } else if (userAgent.match(/Windows/i)) {
          detectedDevice = 'Windows PC';
        } else {
          detectedDevice = 'Device';
        }
      }

      setDevice(detectedDevice);
      setIsLoading(false);
    };

    // Add a small delay to simulate detection process
    const timer = setTimeout(detectDevice, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return { device, isLoading };
}
