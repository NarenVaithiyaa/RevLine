import React from 'react';
import EventCard from '../components/EventCard';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const UpcomingEvents: React.FC = () => {
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const eventsRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  const events = [
    {
      sessionNumber: 1,
      date: '27th July 2025',
      venue: 'Zone-2, Race course, Coimbatore',
      agenda: 'Hybrid Circuit Training - Strength, Cardio & Mobility fusion workout designed to test your limits and build community bonds.',
      time: '6:30-8:00 AM'
    },
    {
      sessionNumber: 2,
      date: '3rd August 2025',
      venue: 'Central Park, RS Puram, Coimbatore',
      agenda: 'Outdoor HIIT Session - High-intensity interval training in nature with team challenges and endurance building exercises.',
      time: '6:30-8:00 AM'
    },
    {
      sessionNumber: 3,
      date: '10th August 2025',
      venue: 'Elite Fitness Hub, Peelamedu',
      agenda: 'Strength & Power Day - Focus on compound movements, powerlifting fundamentals, and building raw strength together.',
      time: '7:00-8:30 AM'
    }
  ];

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
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-gray-300">Sessions This Month</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-3">
            <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">90</div>
            <div className="text-gray-300">Minutes Per Session</div>
          </div>
        </div>

        {/* Events Grid */}
        <div ref={eventsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 fade-left">
          {events.map((event, index) => (
            <div key={index} className={`scale-in stagger-${index + 1}`}>
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div ref={infoRef} className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 rounded-2xl text-center fade-up">
          <h2 className="text-3xl font-bold text-white mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">What to Bring:</h3>
              <ul className="text-gray-200 space-y-2">
                <li>• Water bottle and towel</li>
                <li>• Comfortable workout clothes</li>
                <li>• Training shoes</li>
                <li>• Positive attitude and energy!</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Session Benefits:</h3>
              <ul className="text-gray-200 space-y-2">
                <li>• Expert-guided workouts</li>
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