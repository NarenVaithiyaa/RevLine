import React, { useState, useEffect } from 'react';
import { Users, Target, Zap, Calendar, MessageCircle, Trophy, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Silk from '../components/Silk';
import TrueFocus from '../components/TrueFocus';

interface HomeProps {
  setCurrentPage?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const heroRef = useScrollAnimation();
  const whyRef = useScrollAnimation();
  const whatRef = useScrollAnimation();
  const howRef = useScrollAnimation();
  const whoRef = useScrollAnimation();
  const purposeRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const [displayedText, setDisplayedText] = useState('');
  const fullText = "A Hybrid Training Club";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust speed by changing this value (milliseconds per letter)

    return () => clearInterval(timer);
  }, []);

  const scrollToWhySection = () => {
    whyRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[calc(100vh+4rem)] flex items-center justify-center overflow-hidden fade-up -mt-16">
        <div className="absolute inset-0 z-0">
          <Silk
            speed={5}
            scale={1}
            color="#3b82f6"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto transform -translate-y-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8 space-x-3">
              <img
                src="/images/revline_logo.png"
                alt="RevLine Logo"
                className="w-24 h-24 object-contain"
              />
              <p className="text-base text-gray-400 font-light">team presents</p>
            </div>
            <div className="mb-6 flex justify-center">
              <TrueFocus 
                sentence="REVLINE"
                manualMode={false}
                blurAmount={5}
                borderColor="#9ca3af"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
              {displayedText}<span className="animate-pulse">|</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-cyan-300 font-semibold italic leading-relaxed">
                "Consistency Builds Power, Community Builds Purpose."
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button 
              onClick={() => setCurrentPage?.('upcoming-events')}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto min-w-[160px]"
            >
              Join the Movement
            </button>
            <button 
              onClick={scrollToWhySection}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/10 text-cyan-400 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-800/60 transition-all duration-300 w-full sm:w-auto min-w-[160px]"
            >
              Learn More
            </button>
          </div>
          
          {/* Instagram Follow Section */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a 
              href="https://instagram.com/_.revline._" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors duration-300 group"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-lg font-medium">Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why REVLINE Section */}
      <section ref={whyRef} className="py-24 px-6 sm:px-8 lg:px-12 fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why <span className="text-cyan-400">REVLINE</span>?
            </h2>
          </div>
          
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 sm:p-12 md:p-16 rounded-3xl shadow-2xl border border-white/10">
            <div className="flex justify-center mb-10">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-lg shadow-cyan-500/25">
                <Users className="w-20 h-20 text-white" />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
                We were looking for more than solo workouts.
              </p>
              <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
                We wanted a space where people come together to train, grow, and support each other.
              </p>
              <div className="pt-6">
                <p className="text-2xl md:text-3xl text-cyan-300 font-bold leading-relaxed">
                  A community built on consistency, strength, and shared energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatRef} className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-cyan-600 via-blue-700 to-cyan-600 fade-left">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              What We <span className="text-cyan-400">Do</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
                We blend strength training, cardio, mobility, endurance, and more into a hybrid training lifestyle.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
                From group sessions on weekends to accountability check-ins on weekdays, REVLINE is built for consistency, fun, and long-term growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Trophy, label: 'Strength Training' },
                { icon: Zap, label: 'Cardio' },
                { icon: Target, label: 'Mobility' },
                { icon: Users, label: 'Community' }
              ].map((item, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-white/20 scale-in stagger-${index + 1} group`}>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Roll Section */}
      <section ref={howRef} className="py-24 px-6 sm:px-8 lg:px-12 fade-right">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              How We <span className="text-cyan-400">Roll</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            <div className="bg-gray-900/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 sm:p-5 rounded-2xl mx-auto mb-4 sm:mb-6 w-fit">
                <Calendar className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Every Weekend</h3>
              <p className="text-lg sm:text-xl text-white leading-relaxed text-center font-medium">
                Group workouts (outdoors, turf, trails, gyms, etc.)
              </p>
            </div>
            
            <div className="bg-gray-900/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 sm:p-5 rounded-2xl mx-auto mb-4 sm:mb-6 w-fit">
                <MessageCircle className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Weekdays</h3>
              <p className="text-lg sm:text-xl text-white leading-relaxed text-center font-medium">
                Stay connected via group chats for check-ins, challenges & support
              </p>
            </div>
          </div>
          
          <div className="bg-gray-900/40 backdrop-blur-xl p-4 rounded-xl text-center shadow-xl border border-white/10 max-w-xl mx-auto">
            <p className="text-lg md:text-xl font-black text-white leading-relaxed">
              Just show up. We'll handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section ref={whoRef} className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-cyan-600 via-blue-700 to-cyan-600 fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Who Can <span className="text-cyan-400">Join</span>?
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-12 md:p-16 rounded-3xl shadow-2xl border border-white/20">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-12">
                Anyone. Anywhere. Anytime.
              </h3>
              
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
                  Whether you're a beginner or a beast —
                </p>
                <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
                  If you're ready to move, grow, and commit,
                </p>
                <div className="pt-6">
                  <p className="text-3xl md:text-4xl font-black text-white leading-relaxed">
                    You belong here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section ref={purposeRef} className="py-24 px-6 sm:px-8 lg:px-12 fade-left">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our <span className="text-cyan-400">Purpose</span>
            </h2>
          </div>
          
          <div className="bg-gray-900/40 backdrop-blur-xl p-6 sm:p-12 md:p-16 rounded-3xl shadow-2xl border border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-12">The Mission:</h3>
              <blockquote className="text-2xl md:text-3xl text-white leading-relaxed italic font-light">
                "To build a strong, purpose-driven community where every individual can move better, live stronger, and stay consistent — together."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-cyan-600 via-blue-700 to-cyan-600 fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12">
            Ready to join the movement?
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-16 font-light leading-relaxed">
            DM us your name, age, contact, why you want to join.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl scale-in stagger-1 border border-white/30 hover:border-white/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Contact:</h3>
              <p className="text-xl text-white">+91 XXXX-XXXX-XX</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl scale-in stagger-2 border border-white/30 hover:border-white/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Instagram:</h3>
              <p className="text-xl text-white">@revline_official</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <button 
              onClick={() => setCurrentPage?.('upcoming-events')}
              className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-xl font-black text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2 group"
            >
              <span>Let's Rev It Up, Together!</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;