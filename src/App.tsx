import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import Layout from './components/Layout';
import Home from './pages/Home';
import UpcomingEvents from './pages/UpcomingEvents';
import CompletedEvents from './pages/CompletedEvents';
import Crew from './pages/Crew';
import Terms from './pages/Terms';

// Admin Imports
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/admin/Login';
import EventsList from './pages/admin/EventsList';
import EventForm from './pages/admin/EventForm';
import DriveLinkEditor from './pages/admin/DriveLinkEditor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/upcoming-events"
        element={
          <Layout>
            <UpcomingEvents />
          </Layout>
        }
      />
      <Route
        path="/completed-events"
        element={
          <Layout>
            <CompletedEvents />
          </Layout>
        }
      />
      <Route
        path="/crew"
        element={
          <Layout>
            <Crew />
          </Layout>
        }
      />
      <Route
        path="/terms"
        element={
          <Layout>
            <Terms />
          </Layout>
        }
      />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/events" replace />} />
          <Route path="events" element={<EventsList />} />
          <Route path="events/new" element={<EventForm />} />
          <Route path="events/:id/edit" element={<EventForm />} />
          <Route path="events/:id/media" element={<DriveLinkEditor />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;