import React, { useEffect, useState } from 'react';
import { Trophy, Loader2, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { Database } from '../types/supabase';

type Event = Database['public']['Tables']['events']['Row'];

const STATIC_EVENTS: Event[] = [
  { id: 's17', title: 'Session 17', date: '2025-11-16', venue: 'Race Course Zone-2', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's16', title: 'Session 16', date: '2025-11-08', venue: 'Herkley turf, Peelamedu', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's15', title: 'Session 15', date: '2025-11-02', venue: 'Perumal Swamy temple', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's14', title: 'Session 14', date: '2025-10-26', venue: 'Herkley turf', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's13', title: 'Session 13', date: '2025-10-19', venue: 'Race Course Zone - 2', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's12', title: 'Session 12', date: '2025-10-12', venue: 'dynk and rally, Vadavalli, Coimbatore', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's11', title: 'Session 11', date: '2025-10-05', venue: 'Champ badminton academy, Coimbatore', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's10', title: 'Session 10', date: '2025-09-28', venue: 'TIFO turf, Coimbatore', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's9', title: 'Session 9', date: '2025-09-21', venue: 'PRS Ground', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's8', title: 'Session 8', date: '2025-09-14', venue: "Herkley's turf, Peelamedu, Coimbatore", status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's7', title: 'Session 7', date: '2025-09-07', venue: 'Thogaimalai', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's6', title: 'Session 6', date: '2025-08-31', venue: "Herkley's turf, Peelamedu, Coimbatore", status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's5', title: 'Session 5', date: '2025-08-24', venue: 'Race Course Zone - 2', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's4', title: 'Session 4', date: '2025-08-17', venue: 'PRS Ground', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's3', title: 'Session 3', date: '2025-08-10', venue: 'Ponnuuthu Amman Temple', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's2', title: 'Session 2', date: '2025-08-03', venue: "Herkley's turf, Peelamedu, Coimbatore", status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
  { id: 's1', title: 'Session 1', date: '2025-07-27', venue: 'Zone-2, Race course, Coimbatore', status: 'completed', drive_link: null, image_url: null, registration_link: null, created_at: '', description: '' },
];

const CompletedEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'completed')
          .order('date', { ascending: false });

        if (error) throw error;
        
        // Combine fetched events with static events and sort by date descending
        const allEvents = [...(data || []), ...STATIC_EVENTS].sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        
        setEvents(allEvents);
      } catch (error) {
        console.error('Error fetching completed events:', error);
        setEvents(STATIC_EVENTS);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
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
          <table className="w-full text-left border-collapse bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-white/5 text-cyan-400 text-lg">
                <th className="p-6 font-bold">Date</th>
                <th className="p-6 font-bold">Session Name</th>
                <th className="p-6 font-bold">Location</th>
                <th className="p-6 font-bold">Photos</th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 ? (
                events.map((event) => (
                  <tr key={event.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-6 text-gray-300 whitespace-nowrap">{formatDate(event.date)}</td>
                    <td className="p-6 text-white font-semibold whitespace-nowrap">{event.title}</td>
                    <td className="p-6 text-gray-300">{event.venue || 'TBA'}</td>
                    <td className="p-6 text-gray-400">
                      {event.drive_link ? (
                        <a 
                          href={event.drive_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                        >
                          View Photos <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        'Link TBA'
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-400">
                    No completed events found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompletedEvents;