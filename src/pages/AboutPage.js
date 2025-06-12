import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, MessageCircle, Home } from 'lucide-react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Co-Founder & CEO', img: '/images/team1.jpg' },
  { name: 'Mark Chen', role: 'CTO', img: '/images/team2.jpg' },
  { name: 'Sara Kim', role: 'Product Designer', img: '/images/team3.jpg' },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">Roommate Finder</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/listings" className="hover:text-blue-600">Listings</Link>
          <Link to="/AboutPage" className="hover:text-blue-600">About</Link>
          
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-24 text-black"
        style={{ backgroundImage: "url('/images/roommates.jpg')" }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Roommate Finder</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Discover compatible roommates with ease. Safe, smart, and stress-free.
          </p>
          <Link to="/signup">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="py-16 px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">What We Offer</h2>
        <ul className="grid gap-6 md:grid-cols-2 text-gray-700 text-lg">
          <li className="flex items-start gap-3">
            <ShieldCheck className="text-indigo-600 mt-1" />
            Verified user profiles with safety in mind
          </li>
          <li className="flex items-start gap-3">
            <Users className="text-indigo-600 mt-1" />
            Smart roommate matching based on preferences
          </li>
          <li className="flex items-start gap-3">
            <MessageCircle className="text-indigo-600 mt-1" />
            Secure messaging to communicate confidently
          </li>
          <li className="flex items-start gap-3">
            <Home className="text-indigo-600 mt-1" />
            Listings of rooms, shared apartments, and homes
          </li>
        </ul>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="bg-indigo-50 py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Our Mission</h2>
          <p className="text-lg text-indigo-700 mb-6">
            We're building a platform that empowers people to live better together through trust, transparency, and technology.
          </p>
          <Link to="/about-details">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call To Action */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect roommate?</h2>
          <p className="text-lg mb-6">Join thousands who’ve already matched successfully on Roommate Finder.</p>
          <Link to="/signup">
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Join Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
