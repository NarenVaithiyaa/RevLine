import React from 'react';
import { Users, Target, Zap, Calendar, MessageCircle, Trophy, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const heroRef = useScrollAnimation();
  const whyRef = useScrollAnimation();
  const whatRef = useScrollAnimation();
  const howRef = useScrollAnimation();
  const whoRef = useScrollAnimation();
  const purposeRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                REVLINE
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              A Hybrid Training Club
            </h2>
            <p className="text-xl md:text-2xl text-cyan-400 font-medium italic">
              "Consistency Builds Power, Community Builds Purpose."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join the Movement
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why REVLINE Section */}
      <section ref={whyRef} className="py-20 px-4 sm:px-6 lg:px-8 fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Why <span className="text-cyan-400">REVLINE</span>?
          </h2>
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl">
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16 text-cyan-400" />
            </div>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              We were looking for more than solo workouts.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              We wanted a space where people come together to train, grow, and support each other.
            </p>
            <p className="text-xl text-cyan-400 font-semibold">
              A community built on consistency, strength, and shared energy.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 fade-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            What We <span className="text-cyan-400">Do</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                We blend strength training, cardio, mobility, endurance, and more into a hybrid training lifestyle.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed">
                From group sessions on weekends to accountability check-ins on weekdays, REVLINE is built for consistency, fun, and long-term growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Trophy, label: 'Strength Training' },
                { icon: Zap, label: 'Cardio' },
                { icon: Target, label: 'Mobility' },
                { icon: Users, label: 'Community' }
              ].map((item, index) => (
                <div key={index} className={`bg-gradient-to-br from-gray-700 to-gray-600 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300 scale-in stagger-${index + 1}`}>
                  <item.icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Roll Section */}
      <section ref={howRef} className="py-20 px-4 sm:px-6 lg:px-8 fade-right">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            How We <span className="text-cyan-400">Roll</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl scale-in stagger-1">
              <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Every Weekend</h3>
              <p className="text-gray-200">
                Group workouts (outdoors, turf, trails, gyms, etc.)
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-8 rounded-2xl scale-in stagger-2">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Weekdays</h3>
              <p className="text-gray-200">
                Stay connected via group chats for check-ins, challenges & support
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 rounded-2xl">
            <p className="text-2xl font-bold text-white">
              Just show up. We'll handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section ref={whoRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Who Can <span className="text-cyan-400">Join</span>?
          </h2>
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-12 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Anyone. Anywhere. Anytime.
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              Whether you're a beginner or a beast —
            </p>
            <p className="text-xl text-gray-200 mb-6">
              If you're ready to move, grow, and commit,
            </p>
            <p className="text-2xl font-bold text-cyan-400">
              You belong here.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section ref={purposeRef} className="py-20 px-4 sm:px-6 lg:px-8 fade-left">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Our <span className="text-cyan-400">Purpose</span>
          </h2>
          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 p-12 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">The Mission:</h3>
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed italic font-medium">
              "To build a strong, purpose-driven community where every individual can move better, live stronger, and stay consistent — together."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700 fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to join the movement?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            DM us your name, age, contact, why you want to join.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl scale-in stagger-1">
              <h3 className="text-xl font-bold text-white mb-2">Contact:</h3>
              <p className="text-gray-100">+91 XXXX-XXXX-XX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl scale-in stagger-2">
              <h3 className="text-xl font-bold text-white mb-2">Instagram:</h3>
              <p className="text-gray-100">@revline_official</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <span>Let's Rev It Up, Together!</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;