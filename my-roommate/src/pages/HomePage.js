// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter'; // ensure this file exists

// Import the image from assets folder
import roomImage from '../assets/room.jpg';
import loveImage from '../assets/love.jpg';
export default function HomePage() {
  const navigate = useNavigate();

  // Initial listing data
  const listings = [
    { id: 1, name: "Modern Apartment in NYC", location: "New York", price: 1200, img: roomImage },
    { id: 2, name: "Cozy Room in LA", location: "Los Angeles", price: 900, img: loveImage },
    { id: 3, name: "Shared Loft in Chicago", location: "Chicago", price: 1000, img: "https://source.unsplash.com/400x300/?loft" },
  ];

  const [filteredListings, setFilteredListings] = useState(listings);

  const handleFilter = ({ location, maxPrice }) => {
    const filtered = listings.filter((item) =>
      (!location || item.location.toLowerCase().includes(location.toLowerCase())) &&
      (!maxPrice || item.price <= parseInt(maxPrice))
    );
    setFilteredListings(filtered);
  };

  const testimonials = [
    { id: 1, name: "Alice", feedback: "Found the best roommate ever within a week!" },
    { id: 2, name: "Brian", feedback: "Super easy to use and very helpful." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">Roommate Finder</h1>
        <div className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <button onClick={() => navigate('/listings')} className="hover:text-blue-600">Listings</button>
          <button onClick={() => navigate('/about')} className="hover:text-blue-600">About</button>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-purple-200">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Find Your Perfect Roommate</h2>
        <p className="text-lg text-gray-700 mb-6">
          Browse verified listings and connect with people who match your lifestyle.
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </section>

      {/* Search Filters */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h3 className="text-2xl font-semibold mb-4">Search Filters</h3>
        <SearchFilter onFilter={handleFilter} />
      </section>

      {/* Featured Listings */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Featured Listings</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {filteredListings.map(listing => (
            <div key={listing.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={listing.img} alt={listing.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{listing.name}</h4>
                <p className="text-gray-500">{listing.location}</p>
                <p className="text-blue-600 font-bold">${listing.price}/mo</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-4">
        <h3 className="text-2xl font-semibold text-center mb-6">What Our Users Say</h3>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-700 mb-2">"{t.feedback}"</p>
              <p className="text-right font-semibold text-blue-600">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white mt-8 border-t">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
      </footer>
    </div>
  );
}
