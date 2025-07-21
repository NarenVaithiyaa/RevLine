import React from 'react';

interface SpecialEventCardProps {
  sessionNumber: number;
  date: string;
  venue: string;
  time: string;
  agenda?: string;
}

const SpecialEventCard: React.FC<SpecialEventCardProps> = ({ 
  sessionNumber, 
  date, 
  venue, 
  time, 
  agenda 
}) => {
  // Google Form URL - replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://forms.gle/7GPKJmWkhrze2YQp8";

  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="w-full max-w-sm md:max-w-md lg:w-96 h-auto md:h-[500px] bg-neutral-800 rounded-3xl text-neutral-300 p-4 md:p-6 flex flex-col items-start justify-center gap-4 hover:bg-gray-900 hover:shadow-2xl hover:shadow-cyan-400 transition-all duration-300 transform hover:scale-105 mx-auto">
      <div className="w-full h-40 md:h-48 bg-cyan-300 rounded-2xl overflow-hidden">
        <img 
          src="/images/zone2.png" 
          alt="Zone-2 Race Course" 
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Image failed to load from public directory');
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.innerHTML = `
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-gray-800 font-bold text-lg">
                Zone-2 Race Course
              </div>
            `;
          }}
        />
      </div>
      
      <div className="flex-1 w-full">
        <p className="font-extrabold text-xl text-white mb-3">Session-{sessionNumber}</p>
        <div className="space-y-2 text-sm mb-3">
          <p className="text-cyan-400 font-semibold">📅 {date}</p>
          <p className="text-gray-300">📍 {venue}</p>
          <p className="text-gray-300">⏰ {time}</p>
        </div>
        {agenda && (
          <div className="mt-3">
            <p className="text-cyan-400 font-semibold text-sm mb-2">🎯 Agenda:</p>
            <p className="text-gray-300 text-sm leading-relaxed">{agenda}</p>
          </div>
        )}
      </div>
      
      <button 
        onClick={handleRegisterClick}
        className="w-full bg-cyan-600 font-extrabold py-3 px-6 rounded-xl hover:bg-cyan-500 transition-colors text-white"
      >
        Register Now
      </button>
    </div>
  );
};

export default SpecialEventCard;
