import React, { useState, useEffect } from 'react';
import './messages.css';

const sampleUsers = {
  1: 'John Doe',
  2: 'Besong Robert',
  3: 'Ampam Estella',
  4: 'Flurent ',
  5: 'Peter Paul',
};

const sampleMessages = [
//   { id: 1, senderId: 1, receiverId: 2, content: 'Hi! Is the room still available?', timestamp: '2025-06-25T09:00:00Z' },
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

  useEffect(() => {
    const userIds = new Set();
    sampleMessages.forEach((msg) => {
      if (msg.senderId === currentUserId) userIds.add(msg.receiverId);
      if (msg.receiverId === currentUserId) userIds.add(msg.senderId);
    });
    setConversations(Array.from(userIds));
  }, []);

  const openConversation = (userId) => {
    setSelectedUser(userId);
    const thread = sampleMessages.filter(
      (msg) =>
        (msg.senderId === currentUserId && msg.receiverId === userId) ||
        (msg.senderId === userId && msg.receiverId === currentUserId)
    );
    setChatMessages(thread);
  };

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
    setChatMessages([...chatMessages, message]);
    setNewMessage('');
  };

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <h1>🏠 RoomMateFinder</h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/messages" className="active">Messages</a>
          <a href="/profile">Profile</a>
        </div>
      </nav>

      <div className="messages-container">
        <aside className="conversations-list">
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
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="placeholder">Select a conversation to start chatting</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MessagesPage;
