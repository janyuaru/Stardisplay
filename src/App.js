import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Showstar from './pages/Showstar.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Showstar/>} />
      </Routes>
    </Router>
  );
}

export default App;