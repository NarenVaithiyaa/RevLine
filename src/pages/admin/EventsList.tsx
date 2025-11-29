import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { Database } from '../../types/supabase';
import { Edit, Trash2, Image, Plus } from 'lucide-react';
import Loader from '../../components/Loader';

type Event = Database['public']['Tables']['events']['Row'];

const EventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    const { error } = await supabase.from('events').delete().eq('id', id);

    if (error) {
      alert('Error deleting event: ' + error.message);
    } else {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Events Management
        </h1>
        <Link
          to="/admin/events/new"
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
        >
          <Plus className="w-5 h-5" />
          Add New Event
        </Link>
      </div>

      <div className="backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-gray-300 border-b border-white/10">
                <th className="p-4 sm:p-6 font-semibold whitespace-nowrap">Title</th>
                <th className="p-4 sm:p-6 font-semibold whitespace-nowrap">Date</th>
                <th className="p-4 sm:p-6 font-semibold whitespace-nowrap">Venue</th>
                <th className="p-4 sm:p-6 font-semibold whitespace-nowrap">Status</th>
                <th className="p-4 sm:p-6 font-semibold text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {events.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">
                    No events found. Create one to get started.
                  </td>
                </tr>
              ) : (
                events.map((event) => (
                  <tr key={event.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-6 text-white font-medium min-w-[200px]">{event.title}</td>
                    <td className="p-4 sm:p-6 text-gray-300 whitespace-nowrap">{event.date}</td>
                    <td className="p-4 sm:p-6 text-gray-300 min-w-[150px]">{event.venue || '-'}</td>
                    <td className="p-4 sm:p-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          event.status === 'completed'
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        }`}
                      >
                        {event.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 sm:p-6">
                      <div className="flex justify-end gap-2">
                        {event.status === 'completed' && (
                          <Link
                            to={`/admin/events/${event.id}/media`}
                            className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
                            title="Manage Media Link"
                          >
                            <Image className="w-5 h-5" />
                          </Link>
                        )}
                        <Link
                          to={`/admin/events/${event.id}/edit`}
                          className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                          title="Edit Event"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete Event"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
