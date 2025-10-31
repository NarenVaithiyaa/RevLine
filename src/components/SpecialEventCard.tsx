import React from 'react';

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
  // Registration via Google Forms has been disabled per session update.

  // Placeholder Google Form URL — replace this with the real form link when ready.
  const GOOGLE_FORM_URL = 'https://forms.gle/m5q5L4as2s6P9Q1B6';

  // Local registration handler for featured session CTA.
  // If a Google Form URL is set, open it in a new tab. Otherwise fall back to an inline prompt.
  const handleLocalRegister = () => {
    if (GOOGLE_FORM_URL) {
      window.open(GOOGLE_FORM_URL, '_blank');
      return;
    }

    // Fallback: simple prompt to collect a name
    const name = window.prompt('Enter your name to register for this session:');
    if (name && name.trim()) {
      // In future this could POST to an API or collect into state
      window.alert(`Thanks ${name.trim()} — we've recorded your interest!`);
    } else if (name !== null) {
      window.alert('Registration cancelled or no name provided.');
    }
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
      
      {/* Image Section for Session 13 (Featured Event) */}
      {sessionNumber === 13 && !isCompleted && (
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

      {/* Image Section for Session 9 (Featured Event) */}
      {sessionNumber === 9 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img 
            src="/images/prscbe.jpg" 
            alt="PRS Ground - RevLine x Tez Run" 
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

      {/* Image Section for Session 10 (Featured Event) */}
      {sessionNumber === 10 && !isCompleted && (
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

      {/* Image Section for Session 11 (Featured Event) */}
      {sessionNumber === 11 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img
            src="/images/court.jpeg"
            alt="Court Image"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Court
                </div>
              `;
            }}
          />
        </div>
      )}

      {/* Image Section for Session 12 (Featured Event) - show full image without cropping */}
      {sessionNumber === 12 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4 bg-black flex items-center justify-center">
          <img
            src="/images/tournament.jpg"
            alt="Tournament"
            className="max-h-full w-full object-contain"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Tournament
                </div>
              `;
            }}
          />
        </div>
      )}

      {/* Image Section for Session 14 (New Featured) */}
      {sessionNumber === 14 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img
            src="/images/cricket.jpg"
            alt="Cricket at Herkleys"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Herkleys Cricket
                </div>
              `;
            }}
          />
        </div>
      )}

      {/* Image Section for Session 15 (Featured Event) */}
      {sessionNumber === 15 && !isCompleted && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
          <img
            src="/images/perumal.png"
            alt="Perumal Swamy Temple"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Perumal Swamy Temple
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
        
        {/* Collaboration logo for Session 10 */}
        {sessionNumber === 9 && !isCompleted && (
          <div className="text-center mb-4">
            <img 
              src="/images/collab.png" 
              alt="RevLine x Tez Run Collaboration" 
              className="mx-auto h-8 md:h-12 w-auto"
              onError={(e) => {
                console.error('Collaboration image failed to load from:', (e.target as HTMLImageElement).src);
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = `
                  <p class="text-white font-bold text-2xl">RevLine x Tez Run</p>
                `;
              }}
            />
          </div>
        )}
        
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
      
      {/* Register Button for Featured Session (show for session 13, 15 and upcoming) */}
      {((sessionNumber === 13 || sessionNumber === 15) && !isCompleted) && (
        <button
          onClick={handleLocalRegister}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 font-extrabold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white flex items-center justify-center space-x-2 group"
        >
          <span>Register Now</span>
        </button>
      )}
    </div>
  );
};

export default SpecialEventCard;
