import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Target, RotateCw } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  venue: string;
  agenda: string;
  time?: string;
  imageSrc?: string;
  registrationLink?: string | null;
  posterFit?: 'cover' | 'contain' | null;
  isTournament?: boolean;
  rules?: string | null;
}

interface EventCardProps {
  event: Event;
  isCompleted?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isCompleted = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isFullSize = event.posterFit === 'contain';

  const handleFlip = () => {
    if (isFullSize) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col gap-6">
      <div 
        className={`relative w-full ${isFullSize ? 'h-[32rem] cursor-pointer perspective-1000' : 'h-auto'}`}
        onClick={handleFlip}
      >
        {isFullSize ? (
          <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            {/* Front Face - Full Image */}
            <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900">
              {event.imageSrc ? (
                <img
                  src={event.imageSrc}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg">
                  📸 {event.title}
                </div>
              )}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white/80 hover:text-white transition-colors">
                <RotateCw className="w-5 h-5" />
              </div>
              
              {/* Touch to flip hint */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md text-white/90 text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/10 animate-pulse">
                  <RotateCw className="w-3 h-3" /> Touch to flip
                </span>
              </div>
            </div>

            {/* Back Face - Details */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/95 backdrop-blur-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                <div className={`px-3 py-1 rounded-full ${
                  isCompleted 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600'
                }`}>
                  <span className="text-white text-sm font-semibold">
                    {isCompleted ? 'COMPLETED' : 'UPCOMING'}
                  </span>
                </div>
              </div>

              <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Date</p>
                    <p className="text-white font-semibold">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Venue</p>
                    <p className="text-white font-semibold">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Time</p>
                    <p className="text-white font-semibold">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Agenda</p>
                    <p className="text-white whitespace-pre-wrap">{event.agenda}</p>
                  </div>
                </div>
              </div>

              {!isCompleted && event.registrationLink && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-bold py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    Register Now
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Standard Card Layout (Cropped)
          <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50 flex flex-col h-full">
            {event.imageSrc && (
              <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4 bg-black/20">
                <img
                  src={event.imageSrc}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                        📸 ${event.title}
                      </div>
                    `;
                  }}
                />
              </div>
            )}
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{event.title}</h3>
              <div className={`px-3 py-1 rounded-full ${
                isCompleted 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600'
              }`}>
                <span className="text-white text-sm font-semibold">
                  {isCompleted ? 'COMPLETED' : 'UPCOMING'}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Date</p>
                  <p className="text-white font-semibold">{event.date}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Venue</p>
                  <p className="text-white font-semibold">{event.venue}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Time</p>
                  <p className="text-white font-semibold">{event.time}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Agenda</p>
                  <p className="text-white line-clamp-2">{event.agenda}</p>
                </div>
              </div>
            </div>

            {!isCompleted && event.registrationLink && (
              <div className="mt-auto pt-4">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-bold py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                >
                  Register Now
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Rules Section - Displayed below the card */}
      {event.isTournament && event.rules && (
        <div className="w-full bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Rules & Regulations
          </h4>
          <div className="text-gray-300 space-y-2 text-sm whitespace-pre-wrap">
            {event.rules}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;