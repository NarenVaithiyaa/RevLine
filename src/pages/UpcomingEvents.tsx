import React from 'react';
import EventCard from '../components/EventCard';
import SpecialEventCard from '../components/SpecialEventCard';
import { Calendar, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const UpcomingEvents: React.FC = () => {
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-8 fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Upcoming <span className="text-cyan-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us for high-energy training sessions that will push your limits and strengthen our community. 
            Every session is designed to challenge, inspire, and unite us in our fitness journey.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 fade-up">
          <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center scale-in stagger-1">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center scale-in stagger-2">
            <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-300">Sessions Planned</div>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center scale-in stagger-3">
            <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">90</div>
            <div className="text-gray-300">Minutes Per Session</div>
          </div>
        </div>

        <div className="mb-16">
          {/* Special Featured Event */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="text-cyan-400">Session</span>
              </h3>
            </div>
            <div className="flex justify-center px-4">
              {/* Featured event (new) */}
              <SpecialEventCard
                sessionNumber={18}
                date="TBA"
                venue="TBA"
                time="TBA"
                agenda="Details coming soon — stay tuned!"
                isCompleted={false}
              />
            </div>
          </div>

          {/* Other Events */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                More <span className="text-cyan-400">Sessions</span>
              </h3>
            </div>
            <div className="flex justify-center px-4">
              <div className="w-full max-w-md">
                <EventCard
                  event={{
                    sessionNumber: 19,
                    date: 'TBA',
                    venue: 'TBA',
                    time: 'TBA',
                    agenda: 'Details coming soon — stay tuned!',
                      imageSrc: '#',
                  }}
                />
              </div>
            </div>

            {/* Badminton Tournament Section */}
            <div className="mt-16 text-center px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Badminton <span className="text-cyan-400">Tournament</span>
              </h3>
              <div className="flex justify-center">
                <div className="group w-full max-w-md [perspective:1000px] cursor-pointer">
                  <div className="relative w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="relative w-full [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20 bg-gray-900/40 backdrop-blur-xl">
                      <img 
                        src="/images/tournament.jpeg" 
                        alt="Badminton Tournament" 
                        className="w-full h-auto block"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `
                            <div class="w-full h-64 flex items-center justify-center bg-gray-800 text-white font-bold text-lg">
                              Tournament Image
                            </div>
                          `;
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-bold text-lg">Hover for Details</p>
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20 bg-gray-900/40 backdrop-blur-xl">
                      <img 
                        src="/images/general_info.jpeg" 
                        alt="Tournament Info" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gray-800 text-white font-bold text-lg">
                              General Info
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="bg-white/5 backdrop-blur-md text-gray-400 font-bold py-3 px-8 rounded-xl cursor-not-allowed border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  Registration link coming soon
                </button>
              </div>
            </div>

            {/* Rules and Regulations Section */}
            <div className="mt-16 px-4 max-w-4xl mx-auto text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Rules and <span className="text-cyan-400">Regulations</span>
              </h3>
              
              <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl">
                <h4 className="text-xl font-bold text-cyan-400 mb-4 text-center">BADMINTON TOURNAMENT RULES & REGULATIONS</h4>
                <p className="text-gray-300 text-center mb-6 font-semibold">Doubles – Knockout Format<br/>Scoring: 15 Points | Best of 3 | Match Point at 14</p>
                
                <div className="space-y-6 text-gray-300 text-sm md:text-base">
                  <div>
                    <h5 className="font-bold text-white mb-2">1. Tournament Format</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>1.1 The tournament will be played in a knockout (single elimination) format.</li>
                      <li>1.2 Any type of doubles team is allowed (Men’s, Women’s, Mixed Doubles).</li>
                      <li>1.3 A team losing a match is eliminated from the tournament.</li>
                      <li>1.4 Fixtures/brackets will be generated before the event begins.</li>
                      <li>1.5 Walkovers will be given if a team does not report within 10 minutes of their match call.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">2. Match Format</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>2.1 Each match will be played for Best of 3 games.</li>
                      <li>2.2 Each game is played to 15 points.</li>
                      <li>2.3 Match point at 14–14: If the score reaches 14–14, the team that wins the next point (15th point) wins the game. No deuce beyond 14.</li>
                      <li>2.4 Changing sides: Players change sides after the first game. In the third game, change sides when one team reaches 8 points.</li>
                      <li>2.5 A 60-second interval is allowed between games.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">3. Serving Rules</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>3.1 Standard Rally Point System is used (every rally wins a point).</li>
                      <li>3.2 Right-side player serves when their team score is even; left-side player serves when score is odd.</li>
                      <li>3.3 The serve must be below the waist with a continuous forward motion.</li>
                      <li>3.4 A fault will be called for: Wrong server, Shuttle not hit below waist, Stepping on lines during serve, Serving before receiver is ready.</li>
                      <li>3.5 Let serve will be replayed if the shuttle gets stuck on the net.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">4. Player & Team Regulations</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>4.1 Each team must consist of 2 players only.</li>
                      <li>4.2 No substitution is allowed after the match begins.</li>
                      <li>4.3 Players must report with proper sports attire and non-marking shoes.</li>
                      <li>4.4 Team name and order must be declared before match.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">5. Court & Equipment</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>5.1 Standard badminton court dimensions will be used.</li>
                      <li>5.2 Only tournament-approved shuttles will be used.</li>
                      <li>5.3 Net height must be maintained at 1.55 m at edges and 1.524 m at center.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">6. Faults</h5>
                    <p className="mb-1">A fault is declared when:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>6.1 Shuttle lands outside boundary lines.</li>
                      <li>6.2 A player touches the net (body or racket).</li>
                      <li>6.3 Shuttle is hit twice by the same team.</li>
                      <li>6.4 Continuous obstruction or distraction to opponents.</li>
                      <li>6.5 Racket crosses over the net before contacting shuttle.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">7. Conduct</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>7.1 Players must maintain discipline and sportsmanship.</li>
                      <li>7.2 Arguments with referees/officials will not be tolerated.</li>
                      <li>7.3 Referee’s decision is final and binding.</li>
                      <li>7.4 Any misconduct may lead to warnings, point deductions, or disqualification.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">8. Tie-Breaking (If Needed for Ranking)</h5>
                    <p className="mb-1">(Only if used in group stage, but not required for knockout)</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Higher game difference</li>
                      <li>Higher point difference</li>
                      <li>Head-to-head record</li>
                      <li>Toss if still tied</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">9. Safety</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>9.1 Players are responsible for their personal safety.</li>
                      <li>9.2 Any injury must be reported immediately to officials.</li>
                      <li>9.3 A maximum 3-minute medical timeout is allowed.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">10. Miscellaneous</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>10.1 Umpire/organizer holds final authority on rules.</li>
                      <li>10.2 No external coaching during the rallies.</li>
                      <li>10.3 All matches must start on time as scheduled.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div ref={infoRef} className="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">What to Expect</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
            {/* What to Bring Card */}
            <div className="w-full max-w-xs md:w-64 h-96 bg-gray-900/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 p-6 md:p-9 space-y-3 relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl font-bold">01</p>
              </div>
              <div className="fill-cyan-400 w-12">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <h1 className="font-bold text-xl text-white">What to Bring</h1>
              <ul className="text-sm text-gray-300 leading-6 space-y-1">
                <li>• Water bottle and towel</li>
                <li>• Comfortable workout clothes</li>
                <li>• Training shoes</li>
                <li>• Personal yoga mat (optional)</li>
                <li>• Positive attitude and energy!</li>
              </ul>
            </div>

            {/* Session Benefits Card */}
            <div className="w-full max-w-xs md:w-64 h-96 bg-gray-900/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 p-6 md:p-9 space-y-3 relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl font-bold">02</p>
              </div>
              <div className="fill-cyan-400 w-12">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h1 className="font-bold text-xl text-white">Session Benefits</h1>
              <ul className="text-sm text-gray-300 leading-6 space-y-1">
                <li>• Guided workouts</li>
                <li>• Community support & motivation</li>
                <li>• Progressive fitness challenges</li>
                <li>• Networking with like-minded people</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;