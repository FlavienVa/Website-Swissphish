import React from 'react';

import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' default element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
