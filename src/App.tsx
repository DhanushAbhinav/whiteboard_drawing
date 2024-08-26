import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useKeycloak } from './hooks/useKeycloak';
import Home from './pages/Home';
import WhiteboardSession from './pages/WhiteboardSession';

const App: React.FC = () => {
  const { authenticated } = useKeycloak();

  if (!authenticated) {
    return <div>Loading...</div>; // Can replace with a loader or splash screen
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/session/:id" element={<WhiteboardSession />} />
      </Routes>
    </Router>
  );
};

export default App;