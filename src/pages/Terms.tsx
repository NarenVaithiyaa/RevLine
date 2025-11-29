import React from 'react';
import { FileText, Shield, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Terms: React.FC = () => {
  const headerRef = useScrollAnimation();
  const comingSoonRef = useScrollAnimation();
  const keyPointsRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 pt-36 pb-20">
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

        {/* Rules & Regulations Section */}
        <div ref={comingSoonRef} className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center shadow-2xl mb-16 scale-in">
          <h2 className="text-3xl font-bold text-white mb-12">
            Rules & Regulations for Club Members
          </h2>
          <div className="space-y-8 text-gray-300 text-left">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Respect & Inclusivity</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>All members must treat each other with respect, kindness, and inclusivity.</li>
                <li>No discrimination based on age, gender, background, or fitness level.</li>
                <li>Offensive language, harassment, or any form of disrespect will not be tolerated.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Attendance & Participation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Members are encouraged to attend weekend group activities regularly.</li>
                <li>Daily workout check-ins (optional) will help with consistency and motivation.</li>
                <li>Inform admins if you’re unable to attend any group event.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Safety & Health</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Members participate at their own risk. Please consult a doctor before joining if you have health concerns.</li>
                <li>Stay hydrated, wear appropriate attire, and follow basic fitness safety guidelines.</li>
                <li>Report injuries or issues to the organizers immediately.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Communication & Sharing</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the official WhatsApp group or designated platform for updates only (avoid spam).</li>
                <li>Positive sharing: motivational posts, progress photos, or wellness tips are welcome!</li>
                <li>Don’t promote other clubs, events, or products without permission from the admins.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Discipline & Conduct</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Be punctual for sessions and respect the schedule.</li>
                <li>Keep locations clean, and be mindful of public spaces (e.g., parks, gyms, trails).</li>
                <li>Repeated indiscipline or misconduct may lead to temporary or permanent removal from the group.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Community & Growth</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Members can suggest new activities or volunteer as event leaders.</li>
                <li>Referrals are encouraged — bring friends/family who align with our vibe!</li>
                <li>Revline is a community, not a competition — we rise together.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-400 italic">
                By joining Revline, members agree to follow these rules and uphold the values of respect, discipline, and positive community energy.
              </p>
            </div>
          </div>
        </div>

        {/* Key Points Preview */}
        <div ref={keyPointsRef} className="grid md:grid-cols-2 gap-0 mb-0 fade-left">
          <div className="bg-blue-900/20 backdrop-blur-xl border border-white/10 p-8 rounded-2xl scale-in stagger-1">
            <Shield className="w-12 h-12 text-cyan-400 mb-0" />
            <h3 className="text-2xl font-bold text-white mb-0">Safety First</h3>
            <p className="text-gray-200 leading-relaxed">
              All activities are designed with safety as our top priority. 
              Proper guidelines and safety protocols will be clearly outlined.
            </p>
          </div>
          <div className="bg-cyan-900/20 backdrop-blur-xl border border-white/10 p-8 rounded-2xl scale-in stagger-2">
            <AlertCircle className="w-12 h-12 text-cyan-400 mb-0" />
            <h3 className="text-2xl font-bold text-white mb-0">Community Standards</h3>
            <p className="text-gray-200 leading-relaxed">
              Our community thrives on respect, support, and positive energy. 
              Clear guidelines ensure everyone feels welcome and valued.
            </p>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center -mt-6">
          <p className="text-3xl font-bold text-cyan-400">
            Welcome to RevLine! You're joining us on a journey outside of the comfort zone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;