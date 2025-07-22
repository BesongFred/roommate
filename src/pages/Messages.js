import React, { useState, useEffect, useRef } from 'react';
import './messages.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample users and messages
const sampleUsers = {
  1: 'John Doe',
  2: 'Besong Robert',
  3: 'Ampam Estella',
  4: 'Flurent',
  5: 'Peter Paul',
};

const sampleMessages = [
  { id: 2, senderId: 2, receiverId: 1, content: 'Yes, it is! Would you like to visit?', timestamp: '2025-06-25T09:05:00Z' },
  { id: 3, senderId: 3, receiverId: 1, content: 'Hello, is the price negotiable?', timestamp: '2025-06-25T10:00:00Z' },
  { id: 4, senderId: 1, receiverId: 3, content: 'Yes, what’s your budget?', timestamp: '2025-06-25T10:01:00Z' },
  { id: 5, senderId: 4, receiverId: 1, content: 'Can I get photos of the room?', timestamp: '2025-06-25T10:15:00Z' },
];

const MessagesPage = () => {
  const currentUserId = 1;
  const [conversations, setConversations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Get user conversations
  useEffect(() => {
    const userIds = new Set();
    sampleMessages.forEach((msg) => {
      if (msg.senderId === currentUserId) userIds.add(msg.receiverId);
      if (msg.receiverId === currentUserId) userIds.add(msg.senderId);
    });
    setConversations(Array.from(userIds));
  }, []);

  // Scroll to bottom when chat messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Open conversation thread
  const openConversation = (userId) => {
    setSelectedUser(userId);
    const thread = sampleMessages.filter(
      (msg) =>
        (msg.senderId === currentUserId && msg.receiverId === userId) ||
        (msg.senderId === userId && msg.receiverId === currentUserId)
    );
    setChatMessages(thread);
  };

  // Send message logic
  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: sampleMessages.length + 1,
      senderId: currentUserId,
      receiverId: selectedUser,
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    sampleMessages.push(message);
    setChatMessages((prev) => [...prev, message]);
    setNewMessage('');
  };

  return (
    <div className="page-wrapper">
      <Header />

      <div className="messages-container">
        {/* === Sidebar === */}
        <aside className="conversations-list"><br></br>
          <h2>💬 Conversations</h2>
          <ul>
            {conversations.map((userId) => (
              <li
                key={userId}
                onClick={() => openConversation(userId)}
                className={selectedUser === userId ? 'active' : ''}
              >
                {sampleUsers[userId]}
              </li>
            ))}
          </ul>
        </aside>

        {/* === Chat Window === */}
        <section className="chat-window">
          {selectedUser ? (
            <>
              <h3>Chat with {sampleUsers[selectedUser]}</h3>
              <div className="chat-messages">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chat-bubble ${msg.senderId === currentUserId ? 'sent' : 'received'}`}
                  >
                    <p>{msg.content}</p>
                    <small>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* === Chat Input === */}
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="placeholder">
              🤖 Welcome! Select a user on the left to start chatting.
            </div>
          )}
        </section>
      </div>

      {/* === Footer at bottom === */}
      <Footer />
    </div>
  );
};

export default MessagesPage;
