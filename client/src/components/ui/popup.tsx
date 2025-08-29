import { motion, AnimatePresence } from "framer-motion";
import { Check, Signal, Shield, Star, Gift } from "lucide-react";
import { useState } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'fees' | 'frustration' | 'signal' | 'rating' | 'promotion';
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
  },
  rating: {
    icon: Star,
    title: "RATE YOUR EXPERIENCE",
    description: "How would you rate Starlink so far? Your feedback helps us improve our service."
  },
  promotion: {
    icon: Gift,
    title: "CONGRATULATIONS!",
    description: "You've won our promotion! You'll receive a FREE Starlink chip with internet access. Continue to claim your prize!"
  }
};

function StarRating({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) {
  return (
    <div className="flex justify-center space-x-2 mb-6" data-testid="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRatingChange(star)}
          className="w-8 h-8 transition-all duration-200 hover:scale-110"
          data-testid={`star-${star}`}
        >
          <Star 
            className={`w-8 h-8 transition-colors ${
              star <= rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-white/30 hover:text-white/50'
            }`} 
          />
        </button>
      ))}
    </div>
  );
}

export default function Popup({ isOpen, onClose, type, onContinue }: PopupProps) {
  const [rating, setRating] = useState(1);
  const content = popupContent[type];
  const IconComponent = content.icon;

  const handleRatingContinue = () => {
    if (rating > 0) {
      onContinue();
    }
  };

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
              <div className="w-16 h-16 bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" 
                style={{
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.3)'
                }}
              >
                <IconComponent className="w-8 h-8 text-gray-800 drop-shadow-sm" style={{
                  filter: 'brightness(1.2) contrast(1.1)'
                }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`popup-title-${type}`}>
                {content.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`popup-description-${type}`}>
                {content.description}
              </p>
              
              {type === 'rating' && (
                <StarRating rating={rating} onRatingChange={setRating} />
              )}
              
              <button
                onClick={type === 'rating' ? handleRatingContinue : onContinue}
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
