import React from 'react';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'upcoming-events', label: 'Upcoming Events' },
    { id: 'completed-events', label: 'Completed Events' },
    { id: 'crew', label: 'Crew' },
    { id: 'terms', label: 'Terms and Conditions' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className={`w-full max-w-5xl transition-all duration-300 ${
          isMobileMenuOpen ? 'rounded-[2rem] bg-gray-900/90' : 'rounded-full bg-gray-900/40'
        } backdrop-blur-xl border border-white/10 shadow-2xl supports-[backdrop-filter]:bg-gray-900/40`}>
          <div className="px-6 sm:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div 
                className="flex items-center cursor-pointer group"
                onClick={() => setCurrentPage('home')}
              >
                <img
                  src="/images/revline_logo.png"
                  alt="RevLine Logo"
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                        currentPage === item.id
                          ? 'text-white bg-white/10 shadow-lg backdrop-blur-sm border border-white/5'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/images/revline_logo.png"
                alt="RevLine Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 RevLine. Building stronger communities, one workout at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;