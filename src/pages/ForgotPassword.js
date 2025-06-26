// src/components/ForgotPassword.jsx
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './ForgotPassword.css'; // optional: for styling
import firebaseApp from '../components/firebase/firebase' // adjust path if needed

const auth = getAuth(firebaseApp);

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setStatus('✅ Password reset email sent!');
    } catch (error) {
      setStatus(`⚠️ ${error.message}`);
    }
  };

  return (
    <div className="forgot-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Email</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default ForgotPassword;
