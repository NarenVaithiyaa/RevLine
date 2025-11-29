import React from 'react';
import { Calendar, MapPin, Clock, Target } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  venue: string;
  agenda: string;
  time?: string;
  imageSrc?: string;
  registrationLink?: string | null;
}

interface EventCardProps {
  event: Event;
  isCompleted?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isCompleted = false }) => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50 flex flex-col h-full">
      {/* Optional image for the event */}
      {event.imageSrc && (
        <div className="w-full h-[12rem] md:h-[14rem] rounded-2xl overflow-hidden mb-4">
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
      {/* Session Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">
          {event.title}
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

      {/* Registration Button */}
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
  );
};

export default EventCard;