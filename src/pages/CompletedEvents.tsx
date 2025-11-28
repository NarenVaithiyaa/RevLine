import React from 'react';
import { Trophy } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const events = [
  { session: 1, date: "27th July, 2025", venue: "Zone-2, Race course, Coimbatore" },
  { session: 2, date: "3rd August, 2025", venue: "Herkley's turf, Peelamedu, Coimbatore" },
  { session: 3, date: "10th August, 2025", venue: "Ponnuuthu Amman Temple" },
  { session: 4, date: "17th August, 2025", venue: "PRS Ground" },
  { session: 5, date: "24th August, 2025", venue: "Race Course Zone - 2" },
  { session: 6, date: "31st August, 2025", venue: "Herkley's turf, Peelamedu, Coimbatore" },
  { session: 7, date: "7th September, 2025", venue: "Thogaimalai" },
  { session: 8, date: "14th September, 2025", venue: "Herkley's turf, Peelamedu, Coimbatore" },
  { session: 9, date: "21st September, 2025", venue: "PRS Ground" },
  { session: 10, date: "28th September, 2025", venue: "TIFO turf, Coimbatore" },
  { session: 11, date: "5th October, 2025", venue: "Champ badminton academy, Coimbatore" },
  { session: 12, date: "12th October, 2025", venue: "dynk and rally, Vadavalli, Coimbatore" },
  { session: 13, date: "19th October, 2025", venue: "Race Course Zone - 2" },
  { session: 14, date: "26th October, 2025", venue: "Herkley turf" },
  { session: 15, date: "November 2, 2025", venue: "Perumal Swamy temple" },
  { session: 16, date: "8th Nov, Saturday", venue: "Herkley turf, Peelamedu" },
  { session: 17, date: "16th November", venue: "Race Course Zone-2" },
];

const CompletedEvents: React.FC = () => {
  const headerRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 pt-36 pb-20">
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

        {/* Completed Events Table */}
        <div className="mb-16 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-gray-800/50 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-cyan-400 text-lg">
                <th className="p-6 font-bold">Date</th>
                <th className="p-6 font-bold">Session Name</th>
                <th className="p-6 font-bold">Location</th>
                <th className="p-6 font-bold">Photos</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.session} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <td className="p-6 text-gray-300 whitespace-nowrap">{event.date}</td>
                  <td className="p-6 text-white font-semibold whitespace-nowrap">Session {event.session}</td>
                  <td className="p-6 text-gray-300">{event.venue}</td>
                  <td className="p-6 text-gray-400">
                    Link TBA
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Event Media Archive */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event Media <span className="text-cyan-400">Archive</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">View the session's magic moments below :</p>
          <a 
            href="https://drive.google.com/drive/folders/1YVN2QCYQJJ092nqE228khA_Fe4mHZa0f" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            📸 View Photos & Videos
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletedEvents;