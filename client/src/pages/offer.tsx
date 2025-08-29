import { motion } from 'framer-motion';
import { Check, Shield, Zap, Globe } from 'lucide-react';
import Header from '@/components/header';

const plans = [
  {
    id: 'standard',
    name: 'STANDARD PLAN',
    price: '$9.90',
    description: 'One-time payment • No monthly fees',
    features: [
      { icon: Zap, text: '10GB High-Speed Data' },
      { icon: Globe, text: 'Global Coverage' },
      { icon: Shield, text: 'No Hidden Fees' },
      { icon: Check, text: 'Lifetime Access' }
    ],
    buttonText: 'ORDER STANDARD CHIP',
    popular: false
  },
  {
    id: 'unlimited',
    name: 'UNLIMITED PLAN',
    price: '$19.90',
    description: 'One-time payment • No monthly fees',
    features: [
      { icon: Zap, text: 'Unlimited High-Speed Data' },
      { icon: Globe, text: 'Global Coverage' },
      { icon: Shield, text: 'Priority Network Access' },
      { icon: Check, text: 'Lifetime Access' }
    ],
    buttonText: 'ORDER UNLIMITED CHIP',
    popular: true
  }
];

export default function Offer() {
  const handleOrderClick = (planId: string) => {
    console.log(`Ordering ${planId} plan`);
    // Here you would typically redirect to payment or handle the order
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
            className="max-w-6xl mx-auto fade-in"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              100% COMPATIBLE<br />
              <span className="text-accent">CHOOSE YOUR PLAN</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12" data-testid="compatibility-message">
              Your device and location are fully compatible with Starlink Direct to Cell technology
            </p>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: plan.id === 'unlimited' ? 0.2 : 0 }}
                  className={`bg-card rounded-2xl p-8 relative transition-all transform hover:scale-[1.02] ${
                    plan.popular ? 'border-2 border-accent' : 'border border-border hover:border-accent'
                  }`}
                  data-testid={`plan-${plan.id}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2" data-testid={`plan-name-${plan.id}`}>
                      {plan.name}
                    </h3>
                    <div className="text-5xl font-bold text-accent mb-2" data-testid={`plan-price-${plan.id}`}>
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground" data-testid={`plan-description-${plan.id}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-center" data-testid={`feature-${plan.id}-${index}`}>
                          <IconComponent className="w-5 h-5 text-accent mr-3" />
                          <span>{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => handleOrderClick(plan.id)}
                    className="w-full bg-accent text-accent-foreground py-4 px-6 rounded-lg text-lg font-medium hover:bg-accent/90 transition-all transform hover:scale-[1.02]"
                    data-testid={`button-order-${plan.id}`}
                  >
                    {plan.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground mb-4" data-testid="guarantee-text">
                30-day money-back guarantee • Free worldwide shipping
              </p>
              <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
                <span data-testid="secure-payment">🛡️ Secure Payment</span>
                <span data-testid="fast-delivery">🚀 Fast Delivery</span>
                <span data-testid="global-support">🌍 Global Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
