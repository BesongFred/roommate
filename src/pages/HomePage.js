// HomePage.jsx
import React from 'react';
import { FaUserFriends, FaShieldAlt, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ListingCard from './ListingCard';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="homepage">
    <Navbar />
      {/* ✅ Hero Section */}
      <header className="hero">
        <h1>Find Your Perfect Roommate</h1>
        <p>Browse verified listings and connect with people who match your lifestyle.</p>
        <p>Smart. Safe. Simple.</p>
        <Link to="/login" className="cta-btn">Get Started</Link>
      </header>
      
      {/* ✅ Features Section */}
      <section id="features" className="features">
        <div className="feature-box">
          <FaUserFriends size={40} color="#FF4B2B" />
          <h3>Personality Matching</h3>
          <p>We match you based on lifestyle and living preferences, not just location.</p>
        </div>
        <div className="feature-box">
          <FaShieldAlt size={40} color="#FF4B2B" />
          <h3>Verified Profiles</h3>
          <p>Every roommate is verified for safety and authenticity.</p>
        </div>
        <div className="feature-box">
          <FaComments size={40} color="#FF4B2B" />
          <h3>Chat & Connect</h3>
          <p>Built-in messaging makes it easy to get to know potential roommates.</p>
        </div>
      </section>

      {/* ✅ Featured Listings (Preview) */}
      <ListingCard />

      {/* ✅ How It Works Section */}
      <section id="how" className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Create a profile</li>
          <li>Browse matches</li>
          <li>Chat and connect</li>
          <li>Move in with confidence</li>
        </ol>
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
