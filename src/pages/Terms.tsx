import React from 'react';
import { FileText, Shield, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Terms: React.FC = () => {
  const headerRef = useScrollAnimation();
  const comingSoonRef = useScrollAnimation();
  const keyPointsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms & <span className="text-cyan-400">Conditions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our community guidelines and legal framework to ensure a safe, 
            supportive environment for all RevLine members.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div ref={comingSoonRef} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-12 text-center shadow-2xl mb-16 scale-in">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Legal Documentation
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our comprehensive terms and conditions, privacy policy, and community guidelines 
              are being finalized by our legal team to ensure the best protection and clarity for all members.
            </p>
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 px-6 py-3 rounded-full">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Key Points Preview */}
        <div ref={keyPointsRef} className="grid md:grid-cols-2 gap-8 mb-16 fade-left">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl scale-in stagger-1">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Safety First</h3>
            <p className="text-gray-200 leading-relaxed">
              All activities are designed with safety as our top priority. 
              Proper guidelines and safety protocols will be clearly outlined.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-8 rounded-2xl scale-in stagger-2">
            <AlertCircle className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Community Standards</h3>
            <p className="text-gray-200 leading-relaxed">
              Our community thrives on respect, support, and positive energy. 
              Clear guidelines ensure everyone feels welcome and valued.
            </p>
          </div>
        </div>

        {/* Temporary Contact Section */}
        <div ref={contactRef} className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-center fade-up">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            In the meantime, if you have any questions about participation, safety, or community guidelines, 
            please don't hesitate to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Contact Us
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;