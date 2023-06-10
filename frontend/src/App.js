import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;



