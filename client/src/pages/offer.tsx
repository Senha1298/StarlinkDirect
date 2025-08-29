import { motion } from 'framer-motion';
import { Check, Shield, Zap, Globe } from 'lucide-react';
import { useEffect } from 'react';
import Header from '@/components/header';

// Declare global ShopifyBuy types
declare global {
  interface Window {
    ShopifyBuy?: any;
  }
  const ShopifyBuy: any;
}

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
  useEffect(() => {
    // Load Shopify Buy Button script for unlimited plan
    const loadShopifyScript = () => {
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          initShopifyBuyButton();
        } else {
          return;
        }
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        document.head.appendChild(script);
        script.onload = initShopifyBuyButton;
      }
    };

    const initShopifyBuyButton = () => {
      const client = ShopifyBuy.buildClient({
        domain: 'wfgxax-00.myshopify.com',
        storefrontAccessToken: '0b635f4e01575574fca675f598cd3275',
      });
      
      ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent('product', {
          id: '7832854233167',
          node: document.getElementById('product-component-1756454170311'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "padding-left": "81px",
                  "padding-right": "81px"
                }
              },
              "buttonDestination": "checkout",
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "Buy now"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "padding-left": "81px",
                  "padding-right": "81px"
                }
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  ":hover": {
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  }
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                }
              }
            }
          },
        });
      });
    };

    loadShopifyScript();
  }, []);

  const handleOrderClick = (planId: string) => {
    if (planId === 'unlimited') {
      // Trigger Shopify buy button for unlimited plan (goes direct to checkout)
      const triggerShopifyCheckout = () => {
        const shopifyButton = document.querySelector('#product-component-1756454170311 [data-element="product.button"]') as HTMLButtonElement;
        if (shopifyButton) {
          console.log('Clicando no botão do Shopify...');
          shopifyButton.click();
        } else {
          // Fallback: try any button in the Shopify component
          const anyButton = document.querySelector('#product-component-1756454170311 button') as HTMLButtonElement;
          if (anyButton) {
            console.log('Clicando no botão alternativo do Shopify...');
            anyButton.click();
          } else {
            console.log('Botão do Shopify não encontrado, carregando diretamente...');
            // Fallback direto para o checkout
            window.location.href = 'https://wfgxax-00.myshopify.com/cart/7832854233167:1';
          }
        }
      };
      
      // Wait a bit more for Shopify to fully load
      setTimeout(triggerShopifyCheckout, 1000);
    } else {
      // Keep existing behavior for standard plan
      const checkoutUrls = {
        'standard': 'https://starpayments.myshopify.com/checkouts/cn/hWN2LlpATXC5StXJDyAB240I'
      };
      
      const url = checkoutUrls[planId as keyof typeof checkoutUrls];
      if (url) {
        window.open(url, '_blank');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hidden Shopify component for unlimited plan */}
      <div id="product-component-1756454170311" style={{ display: 'none' }}></div>
      
      <section className="min-h-screen pt-36 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
                100% COMPATIBLE<br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  CHOOSE YOUR PLAN
                </span>
              </h1>
              
              <p className="text-lg text-white/80 mb-8 font-medium" data-testid="compatibility-message">
                Your device and location are fully compatible with Starlink Direct to Cell technology
              </p>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: plan.id === 'unlimited' ? 0.2 : 0, ease: "easeOut" }}
                  className={`rounded-sm p-8 relative transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl ${
                    plan.popular ? 'ring-2 ring-white/30' : ''
                  }`}
                  style={{
                    backgroundColor: '#000000 !important',
                    opacity: '1 !important',
                    border: '2px solid #ffffff',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)'
                  }}
                  data-testid={`plan-${plan.id}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-sm text-xs font-bold tracking-wide shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-white/95" data-testid={`plan-name-${plan.id}`}>
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-white mb-2" data-testid={`plan-price-${plan.id}`}>
                      {plan.price}
                    </div>
                    <p className="text-base text-white/70 font-medium" data-testid={`plan-description-${plan.id}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-center" data-testid={`feature-${plan.id}-${index}`}>
                          <div className="w-6 h-6 rounded-sm bg-white/10 flex items-center justify-center mr-3">
                            <IconComponent className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-base text-white/90 font-medium">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => handleOrderClick(plan.id)}
                    className="w-full starlink-button-primary py-4 px-6 rounded-sm text-base font-bold tracking-wide"
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
              className="text-center glass-effect rounded-sm p-6 max-w-2xl mx-auto"
            >
              <p className="text-base text-white/90 mb-4 font-medium" data-testid="guarantee-text">
                30-day money-back guarantee • Free worldwide shipping
              </p>
              <div className="flex justify-center space-x-6 text-sm text-white/80">
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
