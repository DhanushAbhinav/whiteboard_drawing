import React from 'react';
import Whiteboard from '../components/Whiteboard';
import Toolbar from '../components/Toolbar';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const WhiteboardSession: React.FC = () => {
  return (
    <div className="whiteboard-session">
      <Toolbar />
      <Sidebar />
      <Whiteboard />
      <Chat />
    </div>
  );
};

export default WhiteboardSession;