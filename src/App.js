import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landingpage/Landingpage";
import SubscriptionPage from "./Pages/SubscriptionPage/SubscriptionPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import StocksPage from "./Pages/StocksPage/StocksPage";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute"; // Import PrivateRoute
import CryptocurrencyPage from "./Pages/CryptocurrencyPage/CryptocurrencyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protect these routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/stocks"
          element={
            <PrivateRoute>
              <StocksPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cryptocurrency"
          element={
            <PrivateRoute>
              <CryptocurrencyPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
