import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { useWebSocket } from '../hooks/useWebSocket';
import CursorLayer from './CursorLayer';
import { saveAsImage, exportAsPDF } from '../utils/exportUtils';

const Whiteboard: React.FC = () => {
  const stageRef = useRef<any>(null);
  const [cursors, setCursors] = useState<any[]>([]);
  const socket = useWebSocket('ws://localhost:8080/whiteboard');

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // Update the cursors based on the data
        setCursors(data.cursors || []);
      };
    }
  }, [socket]);

  const handleDraw = (event: any) => {
    // Handle drawing logic
  };

  const handleExport = () => {
    exportAsPDF('whiteboard');
  };

  const handleSave = () => {
    saveAsImage('whiteboard');
  };

  return (
    <div>
      <Stage id="whiteboard" ref={stageRef} width={window.innerWidth} height={window.innerHeight} onMouseDown={handleDraw}>
        <Layer>
          {/* Drawing logic */}
        </Layer>
        <CursorLayer cursors={cursors} />
      </Stage>
      <button onClick={handleExport}>Export as PDF</button>
      <button onClick={handleSave}>Save as Image</button>
    </div>
  );
};

export default Whiteboard;