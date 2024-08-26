import React from 'react';
import { exportAsImage, exportAsPDF } from '../utils/exportUtils';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <button onClick={() => exportAsImage('whiteboard')}>Export as Image</button>
      <button onClick={() => exportAsPDF('whiteboard')}>Export as PDF</button>
    </div>
  );
};

export default Toolbar;