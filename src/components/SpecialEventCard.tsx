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
  const GOOGLE_FORM_URL = "#";

  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className={`w-full max-w-lg md:max-w-xl lg:w-[32rem] ${isCompleted ? 'min-h-[150px]' : 'min-h-[320px]'} bg-neutral-800 rounded-3xl text-neutral-300 p-4 md:p-6 flex flex-col items-start justify-center gap-4 hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-auto ${
      isCompleted ? 'hover:shadow-green-400' : 'hover:shadow-cyan-400'
    }`}>
      
      {/* Image Section for Session 4 (Featured Event) */}
      {sessionNumber === 4 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img 
            src="https://content3.jdmagicbox.com/v2/comp/coimbatore/a6/0422px422.x422.190814132155.j3a6/catalogue/prs-ground-p-n-palayam-coimbatore-sports-ground-RUL7trBSGZ.jpg" 
            alt="PRS Ground" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 PRS Ground
                </div>
              `;
            }}
          />
        </div>
      )}

      {/* Image Section for Session 5 (Featured Event) */}
      {sessionNumber === 5 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img 
            src="/images/zone2.png" 
            alt="Race Course Zone 2" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Race Course Zone 2
                </div>
              `;
            }}
          />
        </div>
      )}
      
      {/* Image Section for Session 7 (Featured Event) */}
      {sessionNumber === 7 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img 
            src="/images/thogai.png" 
            alt="Thogaimalai" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Thogaimalai
                </div>
              `;
            }}
          />
        </div>
      )}

      {/* Image Section for Session 8 (Featured Event) */}
      {sessionNumber === 8 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img 
            src="/images/turf.png" 
            alt="Herkley's turf" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Herkley's turf
                </div>
              `;
            }}
          />
        </div>
      )}

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
          {!isCompleted && <p className="text-gray-300">⏰ {time}</p>}
        </div>
        {agenda && !isCompleted && (
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
        <>
          {sessionNumber === 9 ? (
            <div className="w-full bg-gradient-to-r from-gray-600 to-gray-700 font-extrabold py-3 px-6 rounded-xl text-white flex items-center justify-center">
              <span>Registrations opening soon !</span>
            </div>
          ) : (
            <button 
              onClick={handleRegisterClick}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 font-extrabold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white flex items-center justify-center space-x-2 group"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SpecialEventCard;
