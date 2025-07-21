import React, { useState } from 'react';
import Loader from './components/Loader';
import Layout from './components/Layout';
import Home from './pages/Home';
import UpcomingEvents from './pages/UpcomingEvents';
import CompletedEvents from './pages/CompletedEvents';
import Crew from './pages/Crew';
import Terms from './pages/Terms';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'upcoming-events':
        return <UpcomingEvents />;
      case 'completed-events':
        return <CompletedEvents />;
      case 'crew':
        return <Crew />;
      case 'terms':
        return <Terms />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {renderPage()}
        </Layout>
      )}
    </>
  );
}

export default App;