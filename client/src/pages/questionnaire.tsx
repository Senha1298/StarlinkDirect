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
      
      <section className="min-h-screen pt-20 flex items-center justify-center starlink-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto fade-in"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {question.title}<br />
              <span className="text-accent">{question.subtitle}</span>
            </h1>
            
            <div className="bg-card rounded-lg p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid={`question-${currentQuestion + 1}`}>
                {question.question}
              </h2>
              
              <div className={`space-y-4 ${question.options.length === 4 ? 'md:grid md:grid-cols-2 md:gap-4 md:space-y-0' : ''}`}>
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={handleAnswerClick}
                    className={`w-full py-4 px-6 rounded-lg text-lg font-medium transition-all transform hover:scale-[1.02] ${
                      index === 0 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                    }`}
                    data-testid={`answer-${currentQuestion + 1}-${index + 1}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
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
