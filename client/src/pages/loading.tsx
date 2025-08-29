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
      
      <section className="min-h-screen pt-20 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto fade-in"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              CHECKING COMPATIBILITY<br />
              <span className="text-accent">PLEASE WAIT</span>
            </h1>
            
            <div className="bg-card rounded-lg p-12 mb-8">
              <div className="w-16 h-16 loading-spinner mx-auto mb-8" data-testid="loading-spinner"></div>
              
              <p className="text-xl text-muted-foreground mb-4" data-testid="loading-description">
                Verifying device compatibility with Starlink Direct to Cell...
              </p>
              
              <div className="w-full bg-secondary rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="bg-accent h-2 rounded-full"
                  data-testid="progress-bar"
                />
              </div>
              
              <p className="text-sm text-muted-foreground" data-testid="loading-message">
                {loadingMessages[messageIndex] || loadingMessages[0]}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
