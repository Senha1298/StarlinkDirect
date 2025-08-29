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
                DEVICE VERIFICATION<br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  COMPATIBILITY CHECK
                </span>
              </h1>
            </div>
            
            <div className="professional-card rounded-3xl p-12 mb-8">
              <div className="mb-10">
                <div className="w-40 h-40 mx-auto mb-8 glass-effect rounded-3xl flex items-center justify-center">
                  <Smartphone className="w-20 h-20 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium mb-8 text-white/95" data-testid="device-question">
                Is this your device?
              </h2>
              
              <p className="text-2xl mb-12 font-medium text-white/80" data-testid="detected-device">
                {isLoading ? "Detecting device..." : device}
              </p>
              
              <div className="flex gap-6 justify-center flex-wrap">
                <button
                  onClick={handleConfirm}
                  className="starlink-button-primary py-4 px-10 rounded-2xl text-lg font-medium"
                  data-testid="button-confirm-device"
                  disabled={isLoading}
                >
                  YES, THAT'S CORRECT
                </button>
                <button
                  onClick={handleConfirm}
                  className="starlink-button-secondary py-4 px-10 rounded-2xl text-lg font-medium"
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
