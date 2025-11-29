import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Calendar, LogOut, PlusCircle } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Floating Navbar with Liquid Glass Effect */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-5xl rounded-full bg-gray-900/40 backdrop-blur-xl border border-white/10 shadow-2xl supports-[backdrop-filter]:bg-gray-900/40 transition-all duration-300">
          <div className="px-4 sm:px-8">
            <div className="flex items-center justify-between h-20 sm:h-24">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/images/revline_logo.png" 
                  alt="RevLine Logo" 
                  className="w-20 h-20 sm:w-32 sm:h-32 object-contain hover:scale-110 transition-transform duration-200"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Link 
                  to="/admin/events" 
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base font-medium ${
                    isActive('/admin/events') 
                      ? 'bg-white/10 text-white shadow-lg border border-white/5' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">Events</span>
                </Link>
                
                <Link 
                  to="/admin/events/new" 
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base font-medium ${
                    isActive('/admin/events/new') 
                      ? 'bg-white/10 text-white shadow-lg border border-white/5' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">New</span>
                </Link>

                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300 border border-transparent hover:border-red-500/30 text-sm sm:text-base font-medium"
                >
                  <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-900 px-4 pb-4 pt-36 sm:px-6 sm:pb-6 sm:pt-40 lg:px-8 lg:pb-8">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
