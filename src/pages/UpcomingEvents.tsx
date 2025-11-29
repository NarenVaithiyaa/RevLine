import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import SpecialEventCard from '../components/SpecialEventCard';
import { Loader2, Calendar, ShoppingBag, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { Database } from '../types/supabase';

type Event = Database['public']['Tables']['events']['Row'];

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'upcoming')
          .order('date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original string if parsing fails
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (dateString: string) => {
     if (!dateString) return 'TBA';
     const date = new Date(dateString);
     if (isNaN(date.getTime())) return 'TBA';
     return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
      </div>
    );
  }

  const featuredEvent = events[0];
  const otherEvents = events.slice(1);

  return (
    <div className="min-h-screen bg-gray-900 pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
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

        {/* Special Featured Event - Moved Up */}
        {featuredEvent && (
          <div className="mb-20">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="text-cyan-400">Session</span>
              </h3>
            </div>
            <div className="flex justify-center px-4">
              <SpecialEventCard
                event={{
                  title: featuredEvent.title,
                  date: formatDate(featuredEvent.date),
                  venue: featuredEvent.venue || 'TBA',
                  time: formatTime(featuredEvent.date),
                  agenda: featuredEvent.description || 'Details coming soon!',
                  imageSrc: featuredEvent.image_url || '/images/revline_logo.png',
                  registrationLink: featuredEvent.registration_link,
                  posterFit: (featuredEvent.poster_fit as 'cover' | 'contain') || 'cover',
                }}
                isCompleted={false}
              />
            </div>
          </div>
        )}

        {/* What to Expect Section - New */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white">What to <span className="text-cyan-400">Expect</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-cyan-500 text-white font-bold py-2 px-6 rounded-bl-3xl text-xl">01</div>
              
              <div className="mb-6">
                <ShoppingBag className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white">What to Bring</h3>
              </div>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Water bottle and towel
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Comfortable workout clothes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Training shoes
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Personal yoga mat (optional)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Positive attitude and energy!
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold py-2 px-6 rounded-bl-3xl text-xl">02</div>
              
              <div className="mb-6">
                <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-white">Session Benefits</h3>
              </div>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Guided workouts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Community support & motivation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Progressive fitness challenges
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Networking with like-minded people
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Events */}
        {otherEvents.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                More <span className="text-cyan-400">Sessions</span>
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 px-4">
              {otherEvents.map((event) => (
                <div key={event.id} className="w-full max-w-md">
                  <EventCard
                    event={{
                      title: event.title,
                      date: formatDate(event.date),
                      venue: event.venue || 'TBA',
                      time: formatTime(event.date),
                      agenda: event.description || 'Details coming soon!',
                      imageSrc: event.image_url || '/images/revline_logo.png',
                      registrationLink: event.registration_link,
                      posterFit: (event.poster_fit as 'cover' | 'contain') || 'cover',
                      isTournament: event.is_tournament,
                      rules: event.rules,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {events.length === 0 && (
           <div className="text-center py-12">
              <p className="text-gray-400 text-xl">No upcoming events scheduled at the moment. Check back soon!</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;