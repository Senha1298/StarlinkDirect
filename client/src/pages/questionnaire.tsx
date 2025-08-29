import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Popup from '@/components/ui/popup';

const questions = [
  {
    id: 1,
    title: "DIRECT TO CELL",
    subtitle: "NO MONTHLY FEES",
    question: "Have you ever received unauthorized charges from your carrier?",
    options: [
      "Yes, multiple times!",
      "No, but I know someone who has",
      "Never"
    ],
    popupType: 'fees' as const
  },
  {
    id: 2,
    title: "WHAT'S YOUR BIGGEST",
    subtitle: "INTERNET FRUSTRATION?",
    question: "What has been your biggest frustration with internet plans?",
    options: [
      "Runs out too quickly",
      "I pay a lot and get very little", 
      "Always slow",
      "Never delivers what it promises"
    ],
    popupType: 'frustration' as const
  },
  {
    id: 3,
    title: "SIGNAL RELIABILITY",
    subtitle: "IN REMOTE AREAS",
    question: "Does your internet signal fail in open areas or during travel?",
    options: [
      "Always",
      "Sometimes",
      "No"
    ],
    popupType: 'signal' as const
  }
];

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [, setLocation] = useLocation();

  const handleAnswerClick = () => {
    setShowPopup(true);
  };

  const handleContinue = () => {
    setShowPopup(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setLocation('/device-detection');
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="min-h-screen pt-36 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
                {question.title}<br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  {question.subtitle}
                </span>
              </h1>
            </div>
            
            <div 
              className="professional-card rounded-sm p-8 mb-6 max-w-3xl mx-auto"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h2 className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-white/95" data-testid={`question-${currentQuestion + 1}`}>
                {question.question}
              </h2>
              
              <div className={`space-y-4 ${question.options.length === 4 ? 'md:grid md:grid-cols-2 md:gap-4 md:space-y-0' : ''}`}>
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={handleAnswerClick}
                    className={`w-full py-4 px-6 rounded-sm text-base font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                      index === 0 
                        ? 'starlink-button-primary' 
                        : 'starlink-button-secondary'
                    }`}
                    data-testid={`answer-${currentQuestion + 1}-${index + 1}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuestion 
                      ? 'bg-white shadow-lg' 
                      : index < currentQuestion 
                        ? 'bg-white/70' 
                        : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        type={question.popupType}
        onContinue={handleContinue}
      />
    </div>
  );
}
