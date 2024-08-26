import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const createSession = () => {
    const sessionId = Math.random().toString(36).substring(2, 9);
    navigate(/session/${sessionId});
  };

  return (
    <div className="container">
      <h1>Welcome to Collaborative Whiteboard</h1>
      <button className="btn btn-primary" onClick={createSession}>
        Create Session
      </button>
    </div>
  );
};

export default Home;