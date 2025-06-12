// src/pages/TermsAndConditions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to Roommate Finder. By using our website and services, you agree to the following terms and conditions.
        Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Service</h2>
      <p className="mb-4">
        You must be at least 18 years old to use this site. You agree not to misuse the services we provide.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Conduct</h2>
      <p className="mb-4">
        You agree to provide accurate information, not post illegal or inappropriate content, and respect other users.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Listings</h2>
      <p className="mb-4">
        Room listings must be truthful and comply with applicable housing laws. We reserve the right to remove listings
        that violate our guidelines.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Privacy</h2>
      <p className="mb-4">
        Your information is protected under our Privacy Policy. We do not sell your data to third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Liability</h2>
      <p className="mb-4">
        We are not liable for interactions or agreements made between users. Use the platform responsibly.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        By continuing to use Roommate Finder, you agree to these terms. For questions, please contact support.
      </p>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
