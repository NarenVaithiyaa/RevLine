import React from 'react';
import { Users, Heart, Zap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Crew: React.FC = () => {
  const headerRef = useScrollAnimation();
  const comingSoonRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Crew</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals who make RevLine the strongest fitness community. 
            Together, we're building something extraordinary.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div ref={comingSoonRef} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-12 text-center shadow-2xl mb-16 scale-in">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our amazing crew profiles are being prepared. Get ready to meet the inspiring trainers, 
              dedicated organizers, and community champions who make every RevLine session unforgettable.
            </p>
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 px-6 py-3 rounded-full">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Community Values */}
        <div ref={valuesRef} className="grid md:grid-cols-3 gap-8 mb-16 fade-left">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl text-center scale-in stagger-1">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Unity</h3>
            <p className="text-gray-200">
              We believe in the power of community. Together, we achieve more than we ever could alone.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-8 rounded-2xl text-center scale-in stagger-2">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Energy</h3>
            <p className="text-gray-200">
              Every session is powered by collective energy, motivation, and the drive to push boundaries.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl text-center scale-in stagger-3">
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
            <p className="text-gray-200">
              We strive for excellence in everything we do, from workouts to community support.
            </p>
          </div>
        </div>

        {/* Team Placeholder Grid */}
        <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-right">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 scale-in stagger-${i > 4 ? 4 : i}`}>
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Team Member</h3>
              <p className="text-cyan-400 mb-3">Role Title</p>
              <p className="text-gray-300 text-sm">
                Bio and expertise details coming soon...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crew;