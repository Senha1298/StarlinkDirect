import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import Header from '@/components/header';
import { useDeviceDetection } from '@/hooks/use-device-detection';

export default function DeviceDetection() {
  const [, setLocation] = useLocation();
  const { device, isLoading } = useDeviceDetection();

  const handleConfirm = () => {
    setLocation('/location-detection');
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
              DEVICE VERIFICATION<br />
              <span className="text-accent">COMPATIBILITY CHECK</span>
            </h1>
            
            <div className="bg-card rounded-lg p-8 mb-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-secondary rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-16 h-16" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6" data-testid="device-question">
                Is this your device?
              </h2>
              
              <p className="text-xl mb-8 text-muted-foreground" data-testid="detected-device">
                {isLoading ? "Loading device information..." : device}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={handleConfirm}
                  className="bg-accent text-accent-foreground py-3 px-8 rounded-lg text-lg font-medium hover:bg-accent/90 transition-all transform hover:scale-[1.02]"
                  data-testid="button-confirm-device"
                  disabled={isLoading}
                >
                  YES, THAT'S CORRECT
                </button>
                <button
                  onClick={handleConfirm}
                  className="bg-secondary text-secondary-foreground py-3 px-8 rounded-lg text-lg font-medium hover:bg-secondary/90 transition-all transform hover:scale-[1.02]"
                  data-testid="button-different-device"
                  disabled={isLoading}
                >
                  NO, DIFFERENT DEVICE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
