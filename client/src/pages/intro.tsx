import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Wifi, Phone, Clock, Shield } from 'lucide-react';
import Header from '@/components/header';

export default function Intro() {
  const [, navigate] = useLocation();

  const handleStart = () => {
    navigate('/questionnaire');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="min-h-screen pt-36 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="https://apppos.lat/wp-content/uploads/2025/07/El-futuro-de-la-conexion-ha-llegado-para-TI.jpg" 
                alt="Starlink Satellite Internet" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                data-testid="promo-image"
              />
            </motion.div>

            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-xl md:text-2xl font-bold mb-6 leading-tight tracking-tight text-white">
                Answer our short survey and get a chance to join the revolution with satellite internet!
              </h1>
              
              {/* Benefits */}
              <div className="space-y-3 mb-8 text-base max-w-md mx-auto">
                <div className="flex items-center text-left space-x-3">
                  <Wifi className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 font-medium" data-testid="benefit-internet">
                    Unlimited Satellite Internet
                  </span>
                </div>
                
                <div className="flex items-center text-left space-x-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 font-medium" data-testid="benefit-calls">
                    Unlimited Calls and SMS
                  </span>
                </div>
                
                <div className="flex items-center text-left space-x-3">
                  <Clock className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 font-medium" data-testid="benefit-time">
                    Just 2 minutes of your time
                  </span>
                </div>
                
                <div className="flex items-center text-left space-x-3">
                  <Shield className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 font-medium" data-testid="benefit-commitment">
                    No Commitment – No personal information required
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Start Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <button
                onClick={handleStart}
                className="starlink-button-primary px-12 py-4 text-lg font-bold tracking-wide rounded-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-testid="button-start-survey"
              >
                START
              </button>
            </motion.div>

            {/* Fine Print */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-xs text-white/70 italic" data-testid="offer-disclaimer">
                * Offer valid only for the first 50 participants. Your discount will be guaranteed at the end of the survey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}