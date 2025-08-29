import { useState, useEffect } from 'react';

export function useDeviceDetection() {
  const [device, setDevice] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      let detectedDevice = '';

      // Helper function to extract device model from user agent
      const extractDeviceModel = (ua: string) => {
        // Try to extract model from common patterns
        const patterns = [
          /(\w+\s+\w+\s+\w+)/i, // Three word patterns
          /(\w+\s+\w+)/i,       // Two word patterns
          /(\w+)/i              // Single word patterns
        ];

        for (const pattern of patterns) {
          const match = ua.match(pattern);
          if (match && match[1] && match[1].length > 2) {
            return match[1].trim();
          }
        }
        return null;
      };

      // iPhone detection with comprehensive model detection
      if (userAgent.match(/iPhone/i)) {
        const iosVersion = userAgent.match(/OS (\d+)_(\d+)/);
        const version = iosVersion ? parseInt(iosVersion[1]) : 0;
        
        if (userAgent.includes('iPhone16,')) detectedDevice = 'iPhone 15 Pro Max';
        else if (userAgent.includes('iPhone15,')) detectedDevice = 'iPhone 14 Pro Max';
        else if (userAgent.includes('iPhone14,')) detectedDevice = 'iPhone 13 Pro Max';
        else if (userAgent.includes('iPhone13,')) detectedDevice = 'iPhone 12 Pro Max';
        else if (userAgent.includes('iPhone12,')) detectedDevice = 'iPhone 11 Pro Max';
        else if (userAgent.includes('iPhone11,')) detectedDevice = 'iPhone XS Max';
        else if (userAgent.includes('iPhone10,')) detectedDevice = 'iPhone X';
        else if (version >= 17) detectedDevice = 'iPhone 15 Pro';
        else if (version >= 16) detectedDevice = 'iPhone 14 Pro';
        else if (version >= 15) detectedDevice = 'iPhone 13';
        else if (version >= 14) detectedDevice = 'iPhone 12';
        else if (version >= 13) detectedDevice = 'iPhone 11';
        else detectedDevice = 'iPhone';
      }
      // iPad comprehensive detection
      else if (userAgent.match(/iPad/i)) {
        if (userAgent.includes('iPad13,')) detectedDevice = 'iPad Pro 12.9" (6th gen)';
        else if (userAgent.includes('iPad12,')) detectedDevice = 'iPad Pro 11" (4th gen)';
        else if (userAgent.includes('iPad11,')) detectedDevice = 'iPad Pro 12.9" (5th gen)';
        else if (userAgent.includes('iPad8,')) detectedDevice = 'iPad Pro 11" (3rd gen)';
        else if (userAgent.match(/iPad.*Pro/i)) detectedDevice = 'iPad Pro';
        else if (userAgent.match(/iPad.*Air/i)) detectedDevice = 'iPad Air';
        else if (userAgent.match(/iPad.*Mini/i)) detectedDevice = 'iPad Mini';
        else detectedDevice = 'iPad';
      }
      // Android comprehensive detection
      else if (userAgent.match(/Android/i)) {
        // Samsung Galaxy detection
        if (userAgent.match(/SM-S90/i)) detectedDevice = 'Samsung Galaxy S22';
        else if (userAgent.match(/SM-S91/i)) detectedDevice = 'Samsung Galaxy S22+';
        else if (userAgent.match(/SM-S92/i)) detectedDevice = 'Samsung Galaxy S22 Ultra';
        else if (userAgent.match(/SM-S95/i)) detectedDevice = 'Samsung Galaxy S23';
        else if (userAgent.match(/SM-S96/i)) detectedDevice = 'Samsung Galaxy S23+';
        else if (userAgent.match(/SM-S98/i)) detectedDevice = 'Samsung Galaxy S23 Ultra';
        else if (userAgent.match(/SM-G99/i)) detectedDevice = 'Samsung Galaxy S24';
        else if (userAgent.match(/SM-G98/i)) detectedDevice = 'Samsung Galaxy S23';
        else if (userAgent.match(/SM-G97/i)) detectedDevice = 'Samsung Galaxy S22';
        else if (userAgent.match(/SM-G96/i)) detectedDevice = 'Samsung Galaxy S21';
        else if (userAgent.match(/SM-G95/i)) detectedDevice = 'Samsung Galaxy S20';
        else if (userAgent.match(/SM-G93/i)) detectedDevice = 'Samsung Galaxy S10';
        else if (userAgent.match(/SM-N98/i)) detectedDevice = 'Samsung Galaxy Note 20';
        else if (userAgent.match(/SM-A/i)) detectedDevice = 'Samsung Galaxy A Series';
        else if (userAgent.match(/SM-F/i)) detectedDevice = 'Samsung Galaxy Fold';
        
        // Google Pixel detection
        else if (userAgent.match(/Pixel 8 Pro/i)) detectedDevice = 'Google Pixel 8 Pro';
        else if (userAgent.match(/Pixel 8/i)) detectedDevice = 'Google Pixel 8';
        else if (userAgent.match(/Pixel 7a/i)) detectedDevice = 'Google Pixel 7a';
        else if (userAgent.match(/Pixel 7 Pro/i)) detectedDevice = 'Google Pixel 7 Pro';
        else if (userAgent.match(/Pixel 7/i)) detectedDevice = 'Google Pixel 7';
        else if (userAgent.match(/Pixel 6a/i)) detectedDevice = 'Google Pixel 6a';
        else if (userAgent.match(/Pixel 6 Pro/i)) detectedDevice = 'Google Pixel 6 Pro';
        else if (userAgent.match(/Pixel 6/i)) detectedDevice = 'Google Pixel 6';
        else if (userAgent.match(/Pixel 5/i)) detectedDevice = 'Google Pixel 5';
        else if (userAgent.match(/Pixel 4/i)) detectedDevice = 'Google Pixel 4';
        else if (userAgent.match(/Pixel 3/i)) detectedDevice = 'Google Pixel 3';
        else if (userAgent.match(/Pixel/i)) detectedDevice = 'Google Pixel';
        
        // OnePlus detection
        else if (userAgent.match(/OnePlus 12/i)) detectedDevice = 'OnePlus 12';
        else if (userAgent.match(/OnePlus 11/i)) detectedDevice = 'OnePlus 11';
        else if (userAgent.match(/OnePlus 10/i)) detectedDevice = 'OnePlus 10 Pro';
        else if (userAgent.match(/OnePlus 9/i)) detectedDevice = 'OnePlus 9 Pro';
        else if (userAgent.match(/OnePlus 8/i)) detectedDevice = 'OnePlus 8 Pro';
        else if (userAgent.match(/OnePlus/i)) detectedDevice = 'OnePlus';
        
        // Xiaomi detection
        else if (userAgent.match(/Mi 14/i)) detectedDevice = 'Xiaomi Mi 14';
        else if (userAgent.match(/Mi 13/i)) detectedDevice = 'Xiaomi Mi 13';
        else if (userAgent.match(/Mi 12/i)) detectedDevice = 'Xiaomi Mi 12';
        else if (userAgent.match(/Mi 11/i)) detectedDevice = 'Xiaomi Mi 11';
        else if (userAgent.match(/Redmi Note 13/i)) detectedDevice = 'Xiaomi Redmi Note 13';
        else if (userAgent.match(/Redmi Note 12/i)) detectedDevice = 'Xiaomi Redmi Note 12';
        else if (userAgent.match(/Redmi/i)) detectedDevice = 'Xiaomi Redmi';
        else if (userAgent.match(/POCO/i)) detectedDevice = 'Xiaomi POCO';
        else if (userAgent.match(/Xiaomi/i)) detectedDevice = 'Xiaomi';
        
        // Huawei detection
        else if (userAgent.match(/P60/i)) detectedDevice = 'Huawei P60 Pro';
        else if (userAgent.match(/P50/i)) detectedDevice = 'Huawei P50 Pro';
        else if (userAgent.match(/P40/i)) detectedDevice = 'Huawei P40 Pro';
        else if (userAgent.match(/Mate 50/i)) detectedDevice = 'Huawei Mate 50';
        else if (userAgent.match(/Mate 40/i)) detectedDevice = 'Huawei Mate 40';
        else if (userAgent.match(/Nova/i)) detectedDevice = 'Huawei Nova';
        else if (userAgent.match(/Honor/i)) detectedDevice = 'Honor';
        else if (userAgent.match(/Huawei/i)) detectedDevice = 'Huawei';
        
        // Other Android brands
        else if (userAgent.match(/Oppo/i)) detectedDevice = 'Oppo';
        else if (userAgent.match(/Vivo/i)) detectedDevice = 'Vivo';
        else if (userAgent.match(/Realme/i)) detectedDevice = 'Realme';
        else if (userAgent.match(/Motorola/i)) detectedDevice = 'Motorola';
        else if (userAgent.match(/Nokia/i)) detectedDevice = 'Nokia';
        else if (userAgent.match(/Sony/i)) detectedDevice = 'Sony Xperia';
        else if (userAgent.match(/LG/i)) detectedDevice = 'LG';
        else if (userAgent.match(/HTC/i)) detectedDevice = 'HTC';
        
        // Generic extraction attempt
        else {
          const modelMatch = userAgent.match(/Android.*?;\s*([^)]+)/);
          if (modelMatch && modelMatch[1]) {
            detectedDevice = modelMatch[1].trim().replace(/Build.*/, '').trim();
          } else {
            detectedDevice = 'Android Phone';
          }
        }
      }
      // Other mobile platforms
      else if (userAgent.match(/BlackBerry/i)) {
        detectedDevice = 'BlackBerry';
      } else if (userAgent.match(/Windows Phone/i)) {
        detectedDevice = 'Windows Phone';
      }
      // Desktop fallback
      else {
        if (userAgent.match(/Mac/i)) {
          if (userAgent.match(/iPhone|iPad/i)) {
            detectedDevice = 'iOS Device';
          } else {
            detectedDevice = 'MacBook';
          }
        } else if (userAgent.match(/Windows/i)) {
          detectedDevice = 'Windows PC';
        } else if (userAgent.match(/Linux/i)) {
          detectedDevice = 'Linux Computer';
        } else {
          detectedDevice = 'Unknown Device';
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
