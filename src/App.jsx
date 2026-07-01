import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background3D from './components/Background3D';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <div className="app-container no-scrollbar">
        {/* Persistent 3D Canvas Background */}
        <div className="canvas-container">
          <Background3D />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
