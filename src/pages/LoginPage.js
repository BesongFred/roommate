// src/LoginPage.js
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('Please agree to the Terms and Conditions.');
      return;
    }
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '3rem 2rem',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#333',
          fontSize: '1.75rem',
        }}>
          Welcome Back 👋
        </h2>

        <label style={{ fontSize: '0.875rem', marginBottom: '0.25rem', color: '#555' }}>
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '0.75rem',
            marginBottom: '1.25rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outlineColor: '#667eea',
          }}
        />

        <label style={{ fontSize: '0.875rem', marginBottom: '0.25rem', color: '#555' }}>
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '0.75rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outlineColor: '#667eea',
          }}
        />

        <label style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: '#444',
          marginBottom: '1rem',
        }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            style={{ marginRight: '0.5rem' }}
          />
          I agree to the <a href="/TermsAndConditions" style={{ color: '#667eea', textDecoration: 'underline', marginLeft: '0.25rem' }}>
  Terms and Conditions
</a>

        </label>

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#667eea',
            color: 'white',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5a67d8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
        >
          Login
        </button>
      </form>
    </div>
  );
}
