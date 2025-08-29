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
            className="bg-card border border-border rounded-2xl p-8 max-w-md mx-4"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <IconComponent className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`popup-title-${type}`}>
                {content.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`popup-description-${type}`}>
                {content.description}
              </p>
              <button
                onClick={onContinue}
                className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-lg text-lg font-medium hover:bg-accent/90 transition-colors"
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
