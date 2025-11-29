import React from 'react';
import { Star } from 'lucide-react';

interface SpecialEvent {
  title: string;
  date: string;
  venue: string;
  agenda: string;
  time: string;
  imageSrc?: string;
  registrationLink?: string | null;
}

interface SpecialEventCardProps {
  event: SpecialEvent;
  isCompleted?: boolean;
}

const SpecialEventCard: React.FC<SpecialEventCardProps> = ({ event, isCompleted = false }) => {
  const handleLocalRegister = () => {
    if (event.registrationLink) {
      window.open(event.registrationLink, '_blank');
      return;
    }
    const name = window.prompt('Enter your name to register for this session:');
    if (name && name.trim()) {
      window.alert(`Thanks ${name.trim()} — we've recorded your interest!`);
    }
  };

  return (
    <div className={`w-full max-w-lg md:max-w-xl lg:w-[32rem] ${isCompleted ? 'min-h-[150px]' : 'min-h-[320px]'} bg-gray-900/40 backdrop-blur-xl border border-yellow-500/30 rounded-3xl text-neutral-300 p-4 md:p-6 flex flex-col items-start justify-center gap-4 hover:bg-gray-900/60 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-auto relative overflow-hidden group ${
      isCompleted ? 'hover:shadow-green-400' : 'hover:shadow-yellow-500/20'
    }`}>
      
      {/* Golden Glow Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl group-hover:bg-yellow-500/30 transition-all duration-500"></div>

      {/* Image Section */}
      {event.imageSrc && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4 relative">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img
            src={event.imageSrc}
            alt={event.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-600 text-white font-bold text-lg rounded-2xl">
                  📸 ${event.title}
                </div>
              `;
            }}
          />
        </div>
      )}

      <div className="w-full relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">
            {event.title}
          </h2>
          {isCompleted && (
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
              Completed
            </span>
          )}
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300">
            <span className="font-semibold w-16 text-yellow-500">Date:</span>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="font-semibold w-16 text-yellow-500">Time:</span>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="font-semibold w-16 text-yellow-500">Venue:</span>
            <span>{event.venue}</span>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5 mb-6">
          <h3 className="text-yellow-400 font-semibold mb-2">Agenda:</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {event.agenda}
          </p>
        </div>

        {!isCompleted && (
          <button
            onClick={handleLocalRegister}
            className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
          >
            Register Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SpecialEventCard;
