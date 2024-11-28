import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { tutorials } from '../../data/tutorials';
import type { Tutorial } from '../../types/game';

interface TutorialScreenProps {
  onClose: () => void;
}

export default function TutorialScreen({ onClose }: TutorialScreenProps) {
  const [currentTutorial] = useState<Tutorial>(tutorials[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  const currentStep = currentTutorial.steps[currentStepIndex];
  const isLastStep = currentStepIndex === currentTutorial.steps.length - 1;
  
  const handleNext = () => {
    if (isLastStep) {
      onClose();
    } else {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };
  
  const handlePrevious = () => {
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden">
        <div className="relative">
          <img
            src={currentStep.image}
            alt={currentStep.content}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {currentTutorial.title}
          </h2>
          <p className="text-gray-600 mb-8">{currentStep.content}</p>
          
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentStepIndex === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </button>
            
            <div className="flex gap-2">
              {currentTutorial.steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentStepIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white"
            >
              {isLastStep ? 'Start Game' : 'Next'}
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}