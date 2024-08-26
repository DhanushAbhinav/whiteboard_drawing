import React, {useState, useEffect} from 'react'
import {useWebSocket} from '../hooks/useWebSocket'

interface ChatMessage {
  user: string
  message: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState<string>('')
  const socket = useWebSocket('ws://localhost:8080/chat')

  useEffect(() => {
    if (socket) {
      socket.onmessage = event => {
        const newMessage: ChatMessage = JSON.parse(event.data)
        setMessages(prevMessages => [...prevMessages, newMessage])
      }
    }
  }, [socket])

  const sendMessage = () => {
    const message = {user: 'User1', message: input} // Replace 'User1' with authenticated user's name
    socket?.send(JSON.stringify(message))
    setInput('')
  }

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}</strong>: {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Chat
