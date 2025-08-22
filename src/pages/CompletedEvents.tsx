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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
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
            <div className="flex justify-center">
              <SpecialEventCard 
                sessionNumber={3}
                date="10th August, 2025"
                venue="Ponnuuthu Amman Temple"
                time="5:30 AM - 8:00 AM"
                agenda="Trekking Agenda: • 🕔 5:30 AM – Meetup at Peelamedu Pazhamudhir • 🕕 6:00 AM – Start from Peelamedu Pazhamudhir to Ponnuuthu Amman Temple • 🕡 6:30 AM – Begin Trekking • 🕖 7:00 AM – Reach Temple and begin descent • 🕢 7:30 AM – Reach Foothills • 🕗 8:00 AM – Reach back to Peelamedu Pazhamudhir • • **NOTE: Those who can come to Ponnuuthu Amman Temple directly by car can do so. Those coming on two-wheelers will be picked up at Peelamedu Pazhamudhir.**"
                isCompleted={true}
              />
            </div>
            <div className="flex justify-center">
              <SpecialEventCard 
                sessionNumber={4}
                date="17th August, 2025"
                venue="PRS Ground"
                time="6:30 - 8:00 AM"
                agenda="6:30 AM - 7:00 AM - Warm up and members arriving • 7:00 - 7:30 AM - HIIT Training • 7:30 - 8:15 AM - Fun games • 8:15 AM - Warm down and leave"
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