import React from 'react';
import { Users, Target, Zap, Calendar, MessageCircle, Trophy, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

  const scrollToWhySection = () => {
    whyRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-2xl shadow-lg shadow-cyan-500/25">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight">
              REVLINE
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
              A Hybrid Training Club
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
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25 w-full sm:w-auto min-w-[200px]"
            >
              Join the Movement
            </button>
            <button 
              onClick={scrollToWhySection}
              className="border-2 border-cyan-400 text-cyan-400 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm bg-white/5 w-full sm:w-auto min-w-[200px]"
            >
              Learn More
            </button>
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
          
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-600/30">
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
      <section ref={whatRef} className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-800/50 fade-left">
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
                <div key={index} className={`bg-gradient-to-br from-gray-700/80 to-gray-600/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-gray-500/30 scale-in stagger-${index + 1} group`}>
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
            <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-cyan-500 shadow-2xl">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 sm:p-5 rounded-2xl mx-auto mb-4 sm:mb-6 w-fit">
                <Calendar className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Every Weekend</h3>
              <p className="text-lg sm:text-xl text-white leading-relaxed text-center font-medium">
                Group workouts (outdoors, turf, trails, gyms, etc.)
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-cyan-500 shadow-2xl">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 sm:p-5 rounded-2xl mx-auto mb-4 sm:mb-6 w-fit">
                <MessageCircle className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Weekdays</h3>
              <p className="text-lg sm:text-xl text-white leading-relaxed text-center font-medium">
                Stay connected via group chats for check-ins, challenges & support
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 rounded-2xl text-center shadow-xl shadow-cyan-500/25 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-black text-white leading-relaxed">
              Just show up. We'll handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section ref={whoRef} className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-800/50 fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Who Can <span className="text-cyan-400">Join</span>?
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-gray-700/80 to-gray-600/80 backdrop-blur-sm p-16 rounded-3xl shadow-2xl border border-gray-500/30">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <h3 className="text-4xl md:text-5xl font-black text-cyan-300 mb-12">
                Anyone. Anywhere. Anytime.
              </h3>
              
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
                  Whether you're a beginner or a beast —
                </p>
                <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
                  If you're ready to move, grow, and commit,
                </p>
                <div className="pt-6">
                  <p className="text-3xl md:text-4xl font-black text-cyan-300 leading-relaxed">
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
          
          <div className="bg-gradient-to-br from-blue-900/80 to-cyan-900/80 backdrop-blur-sm p-16 rounded-3xl shadow-2xl border border-blue-500/30">
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
              className="bg-white text-cyan-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 group"
            >
              <span>Let's Rev It Up, Together!</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;