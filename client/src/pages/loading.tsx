import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import Header from '@/components/header';

const loadingMessages = [
  'Initializing satellite connection protocols...',
  'Verifying device compatibility matrix...',
  'Checking regional service availability...',
  'Finalizing connection parameters...'
];

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 25;
        
        if (newProgress < 100) {
          setMessageIndex(Math.floor(newProgress / 25));
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setLocation('/offer');
          }, 500);
        }
        
        return newProgress;
      });
    }, 750); // 3 seconds total (750ms * 4)

    return () => clearInterval(interval);
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="min-h-screen pt-24 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                CHECKING COMPATIBILITY<br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  PLEASE WAIT
                </span>
              </h1>
            </div>
            
            <div className="professional-card rounded-3xl p-16 mb-8">
              <div className="w-20 h-20 loading-spinner mx-auto mb-12" data-testid="loading-spinner"></div>
              
              <p className="text-2xl text-white/90 mb-8 font-medium" data-testid="loading-description">
                Verifying device compatibility with Starlink Direct to Cell...
              </p>
              
              <div className="w-full bg-black/30 rounded-full h-3 mb-8 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-gradient-to-r from-white to-gray-200 h-3 rounded-full shadow-lg"
                  data-testid="progress-bar"
                />
              </div>
              
              <p className="text-lg text-white/70 font-medium" data-testid="loading-message">
                {loadingMessages[messageIndex] || loadingMessages[0]}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
