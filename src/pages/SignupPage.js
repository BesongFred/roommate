import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signup attempted:\nEmail: ${email}\nPassword: ${password}`);
    // TODO: Replace with real backend/auth
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-7 p-2 border rounded"
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Create Account
        </button>
        <div className="text-center mt-2 mb-4">
  <button
    type="button"
    onClick={() => navigate('/forgot-password')}
    className="text-sm text-blue-500 hover:underline"
  >
    Forgot password?
  </button>
</div>

        <div className="text-center text-sm">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-blue-900 hover:underline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
