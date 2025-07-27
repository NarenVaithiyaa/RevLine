import React from 'react';
import { Trophy } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SpecialEventCard from '../components/SpecialEventCard';

const CompletedEvents: React.FC = () => {
  const headerRef = useScrollAnimation();

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
        </div>

        {/* Completed Event */}
        <div className="mb-16">
          <div className="flex justify-center px-4">
            <SpecialEventCard 
              sessionNumber={1}
              date="27th July, 2025"
              venue="Zone-2, Race course, Coimbatore"
              time="6:30 - 8:00 AM"
              agenda="6:30 - 6.50: WELCOME SPEECH • 6:50 - 7.00: WARM UP • 7.00 - 7.30: JOG AND WALK • 7.30 - 7.50: FUN GAME • 7.50 - 8.00: WARM DOWN AND SOCIALISE"
              isCompleted={true}
            />
          </div>
        </div>

        {/* Event Media Archive */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event Media <span className="text-cyan-400">Archive</span>
          </h2>
          <p className="text-xl text-gray-300">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedEvents;