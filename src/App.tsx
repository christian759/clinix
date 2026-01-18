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


function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

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
