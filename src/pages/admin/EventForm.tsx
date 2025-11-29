import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';
import Loader from '../../components/Loader';

const EventForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(isEditMode);
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    venue: '',
    description: '',
    status: 'upcoming' as 'upcoming' | 'completed',
    drive_link: '',
    image_url: '',
    registration_link: '',
  });

  useEffect(() => {
    if (isEditMode) {
      fetchEvent();
    }
  }, [id]);

  const fetchEvent = async () => {
    if (!id) return;
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching event:', error);
      navigate('/admin/events');
    } else if (data) {
      setFormData({
        title: data.title,
        date: data.date,
        venue: data.venue || '',
        description: data.description || '',
        status: data.status,
        drive_link: data.drive_link || '',
        image_url: data.image_url || '',
        registration_link: data.registration_link || '',
      });
    }
    setInitialLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('event-posters')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('event-posters')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: data.publicUrl });
    } catch (error: any) {
      alert('Error uploading image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const eventData = {
      title: formData.title,
      date: formData.date,
      venue: formData.venue,
      description: formData.description,
      status: formData.status,
      drive_link: formData.status === 'completed' ? formData.drive_link : null,
      image_url: formData.image_url || null,
      registration_link: formData.status === 'upcoming' ? formData.registration_link : null,
    };

    let error;

    if (isEditMode && id) {
      const { error: updateError } = await supabase
        .from('events')
        .update(eventData)
        .eq('id', id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from('events')
        .insert([eventData]);
      error = insertError;
    }

    if (error) {
      alert('Error saving event: ' + error.message);
      setLoading(false);
    } else {
      navigate('/admin/events');
    }
  };

  if (initialLoading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => navigate('/admin/events')}
        className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Events
      </button>

      <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
          {isEditMode ? 'Edit Event' : 'Create New Event'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Event Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 placeholder-gray-500"
                placeholder="e.g. Session 18"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {formData.status === 'upcoming' ? 'Date' : 'Date'}
              </label>
              <input
                type="date"
                value={formData.date.split('T')[0] || ''}
                onChange={(e) => {
                  const newDate = e.target.value;
                  const currentTime = formData.date.split('T')[1] || '00:00';
                  setFormData({ ...formData, date: `${newDate}T${currentTime}` });
                }}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 [color-scheme:dark]"
              />
            </div>

            {formData.status === 'upcoming' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                <input
                  type="time"
                  value={formData.date.split('T')[1]?.substring(0, 5) || ''}
                  onChange={(e) => {
                    const newTime = e.target.value;
                    const currentDate = formData.date.split('T')[0] || new Date().toISOString().split('T')[0];
                    setFormData({ ...formData, date: `${currentDate}T${newTime}` });
                  }}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 [color-scheme:dark]"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Venue</label>
            <input
              type="text"
              value={formData.venue}
              onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 placeholder-gray-500"
              placeholder="e.g. Zone-2, Race course"
            />
          </div>

          {formData.status === 'upcoming' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description / Agenda</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 placeholder-gray-500"
                placeholder="Event details..."
              />
            </div>
          )}

          {formData.status === 'upcoming' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Event Poster</label>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {formData.image_url && (
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <img 
                      src={formData.image_url} 
                      alt="Event poster preview" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image_url: '' })}
                      className="absolute top-1 right-1 bg-red-500/80 text-white rounded-full p-1 hover:bg-red-600 transition-colors backdrop-blur-sm"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
                <div className="flex-1 w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/10 border-dashed rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      <p className="mb-2 text-sm text-gray-400 group-hover:text-gray-300">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 2MB)</p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                  </label>
                  {uploading && <p className="text-sm text-cyan-400 mt-2 animate-pulse">Uploading...</p>}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'upcoming' | 'completed' })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
              >
                <option value="upcoming" className="bg-gray-800">Upcoming</option>
                <option value="completed" className="bg-gray-800">Completed</option>
              </select>
            </div>

            {formData.status === 'upcoming' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Registration Link (Google Forms)</label>
                <input
                  type="url"
                  value={formData.registration_link}
                  onChange={(e) => setFormData({ ...formData, registration_link: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 placeholder-gray-500"
                  placeholder="https://forms.gle/..."
                />
              </div>
            )}

            {formData.status === 'completed' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Google Drive Link (Photos)</label>
                <input
                  type="url"
                  value={formData.drive_link}
                  onChange={(e) => setFormData({ ...formData, drive_link: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 placeholder-gray-500"
                  placeholder="https://drive.google.com/..."
                />
              </div>
            )}
          </div>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              <Save className="w-5 h-5" />
              {loading ? 'Saving...' : 'Save Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
