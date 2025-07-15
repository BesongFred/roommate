import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar'; // ✅ Navbar component

// Images
import logoImg from '../assets/fred01.JPG';
import room1Img from '../assets/room1.jpg';
import room2Img from '../assets/room2.jpg';
import room3Img from '../assets/room3.jpg';
import room4Img from '../assets/room4.jpg';
import room5Img from '../assets/room5.jpg';
import room6Img from '../assets/room6.jpg';
import dadImg from '../assets/dad.JPG';
import home1Img from '../assets/home1.jpg';
import home11Img from '../assets/home11.jpg';

import './Dashboard.css';

const mockListings = [
  { id: 1, title: 'Student Room', town: 'Buea', location: 'mile-17', image: dadImg },
  { id: 2, title: 'Beachside Room', town: 'Limbe', location: 'mile-4', image: home1Img },
  { id: 3, title: 'City Apartment', town: 'Douala', location: 'bonaberi', image: home11Img },
  { id: 4, title: 'Cozy Room', town: 'Kumba', location: 'fiango', image: logoImg },
  { id: 5, title: 'Single Studio', town: 'Mutegene', location: 'mutengene-junction', image: room5Img },
  { id: 6, title: 'Shared Flat', town: 'Yaounde', location: 'bastos', image: room3Img },
  { id: 7, title: 'Budget Room', town: 'Betua', location: 'center-town', image: room4Img },
  { id: 8, title: 'Compact Studio', town: 'Mamfe', location: 'mamfe-town', image: room6Img },
  { id: 9, title: 'Modern Room', town: 'Tiko', location: 'airport-road', image: room2Img },
  { id: 10, title: 'Quiet Space', town: 'Muea', location: 'checkpoint', image: room1Img },
];

const Dashboard = () => {
  const currentYear = new Date().getFullYear();

  const [idSearch, setIdSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [titleSearch, setTitleSearch] = useState('');
  const [townSearch, setTownSearch] = useState('');
  const [filteredListings, setFilteredListings] = useState(mockListings);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = mockListings.filter((listing) =>
      (idSearch === '' || String(listing.id) === idSearch) &&
      (locationSearch === '' || listing.location === locationSearch) &&
      (titleSearch === '' || listing.title === titleSearch) &&
      (townSearch === '' || listing.town === townSearch)
    );
    setFilteredListings(filtered);
  };

  const handleReset = () => {
    setIdSearch('');
    setLocationSearch('');
    setTitleSearch('');
    setTownSearch('');
    setFilteredListings(mockListings);
  };

  return (
    <main className="dashboard">
      {/* ✅ Reusable Navbar */}
      <Navbar />

      <header className="dashboard-header">
        <form className="search-section" onSubmit={handleSearch}>
          <div className="flex-box">
            <select value={idSearch} onChange={(e) => setIdSearch(e.target.value)} className="search-input">
              <option value="">All IDs</option>
              {mockListings.map((listing) => (
                <option key={listing.id} value={listing.id}>{listing.id}</option>
              ))}
            </select>

            <select value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)} className="search-input">
              <option value="">All Locations</option>
              {[...new Set(mockListings.map((l) => l.location))].map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            <select value={titleSearch} onChange={(e) => setTitleSearch(e.target.value)} className="search-input">
              <option value="">All Titles</option>
              {[...new Set(mockListings.map((l) => l.title))].map((title) => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>

            <select value={townSearch} onChange={(e) => setTownSearch(e.target.value)} className="search-input">
              <option value="">All Towns</option>
              {[...new Set(mockListings.map((l) => l.town))].map((town) => (
                <option key={town} value={town}>{town}</option>
              ))}
            </select>

            <button type="submit" className="search-btn">🔍</button>
          </div>
        </form>
      </header>

      <section className="listing-preview">
        <h2 id="featured-listings">Featured Listings</h2>
        <div className="listing-grid">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <div key={listing.id} className="listing-card">
                <img src={listing.image} alt={listing.title} className="listing-image" />
                <p className="listing-title">#{listing.id} - {listing.title}</p>
                <p className="listing-town">📍 {listing.town}</p>
                <p className="listing-town">📌 {listing.location}</p>
              </div>
            ))
          ) : (
            <p>No listings found.</p>
          )}
        </div>
      </section>

      {(filteredListings.length < mockListings.length || locationSearch || titleSearch || townSearch || idSearch) && (
        <div className="reset-btn-container">
          <button className="reset-btn" onClick={handleReset}>🔄 Show All Listings</button>
        </div>
      )}

      {/* Extra Navigation Options */}
      <section className="more-options">
        <h2 className="more-options-title">What Are You Looking For?</h2>
        <div className="more-options-grid">
          <Link to="/find-roommate" className="option-card">
            <h3>🔍 Find a Roommate</h3>
            <p>Browse profiles of compatible roommates near you.</p>
          </Link>
          <Link to="/list-your-room" className="option-card">
            <h3>🏡 List Your Room</h3>
            <p>Have a room? Post it and connect with potential roommates.</p>
          </Link>
          <Link to="/verified-roommates" className="option-card">
            <h3>👯‍♂️ Meet Verified Roommates</h3>
            <p>Chat with people who have verified their profiles</p>
          </Link>
        </div>
      </section>

      <section className="support-link-bottom center-support">
        <Link to="/support" className="action-card">🛟 Help & Support</Link>
      </section>

      <footer className="footer">
        <small>&copy; {currentYear} Roommate Finder. All rights reserved.</small>
      </footer>
    </main>
  );
};

export default Dashboard;
