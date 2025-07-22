import React from 'react';
import { Trophy, Camera, Star, Users, Calendar, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CompletedEvents: React.FC = () => {
  const headerRef = useScrollAnimation();
  const comingSoonRef = useScrollAnimation();
  const previewRef = useScrollAnimation();

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
            Soon you'll be able to relive the amazing moments, incredible achievements, and community bonds formed through our training sessions.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div ref={comingSoonRef} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-12 text-center shadow-2xl mb-16 scale-in">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Event Archive
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're building an amazing archive of all our completed events, including photos, videos, 
              participant testimonials, and achievement highlights. Get ready to explore our journey!
            </p>
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 px-6 py-3 rounded-full">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Preview of What's Coming */}
        <div ref={previewRef} className="fade-up">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What You Can Expect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-1">
              <Camera className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">Photo Galleries</div>
              <div className="text-gray-300 text-sm">Action shots from every session</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-2">
              <Users className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">Participant Stories</div>
              <div className="text-gray-300 text-sm">Testimonials and achievements</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-3">
              <Star className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">Event Highlights</div>
              <div className="text-gray-300 text-sm">Best moments and milestones</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center scale-in stagger-4">
              <Calendar className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-white mb-1">Event Timeline</div>
              <div className="text-gray-300 text-sm">Complete session history</div>
            </div>
          </div>

          {/* Media Gallery Preview */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Event <span className="text-cyan-400">Media Archive</span>
            </h2>
            <p className="text-gray-300 mb-8">
              A comprehensive collection of photos, videos, and memorable moments from our training sessions.
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
    </div>
  );
};

export default CompletedEvents;