import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Layout from '../components/layout/Layout';
import MainPage from '../pages/MainPage';
import AuthPage from '../pages/AuthPage';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
