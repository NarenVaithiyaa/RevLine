import React from 'react';
import { Trophy, Camera, Star, Users, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CompletedEvents: React.FC = () => {
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const eventsRef = useScrollAnimation();
  const mediaRef = useScrollAnimation();

  const completedEvents = [
    {
      id: 1,
      session: 'Session 0 - Launch Event',
      date: 'June 15, 2024',
      venue: 'Nehru Stadium, Coimbatore',
      participants: 25,
      rating: 4.9,
      highlights: ['First community gathering', 'Team building exercises', 'Foundation strength training'],
      testimonial: {
        name: 'Priya S.',
        text: 'Amazing energy from day one! The community spirit was incredible and the workout challenged me in the best way possible.'
      }
    },
    {
      id: 2,
      session: 'Session -1 - Endurance Challenge',
      date: 'May 28, 2024',
      venue: 'Coimbatore Marathon Track',
      participants: 18,
      rating: 4.8,
      highlights: ['5K group run', 'Endurance circuit training', 'Mental resilience workshop'],
      testimonial: {
        name: 'Arjun K.',
        text: 'Pushed my limits and discovered I could do so much more than I thought. The support from everyone was phenomenal!'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Completed <span className="text-cyan-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Relive the amazing moments, incredible achievements, and community bonds formed through our past training sessions.
          </p>
        </div>

        {/* Achievement Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 fade-right">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-1">
            <Calendar className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">2</div>
            <div className="text-gray-300 text-sm">Events Completed</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-2">
            <Users className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">43</div>
            <div className="text-gray-300 text-sm">Total Participants</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-3">
            <Clock className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">180</div>
            <div className="text-gray-300 text-sm">Minutes Trained</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-4">
            <Star className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">4.9</div>
            <div className="text-gray-300 text-sm">Avg Rating</div>
          </div>
        </div>

        {/* Completed Events */}
        <div ref={eventsRef} className="space-y-12 mb-16 fade-left">
          {completedEvents.map((event) => (
            <div key={event.id} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600 scale-in">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Event Details */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-semibold">COMPLETED</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(event.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                      <span className="text-gray-300 ml-2">({event.rating})</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{event.session}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{event.participants} Participants</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Event Highlights:</h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-300 flex items-center space-x-2">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery Placeholder */}
                <div>
                  <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 h-64 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 text-lg">Event Photo Gallery</p>
                      <p className="text-gray-500 text-sm">Photos coming soon...</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Participant Feedback:</h4>
                    <blockquote className="text-gray-200 italic mb-3">
                      "{event.testimonial.text}"
                    </blockquote>
                    <p className="text-cyan-400 font-semibold">- {event.testimonial.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Gallery Section */}
        <div ref={mediaRef} className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-center fade-up">
          <h2 className="text-3xl font-bold text-white mb-6">
            Event <span className="text-cyan-400">Media</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Browse through photos, videos, and memorable moments from our training sessions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Photo Gallery Placeholder */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 hover:scale-105 transition-transform duration-300 scale-in stagger-1">
              <Camera className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Photo Gallery</h3>
              <p className="text-gray-300 text-sm">Action shots and group photos from all our sessions</p>
            </div>

            {/* Video Content Placeholder */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 hover:scale-105 transition-transform duration-300 scale-in stagger-2">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">▶</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Video Highlights</h3>
              <p className="text-gray-300 text-sm">Workout clips and motivational moments</p>
            </div>

            {/* Achievements Placeholder */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 hover:scale-105 transition-transform duration-300 scale-in stagger-3">
              <Trophy className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
              <p className="text-gray-300 text-sm">Member milestones and fitness victories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedEvents;