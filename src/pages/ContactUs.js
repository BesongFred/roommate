import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // ✅ Reusable Navbar

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can send this to a backend later
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <Navbar />
      {/* Contact Info Section */}
      <section className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Contact Roommate Finder</h2>
        <p className="text-gray-700 text-center mb-8">
          Have questions, suggestions, or need help? We're here to help you find the perfect roommate.
          Use the form below to reach out to us. Our support team typically replies within 24–48 hours.
        </p>

        <div className="bg-white p-8 rounded-xl shadow">
          {submitted ? (
            <p className="text-green-600 text-center font-semibold">Thank you for contacting us!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white border-t">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
      </footer>
    </div>
  );
}
