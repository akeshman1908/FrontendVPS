import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage/Landingpage';
import SubscriptionPage from './Pages/SubscriptionPage/SubscriptionPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />



      </Routes>
    </Router>
  );
}

export default App;
