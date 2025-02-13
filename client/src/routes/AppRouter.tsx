import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import MainPage from '../pages/MainPage';
import AuthPage from '../pages/AuthPage';
import PrivateRoute from './PrivateRoutes';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
