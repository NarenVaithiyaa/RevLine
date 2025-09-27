import React from 'react';
import { Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Crew: React.FC = () => {
  const headerRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16 fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Crew</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals who make RevLine the strongest fitness community. 
            Together, we're building something extraordinary.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/nikileshh.jpg" alt="Nikileshh S" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Nikileshh S</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/rohith_dharshan.jpg" alt="Rohith Dharshan M" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Rohith Dharshan M</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/sanjeev.jpg" alt="Sanjeev Muthusamy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Sanjeev Muthusamy</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/madhumitha.jpg" alt="Madhumitha B" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Madhumitha B</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/logini.jpg" alt="Logini T S" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Logini T S</h3>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/karthik_saravanan.jpg" alt="Karthik Saravanan" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Karthik Saravanan</h3>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/Suresh.jpg" alt="Suresh" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Suresh</h3>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/aakash_bala.jpg" alt="Aakash Bala" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Aakash Bala</h3>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/soorya.jpg" alt="Soorya G" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Soorya G</h3>
            </div>
          </div>

          {/* Card 10 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="aspect-square">
              <img src="/crew_images/naren.jpg" alt="Naren Vaithiyaa G" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/60 via-black/50 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg text-center">Naren Vaithiyaa G</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;