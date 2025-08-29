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
      
      <section className="min-h-screen pt-24 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                100% COMPATIBLE<br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  CHOOSE YOUR PLAN
                </span>
              </h1>
              
              <p className="text-2xl text-white/80 mb-12 font-medium" data-testid="compatibility-message">
                Your device and location are fully compatible with Starlink Direct to Cell technology
              </p>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: plan.id === 'unlimited' ? 0.2 : 0, ease: "easeOut" }}
                  className={`professional-card rounded-3xl p-10 relative transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl ${
                    plan.popular ? 'ring-2 ring-white/30' : ''
                  }`}
                  data-testid={`plan-${plan.id}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-white/95" data-testid={`plan-name-${plan.id}`}>
                      {plan.name}
                    </h3>
                    <div className="text-6xl font-bold text-white mb-3" data-testid={`plan-price-${plan.id}`}>
                      {plan.price}
                    </div>
                    <p className="text-lg text-white/70 font-medium" data-testid={`plan-description-${plan.id}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="space-y-5 mb-10">
                    {plan.features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-center" data-testid={`feature-${plan.id}-${index}`}>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-lg text-white/90 font-medium">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => handleOrderClick(plan.id)}
                    className="w-full starlink-button-primary py-5 px-8 rounded-2xl text-lg font-bold tracking-wide"
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
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center glass-effect rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <p className="text-lg text-white/90 mb-6 font-medium" data-testid="guarantee-text">
                30-day money-back guarantee • Free worldwide shipping
              </p>
              <div className="flex justify-center space-x-8 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span data-testid="secure-payment">Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span data-testid="fast-delivery">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span data-testid="global-support">Global Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
