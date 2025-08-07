import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SpecialEventCardProps {
  sessionNumber: number;
  date: string;
  venue: string;
  time: string;
  agenda?: string;
  isCompleted?: boolean;
}

const SpecialEventCard: React.FC<SpecialEventCardProps> = ({ 
  sessionNumber, 
  date, 
  venue, 
  time, 
  agenda,
  isCompleted = false
}) => {
  // Google Form URL - replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://forms.gle/nNZMV4qEXW6W8xDWA";

  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className={`w-full max-w-lg md:max-w-xl lg:w-[32rem] h-auto bg-neutral-800 rounded-3xl text-neutral-300 p-4 md:p-6 flex flex-col items-start justify-center gap-4 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-auto ${
      isCompleted ? 'hover:shadow-green-400' : 'hover:shadow-cyan-400'
    }`}>
      <div className="flex-1 w-full">
        {/* Session Header with Status */}
        <div className="flex items-center justify-between mb-4">
          <p className="font-extrabold text-xl text-white">Session-{sessionNumber}</p>
          <div className={`px-3 py-1 rounded-full ${
            isCompleted 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-600'
          }`}>
            <span className="text-white text-xs font-semibold">
              {isCompleted ? 'COMPLETED' : 'UPCOMING'}
            </span>
          </div>
        </div>
        
        <div className="space-y-2 text-sm mb-3">
          <p className="text-cyan-400 font-semibold">📅 {date}</p>
          <p className="text-gray-300">📍 {venue}</p>
          <p className="text-gray-300">⏰ {time}</p>
        </div>
        {agenda && (
          <div className="mt-3">
            <p className="text-cyan-400 font-semibold text-sm mb-2">🎯 Agenda:</p>
            <div className="text-gray-300 text-sm leading-relaxed">
              {agenda.split('•').map((item, index) => {
                if (!item.trim()) return null;
                
                let content = item.trim();
                
                // Make Batch-1, Batch-2, and NOTE bold
                content = content.replace(/(Batch-1:)/g, '<strong>$1</strong>');
                content = content.replace(/(Batch-2:)/g, '<strong>$1</strong>');
                content = content.replace(/(\*\*NOTE:)/g, '<strong>$1</strong>');
                
                // Add extra spacing for Batch-2 and NOTE sections
                const extraSpacing = content.includes('Batch-2:') || content.includes('**NOTE:') ? 'mt-4' : 'mb-1';
                
                return (
                  <div key={index} className={extraSpacing} dangerouslySetInnerHTML={{ __html: content }} />
                );
              })}
            </div>
          </div>
        )}
      </div>
      
      {/* Register Button - Only show for upcoming events */}
      {!isCompleted && (
        <button 
          onClick={handleRegisterClick}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 font-extrabold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white flex items-center justify-center space-x-2 group"
        >
          <span>Register Now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      )}
    </div>
  );
};

export default SpecialEventCard;
