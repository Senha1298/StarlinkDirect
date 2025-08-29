import { motion, AnimatePresence } from "framer-motion";
import { Check, Signal, Shield } from "lucide-react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'fees' | 'frustration' | 'signal';
  onContinue: () => void;
}

const popupContent = {
  fees: {
    icon: Check,
    title: "NO HIDDEN FEES",
    description: "With Starlink Direct to Cell, you pay only a one-time fee. No monthly bills, no surprises on your statement."
  },
  frustration: {
    icon: Signal,
    title: "STARLINK IS DIFFERENT", 
    description: "Our satellite network provides consistent high-speed internet globally. Pay once, use forever. No data limits or speed throttling."
  },
  signal: {
    icon: Shield,
    title: "GLOBAL COVERAGE",
    description: "Starlink's satellite constellation provides reliable connectivity anywhere on Earth. No more signal drops in remote areas."
  }
};

export default function Popup({ isOpen, onClose, type, onContinue }: PopupProps) {
  const content = popupContent[type];
  const IconComponent = content.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 popup-backdrop flex items-center justify-center"
          data-testid={`popup-${type}`}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card border border-border rounded-sm p-8 max-w-md mx-4"
          >
            <div className="text-center">
              <div className="relative mx-auto mb-6 w-16 h-16">
                {/* Sombra brilhante animada atrás */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.8)) drop-shadow(0 0 60px rgba(255,255,255,0.4)) drop-shadow(0 0 90px rgba(255,255,255,0.2))'
                  }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Ícone estático */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-full flex items-center justify-center shadow-lg" 
                  style={{
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  <IconComponent className="w-8 h-8 text-gray-800 drop-shadow-sm" style={{
                    filter: 'brightness(1.2) contrast(1.1)'
                  }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`popup-title-${type}`}>
                {content.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`popup-description-${type}`}>
                {content.description}
              </p>
              <button
                onClick={onContinue}
                className="w-full bg-white text-black py-3 px-6 rounded-sm text-lg font-medium hover:bg-gray-100 transition-colors"
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)'
                }}
                data-testid={`button-continue-${type}`}
              >
                CONTINUE
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
