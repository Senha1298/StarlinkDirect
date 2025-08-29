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
      
      <section className="min-h-screen pt-20 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto fade-in"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              LOCATION VERIFICATION<br />
              <span className="text-accent">SERVICE AVAILABILITY</span>
            </h1>
            
            <div className="bg-card rounded-lg p-8 mb-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                  <MapPin className="w-16 h-16" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6" data-testid="location-question">
                Confirm your location
              </h2>
              
              <p className="text-xl mb-8 text-muted-foreground" data-testid="detected-location">
                {isLoading 
                  ? "Detecting your location..." 
                  : error 
                    ? `${location?.formatted} (${error})`
                    : location?.formatted || "Location not available"
                }
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={handleConfirm}
                  className="bg-accent text-accent-foreground py-3 px-8 rounded-lg text-lg font-medium hover:bg-accent/90 transition-all transform hover:scale-[1.02]"
                  data-testid="button-confirm-location"
                  disabled={isLoading}
                >
                  YES, THAT'S CORRECT
                </button>
                <button
                  onClick={handleConfirm}
                  className="bg-secondary text-secondary-foreground py-3 px-8 rounded-lg text-lg font-medium hover:bg-secondary/90 transition-all transform hover:scale-[1.02]"
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
