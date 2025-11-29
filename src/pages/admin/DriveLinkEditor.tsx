import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { ArrowLeft, Save, Image } from 'lucide-react';
import Loader from '../../components/Loader';

const DriveLinkEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [driveLink, setDriveLink] = useState('');
  const [eventTitle, setEventTitle] = useState('');

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    if (!id) return;
    const { data, error } = await supabase
      .from('events')
      .select('title, drive_link, status')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching event:', error);
      navigate('/admin/events');
    } else if (data) {
      if (data.status !== 'completed') {
        alert('Media links can only be added to completed events.');
        navigate('/admin/events');
        return;
      }
      setEventTitle(data.title);
      setDriveLink(data.drive_link || '');
    }
    setInitialLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);

    const { error } = await supabase
      .from('events')
      .update({ drive_link: driveLink })
      .eq('id', id);

    if (error) {
      alert('Error saving link: ' + error.message);
      setLoading(false);
    } else {
      navigate('/admin/events');
    }
  };

  if (initialLoading) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate('/admin/events')}
        className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Events
      </button>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-purple-900/30 rounded-xl">
            <Image className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Manage Event Media</h1>
            <p className="text-gray-400">For: {eventTitle}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Google Drive Folder Link
            </label>
            <input
              type="url"
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
              placeholder="https://drive.google.com/drive/folders/..."
            />
            <p className="mt-2 text-sm text-gray-500">
              Paste the shareable link to the Google Drive folder containing photos/videos for this event.
            </p>
          </div>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:from-purple-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-all transform hover:scale-[1.02] flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              {loading ? 'Saving...' : 'Save Link'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriveLinkEditor;
