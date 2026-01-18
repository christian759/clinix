import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Dashboard
import DashboardLayout from './pages/dashboard/Layout';
import Overview from './pages/dashboard/Overview';
import Appointments from './pages/dashboard/Appointments';
import Records from './pages/dashboard/Records';
import Doctors from './pages/dashboard/Doctors';
import Prescriptions from './pages/dashboard/Prescriptions';
import Messages from './pages/dashboard/Messages';
import Settings from './pages/dashboard/Settings';

// Footer Pages
import { About, Contact, Privacy, Terms, Careers, Pricing, Integrations } from './pages/FooterPages';


import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Footer Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/integrations" element={<Integrations />} />

            {/* Nested Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Overview />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="records" element={<Records />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="prescriptions" element={<Prescriptions />} />
              <Route path="messages" element={<Messages />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
