import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage/Landingpage';
import SubscriptionPage from './Pages/SubscriptionPage/SubscriptionPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import StocksPage from './Pages/StocksPage/StocksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/stocks" element={<StocksPage />} />





      </Routes>
    </Router>
  );
}

export default App;
