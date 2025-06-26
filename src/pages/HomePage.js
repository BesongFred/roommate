
// HomePage.jsx
import React from 'react';
import { FaUserFriends, FaShieldAlt, FaComments } from 'react-icons/fa';
import './HomePage.css';
//import roommateListings from './ListingsPage'
import { Link } from 'react-router-dom';
//import ListingsPage from './ListingsPage';
import ListingCard from './ListingCard';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">Roommate Finder</div>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Find Your Perfect Roommate</h1>
        <p>Browse verified listings and connect with people who match your lifestyle.</p>
        <p>Smart. Safe. Simple.</p>
        <Link to="/login" className="cta-btn">Get Started</Link>
      </header>

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
    
    <ListingCard />

      <section id="how" className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Create a profile</li>
          <li>Browse matches</li>
          <li>Chat and connect</li>
          <li>Move in with confidence</li>
        </ol>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;

