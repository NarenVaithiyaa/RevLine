import React from 'react';
import { Calendar, MapPin, Clock, Target, ArrowRight } from 'lucide-react';

interface Event {
  sessionNumber: number;
  date: string;
  venue: string;
  agenda: string;
  time: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Google Form URL - replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "#";

  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-4 md:p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-cyan-500/50">
      {/* Session Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">
          Session {event.sessionNumber}
        </h3>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-full">
          <span className="text-white text-sm font-semibold">UPCOMING</span>
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
      <button 
        onClick={handleRegisterClick}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
      >
        <span>Register Now</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
  );
};

export default EventCard;