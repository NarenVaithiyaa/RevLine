import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="loader">
        <div data-glitch="Revving..." className="glitch">Revving...</div>
      </div>
    </div>
  );
};

export default Loader;