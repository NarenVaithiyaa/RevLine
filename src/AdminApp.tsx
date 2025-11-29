import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/admin/Login';
import EventsList from './pages/admin/EventsList';
import EventForm from './pages/admin/EventForm';
import DriveLinkEditor from './pages/admin/DriveLinkEditor';

function AdminApp() {
  return (
    <Routes>
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

      {/* Redirect root to admin login or events */}
      <Route path="/" element={<Navigate to="/admin/events" replace />} />
      <Route path="*" element={<Navigate to="/admin/events" replace />} />
    </Routes>
  );
}

export default AdminApp;
