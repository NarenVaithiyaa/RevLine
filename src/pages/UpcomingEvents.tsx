import React from 'react';
import EventCard from '../components/EventCard';
import SpecialEventCard from '../components/SpecialEventCard';
import { Calendar, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const UpcomingEvents: React.FC = () => {
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Upcoming <span className="text-cyan-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us for high-energy training sessions that will push your limits and strengthen our community. 
            Every session is designed to challenge, inspire, and unite us in our fitness journey.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fade-up">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-1">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-2">
            <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-300">Sessions Planned</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-3">
            <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">90</div>
            <div className="text-gray-300">Minutes Per Session</div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-16">
          {/* Special Featured Event */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="text-cyan-400">Session</span>
              </h3>
            </div>
            <div className="flex justify-center px-4">
              <SpecialEventCard 
                sessionNumber={8}
                date="14th September, 2025"
                venue="Herkley's turf, Peelamedu, Coimbatore"
                time="7:00 AM - 10:00 AM"
                agenda="7:00 - 8:00 AM: Ice breaker session • 8:00 - 10:00 AM: Kho-kho in turf • 8:00 - 9:00 AM: Badminton • 9:00 - 10:00 AM: Pickle ball"
                isCompleted={false}
              />
            </div>
          </div>

          {/* Other Events */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                More <span className="text-cyan-400">Sessions</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
              <div className="flex justify-center">
                <EventCard 
                  event={{
                    sessionNumber: 9,
                    date: "To be announced",
                    venue: "To be announced",
                    time: "To be announced",
                    agenda: "Stay tuned for more exciting sessions coming your way!"
                  }} 
                />
              </div>
              <div className="flex justify-center">
                <EventCard 
                  event={{
                    sessionNumber: 10,
                    date: "To be announced",
                    venue: "To be announced",
                    time: "To be announced",
                    agenda: "More adventures await! Keep following for updates."
                  }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div ref={infoRef} className="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">What to Expect</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
            {/* What to Bring Card */}
            <div className="w-full max-w-xs md:w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-700 shadow-2xl shadow-cyan-500/20 p-6 md:p-9 space-y-3 relative overflow-hidden rounded-2xl border border-gray-600 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl font-bold">01</p>
              </div>
              <div className="fill-cyan-400 w-12">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <h1 className="font-bold text-xl text-white">What to Bring</h1>
              <ul className="text-sm text-gray-300 leading-6 space-y-1">
                <li>• Water bottle and towel</li>
                <li>• Comfortable workout clothes</li>
                <li>• Training shoes</li>
                <li>• Personal yoga mat (optional)</li>
                <li>• Positive attitude and energy!</li>
              </ul>
            </div>

            {/* Session Benefits Card */}
            <div className="w-full max-w-xs md:w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-700 shadow-2xl shadow-cyan-500/20 p-6 md:p-9 space-y-3 relative overflow-hidden rounded-2xl border border-gray-600 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl font-bold">02</p>
              </div>
              <div className="fill-cyan-400 w-12">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h1 className="font-bold text-xl text-white">Session Benefits</h1>
              <ul className="text-sm text-gray-300 leading-6 space-y-1">
                <li>• Guided workouts</li>
                <li>• Community support & motivation</li>
                <li>• Progressive fitness challenges</li>
                <li>• Networking with like-minded people</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;