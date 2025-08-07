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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Relive the memories of our successful training sessions. Each event brought our community together 
            and pushed us towards our fitness goals.
          </p>
        </div>

        {/* Completed Events */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <SpecialEventCard 
                sessionNumber={1}
                date="27th July, 2025"
                venue="Zone-2, Race course, Coimbatore"
                time="6:30 - 8:00 AM"
                agenda="6:30 - 6.50: WELCOME SPEECH • 6:50 - 7.00: WARM UP • 7.00 - 7.30: JOG AND WALK • 7.30 - 7.50: FUN GAME • 7.50 - 8.00: WARM DOWN AND SOCIALISE"
                isCompleted={true}
              />
            </div>
            <div className="flex justify-center">
              <SpecialEventCard 
                sessionNumber={2}
                date="3rd August, 2025"
                venue="Herkley's turf, Peelamedu, Coimbatore"
                time="Batch-1: 6:00-8:00 AM | Batch-2: 7:00-9:00 AM"
                agenda="Batch-1: 6:00 AM - Assemble • 6:15-6:30 AM - Warm-up • 6:30-7:30 AM - Badminton • 7:30-8:00 AM - Warm-down and Socialize • • • • • • • Batch-2: 7:00 AM - Assemble • 7:15-7:30 AM - Warm-up • 7:30-8:30 AM - Badminton • 8:30-9:00 AM - Warm-down and Socialize • • • • • • • **NOTE: Turf fee applicable (Rs.50 - Rs.100 per person)**"
                isCompleted={true}
              />
            </div>
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