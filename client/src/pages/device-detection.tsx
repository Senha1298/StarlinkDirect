import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/header';

export default function DeviceDetection() {
  const [, setLocation] = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [isCompatible, setIsCompatible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecking(false);
      setIsCompatible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setLocation('/location-detection');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="min-h-screen pt-36 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
                DEVICE VERIFICATION<br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  COMPATIBILITY CHECK
                </span>
              </h1>
            </div>
            
            <div 
              className="professional-card rounded-sm p-8 mb-6"
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="mb-8">
                <Smartphone className="w-16 h-16 text-white mx-auto mb-6" />
              </div>
              
              {isChecking ? (
                <>
                  <div className="w-8 h-8 loading-spinner mx-auto mb-6"></div>
                  <p className="text-lg mb-8 font-medium text-white/80" data-testid="checking-status">
                    Checking if your device is compatible with our chip...
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/95" data-testid="compatibility-result">
                    ✓ Your device is compatible!
                  </h2>
                  
                  <p className="text-lg mb-8 font-medium text-white/80">
                    Great! Your device supports our satellite chip technology.
                  </p>
                  
                  <button
                    onClick={handleContinue}
                    className="starlink-button-primary py-3 px-6 rounded-sm text-base font-medium"
                    data-testid="button-continue"
                  >
                    CONTINUE
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
