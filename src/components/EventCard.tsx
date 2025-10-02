import React from 'react';
import { Calendar, MapPin, Clock, Target } from 'lucide-react';

interface Event {
  sessionNumber: number;
  date: string;
  venue: string;
  agenda: string;
  time: string;
  imageSrc?: string;
}

interface EventCardProps {
  event: Event;
  isCompleted?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isCompleted = false }) => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-cyan-500/50">
      {/* Optional image for the event */}
      {event.imageSrc && (
        <div className={`w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4 ${event.sessionNumber === 12 ? 'bg-black flex items-center justify-center' : ''}`}>
          <img
            src={event.imageSrc}
            alt={`Session ${event.sessionNumber}`}
            className={event.sessionNumber === 12 ? 'max-h-full w-full object-contain' : 'w-full h-full object-cover'}
            onError={(e) => {
              console.error('Image failed to load from:', (e.target as HTMLImageElement).src);
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold text-lg rounded-2xl">
                  📸 Session ${event.sessionNumber}
                </div>
              `;
            }}
          />
        </div>
      )}
      {/* Session Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">
          Session {event.sessionNumber}
        </h3>
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

      {/* Event Details */}
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
            <p className="text-white">{event.agenda}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;