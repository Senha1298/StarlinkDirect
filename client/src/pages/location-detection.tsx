import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Header from '@/components/header';
import { useLocationDetection } from '@/hooks/use-location-detection';

export default function LocationDetection() {
  const [, setLocation] = useLocation();
  const { location, isLoading, error } = useLocationDetection();

  const handleConfirm = () => {
    setLocation('/loading');
  };

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
                LOCATION VERIFICATION<br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  SERVICE AVAILABILITY
                </span>
              </h1>
            </div>
            
            <div className="professional-card rounded-3xl p-12 mb-8">
              <div className="mb-10">
                <div className="w-40 h-40 mx-auto mb-8 glass-effect rounded-full flex items-center justify-center">
                  <MapPin className="w-20 h-20 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium mb-8 text-white/95" data-testid="location-question">
                Confirm your location
              </h2>
              
              <p className="text-2xl mb-12 font-medium text-white/80" data-testid="detected-location">
                {isLoading 
                  ? "Detecting your location..." 
                  : error 
                    ? `${location?.formatted} (${error})`
                    : location?.formatted || "Location not available"
                }
              </p>
              
              <div className="flex gap-6 justify-center flex-wrap">
                <button
                  onClick={handleConfirm}
                  className="starlink-button-primary py-4 px-10 rounded-2xl text-lg font-medium"
                  data-testid="button-confirm-location"
                  disabled={isLoading}
                >
                  YES, THAT'S CORRECT
                </button>
                <button
                  onClick={handleConfirm}
                  className="starlink-button-secondary py-4 px-10 rounded-2xl text-lg font-medium"
                  data-testid="button-different-location"
                  disabled={isLoading}
                >
                  DIFFERENT LOCATION
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
