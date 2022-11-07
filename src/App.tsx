import React from 'react';
import Dashboard from "./pages/dashboard/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import UserPage from "./pages/userPage/UserPage";
import UserDetails from './pages/userDetails/UserDetailsPage';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Dashboard />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/user/:id" element={<UserDetails />}/>
    <Route path="/users" element={<UserPage />}/>
  </Routes>
  );
}

export default App;
