import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
// import profileImg from '../assets/fred01.JPG';
// import avatarImg from '../assets/fred08.JPG';
import dadImg from '../assets/dad.JPG';
const MyProfile = () => {
  return (
    <div className="my-profile-container">

      {/* NavBar */}
      <nav className="navbar">
        <h1 className="navbar-title">Roommate Finder</h1>
        <ul className="navbar-links">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/dashboard">📋 Dashboard</Link></li>
          <li><Link to="/messages">💬 Messages</Link></li>
          <li><Link to="/support">🛟 Support</Link></li>
        </ul>
        <img src={dadImg} alt="User" className="navbar-avatar" />
      </nav>

      {/* Profile Title */}
      <div className="profile-topbar">
        <h2>My Profile</h2>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <img src={dadImg} alt="Profile" className="profile-avatar" />
        <div className="profile-bio">
          <h2>Besong robert</h2>
          <span>besongrobert30@gmal.com</span>
          <p>25 yrs • Buea, Cameroon</p>
          <button className="edit-btn">✏️ Edit Profile</button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-sections">

        <section className="profile-section">
          <h3>🎯 Basic Info</h3>
          <ul>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Date of Birth:</strong> Jan 5, 1999</li>
            <li><strong>Occupation:</strong> Software Engineer</li>
            <li><strong>Budget:</strong> ₦150,000/month</li>
            <li><strong>Preferred Move-in:</strong> July 1, 2025</li>
          </ul>
        </section>

        <section className="profile-section">
          <h3>💡 Lifestyle Preferences</h3>
          <ul>
            <li><strong>Smoking:</strong> No</li>
            <li><strong>Drinking:</strong> Occasionally</li>
            <li><strong>Sleeping Schedule:</strong> Night Owl</li>
            <li><strong>Cleanliness:</strong> Very Clean</li>
            <li><strong>Guests:</strong> Occasionally</li>
            <li><strong>Pets:</strong> No</li>
          </ul>
        </section>

        <section className="profile-section">
          <h3>🤝 Roommate Preferences</h3>
          <ul>
            <li><strong>Preferred Gender:</strong> No Preference</li>
            <li><strong>Age Range:</strong> 22–30</li>
            <li><strong>Occupation:</strong> Student or Professional</li>
            <li><strong>Lifestyle Match:</strong> Quiet, Clean, Friendly</li>
            <li><strong>Pet Friendly:</strong> Yes</li>
          </ul>
        </section>

        <section className="profile-section">
          <h3>📌 About Me</h3>
          <p>
            I'm a laid-back, clean, and tech-savvy person. I enjoy gaming, coding, and meaningful conversations.
            Seeking a respectful and chill roommate around Lekki or Ikeja.
          </p>
        </section>

        <section className="profile-section">
          <h3>🔒 Verification</h3>
          <ul className="verified-list">
            <li>✅ Email Verified</li>
            <li>✅ Phone Verified</li>
            <li>✅ ID Verified</li>
          </ul>
        </section>

        <section className="profile-section">
          <h3>📦 My Listings</h3>
          <p>No listings posted yet. <Link to="/post-listing">Post one now</Link>.</p>
        </section>
      </div>

      {/* Footer Controls */}
      <footer className="profile-footer">
        <button className="footer-btn">🔐 Change Password</button>
        <button className="footer-btn danger">🗑️ Deactivate Account</button>
      </footer>
    </div>
  );
};

export default MyProfile;
