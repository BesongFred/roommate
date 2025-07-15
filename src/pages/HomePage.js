// HomePage.jsx
import React from "react";
import { FaUserFriends, FaShieldAlt, FaComments } from "react-icons/fa";
import "./HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import roommateListings from './ListingsPage'
import { Link } from "react-router-dom";
//import ListingsPage from './ListingsPage';
// import ListingCard from "./ListingCard";

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />
      <header className='hero'>
        <h1>Find Your Perfect Roommate</h1>
        <p>
          Browse verified listings and connect with people who match your
          lifestyle.
        </p>
        <p>Smart. Safe. Simple.</p>
        <Link to='/login' className='cta-btn'>
          Get Started
        </Link>
      </header>

      <section id='features' className='features'>
        <div className='feature-box'>
          <FaUserFriends size={40} color='#FF4B2B' />
          <h3>Personality Matching</h3>
          <p>
            We match you based on lifestyle and living preferences, not just
            location.
          </p>
        </div>
        <div className='feature-box'>
          <FaShieldAlt size={40} color='#FF4B2B' />
          <h3>Verified Profiles</h3>
          <p>Every roommate is verified for safety and authenticity.</p>
        </div>
        <div className='feature-box'>
          <FaComments size={40} color='#FF4B2B' />
          <h3>Chat & Connect</h3>
          <p>
            Built-in messaging makes it easy to get to know potential roommates.
          </p>
        </div>
      </section>

      {/* <ListingCard /> */}

      <section
        id='how'
        className='how-it-works w-full overflow-hidden whitespace-nowrap'
      >
        <h2 className='text-xl font-bold text-[#003151]'>How It Works</h2> 
        <ol className='animate-marquee flex text-xl font-bold text-[#003151]'>
          <li className='mx-4 shrink-0 '>Create a profile</li>
          <li className='mx-4 shrink-0 '>Browse matches</li>
          <li className='mx-4 shrink-0 '>Chat and connect</li>
          <li className='mx-4 shrink-0 '>Move in with confidence</li>
        </ol>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
