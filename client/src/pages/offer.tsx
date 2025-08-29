import { motion } from 'framer-motion';
import { Check, Shield, Zap, Globe, Star } from 'lucide-react';
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
        domain: 'starpayments.myshopify.com',
        storefrontAccessToken: '0b635f4e01575574fca675f598cd3275',
      });
      
      ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        // Create component for unlimited plan ($19.90)
        ui.createComponent('product', {
          id: '7832854233167',
          node: document.getElementById('product-component-1756455560169'),
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
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#e6e6e6"
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6"
                  },
                  "border-radius": "2px",
                  "padding-left": "41px",
                  "padding-right": "41px",
                  "box-shadow": "0 0 20px rgba(255, 255, 255, 0.3)"
                }
              },
              "buttonDestination": "checkout",
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "ORDER UNLIMITED CHIP"
              },
              "googleFonts": [
                "Montserrat"
              ]
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
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#e6e6e6"
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6"
                  },
                  "border-radius": "2px",
                  "padding-left": "41px",
                  "padding-right": "41px"
                }
              },
              "googleFonts": [
                "Montserrat"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#e6e6e6"
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6"
                  },
                  "border-radius": "2px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Montserrat"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "background-color": "#ffffff",
                  ":hover": {
                    "background-color": "#e6e6e6"
                  },
                  ":focus": {
                    "background-color": "#e6e6e6"
                  }
                },
                "count": {
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000"
                  }
                },
                "iconPath": {
                  "fill": "#000000"
                }
              },
              "googleFonts": [
                "Montserrat"
              ]
            }
          },
        });
        
        // Create component for standard plan ($9.90)
        ui.createComponent('product', {
          id: '7832854134863',
          node: document.getElementById('product-component-1756456014831'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "width": "100%",
                  "text-align": "center"
                },
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#e6e6e6"
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6"
                  },
                  "border-radius": "2px",
                  "padding-left": "42px",
                  "padding-right": "42px",
                  "width": "100%",
                  "text-align": "center",
                  "margin": "0 auto",
                  "display": "block",
                  "box-sizing": "border-box",
                  "box-shadow": "0 0 20px rgba(255, 255, 255, 0.3)"
                }
              },
              "buttonDestination": "checkout",
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "ORDER STANDARD CHIP"
              },
              "googleFonts": [
                "Montserrat"
              ]
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
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#e6e6e6"
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6"
                  },
                  "border-radius": "2px",
                  "padding-left": "42px",
                  "padding-right": "42px"
                }
              },
              "googleFonts": [
                "Montserrat"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#e6e6e6"
                  },
                  "background-color": "#ffffff",
                  ":focus": {
                    "background-color": "#e6e6e6"
                  },
                  "border-radius": "2px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Montserrat"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "background-color": "#ffffff",
                  ":hover": {
                    "background-color": "#e6e6e6"
                  },
                  ":focus": {
                    "background-color": "#e6e6e6"
                  }
                },
                "count": {
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000"
                  }
                },
                "iconPath": {
                  "fill": "#000000"
                }
              },
              "googleFonts": [
                "Montserrat"
              ]
            }
          },
        });
      });
    };

    loadShopifyScript();
  }, []);

  // Both plans now use Shopify buttons - no manual handling needed

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      
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
                  
                  {plan.id === 'unlimited' ? (
                    <div className="w-full flex justify-center">
                      <div id="product-component-1756455560169" className="w-full max-w-full"></div>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center">
                      <div id="product-component-1756456014831" className="w-full max-w-full"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Reviews Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12"
            >
              <div className="glass-effect rounded-sm p-8 max-w-5xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-2 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : i === 4 ? 'fill-yellow-400/80 text-yellow-400' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-white" data-testid="rating-score">4.9</span>
                  <span className="text-white/70 ml-2">out of 5</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-8">What Our Customers Say</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Michael Thompson", location: "Austin, TX", comment: "Got my chip 3 weeks ago and haven't paid a single bill since! Amazing service, exactly as promised." },
                    { name: "Sarah Williams", location: "London, UK", comment: "I was skeptical at first, but it actually works! Free internet forever with just one payment. Best deal ever!" },
                    { name: "James Rodriguez", location: "Miami, FL", comment: "The survey took 2 minutes and I got my chip in 5 days. Now my family saves $80/month on internet bills." },
                    { name: "Emma Johnson", location: "Toronto, CA", comment: "Participated in the promotion last month. The chip arrived fast and setup was super easy. Zero monthly fees!" },
                    { name: "David Chen", location: "San Francisco, CA", comment: "I can't believe this is real! No more Comcast bills. The satellite connection is actually faster than my old provider." },
                    { name: "Lisa Anderson", location: "Sydney, AU", comment: "Best decision I made this year. One payment of $19.90 and free internet for life. My friends think I'm crazy!" },
                    { name: "Robert Miller", location: "Chicago, IL", comment: "The promotion seemed too good to be true, but here I am 2 months later with free unlimited internet. Amazing!" },
                    { name: "Jennifer Garcia", location: "Los Angeles, CA", comment: "Quick survey, fast delivery, and now I save hundreds per year. Starlink really delivered on their promise." },
                    { name: "Daniel Smith", location: "Manchester, UK", comment: "Got the chip through this promo. Works perfectly everywhere I go. Finally escaped monthly internet bills!" },
                    { name: "Michelle Brown", location: "Seattle, WA", comment: "I almost missed this promotion! So glad I found it. Free internet forever changed my budget completely." },
                    { name: "Christopher Davis", location: "Dublin, IE", comment: "Received my chip last week. The speed is incredible and the fact it's free forever blows my mind." },
                    { name: "Amanda Wilson", location: "Phoenix, AZ", comment: "This promotion is legitimate! I've had free internet for 6 weeks now. No hidden fees, no surprises." }
                  ].map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="bg-black/20 rounded-sm p-4 border border-white/10"
                      data-testid={`review-${index}`}
                    >
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-white/90 text-sm mb-3 italic">"{review.comment}"</p>
                      <div className="text-right">
                        <p className="font-semibold text-white text-sm">{review.name}</p>
                        <p className="text-white/60 text-xs">{review.location}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

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
