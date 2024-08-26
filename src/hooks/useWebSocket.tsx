import { useEffect, useState } from 'react';

export const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onopen = () => console.log('Connected to WebSocket');
    setSocket(ws);
    
    return () => {
      ws.close();
    };
  }, [url]);

  return socket;
};