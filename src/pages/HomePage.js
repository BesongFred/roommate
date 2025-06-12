// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter';
import roomImage from '../assets/room.jpg';
import loveImage from '../assets/love.jpg';

export default function HomePage() {
  const navigate = useNavigate();

  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const data = [
        { id: 1, name: "Modern Apartment in NYC", location: "New York", price: 1200, img: roomImage },
        { id: 2, name: "Cozy Room in LA", location: "Los Angeles", price: 900, img: loveImage },
        { id: 3, name: "Shared Loft in Chicago", location: "Chicago", price: 1000, img: loveImage },
      ];
      setListings(data);
      setFilteredListings(data);
    };
    fetchListings();
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = [
        { id: 1, name: "Alice", feedback: "Found the best roommate ever within a week!" },
        { id: 2, name: "Brian", feedback: "Super easy to use and very helpful." },
        { id: 3, name: "Clara", feedback: "The filters helped me find someone who matches my lifestyle." },
      ];
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const handleFilter = ({ location, maxPrice }) => {
    const filtered = listings.filter(item =>
      (!location || item.location.toLowerCase().includes(location.toLowerCase())) &&
      (!maxPrice || item.price <= parseInt(maxPrice))
    );
    setFilteredListings(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-end px-6 py-4 bg-white shadow-md">
        <div className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <button onClick={() => navigate('/ListingsPage')} className="hover:text-blue-600">Listings</button>
          <button onClick={() => navigate('/AboutPage')} className="hover:text-blue-600">About</button>
          <button onClick={() => navigate('/ContactUs')} className="hover:text-blue-600">Contact</button>

          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section - Updated */}
      <section
        className="relative text-white py-24 px-6 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${loveImage})` }}
 // Make sure this path is valid
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Find Your Perfect Roommate</h2>
          <p className="text-lg mb-6">
            Browse verified listings and connect with people who match your lifestyle.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-blue-600 text-4xl mb-2">🏡</div>
          <h4 className="text-xl font-semibold mb-2">Verified Listings</h4>
          <p className="text-gray-600">We verify every listing so you can search with confidence.</p>
        </div>
        <div>
          <div className="text-purple-600 text-4xl mb-2">💬</div>
          <h4 className="text-xl font-semibold mb-2">Messaging</h4>
          <p className="text-gray-600">Chat with potential roommates to see if it's a fit.</p>
        </div>
        <div>
          <div className="text-green-600 text-4xl mb-2">🔍</div>
          <h4 className="text-xl font-semibold mb-2">Smart Filters</h4>
          <p className="text-gray-600">Find matches by price, location, and lifestyle.</p>
        </div>
      </section>

      {/* Search Filter */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h3 className="text-2xl font-semibold mb-4">Search Filters</h3>
        <SearchFilter onFilter={handleFilter} />
      </section>

      {/* Listings */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Featured Room Listings</h3>
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

      {/* FAQ */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg">How do I post my room?</h4>
            <p className="text-gray-600">Sign up, fill out your listing details, and publish it in minutes.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Is it free to use?</h4>
            <p className="text-gray-600">Yes! You can browse listings and chat for free.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white border-t py-12 text-center">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest listings and roommate tips.</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            alert("Thanks for subscribing!");
          }}
          className="flex flex-col md:flex-row justify-center gap-4 px-4"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">Ready to find your roommate?</h3>
        <button
          onClick={() => navigate('/signup')}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white border-t">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
      </footer>
    </div>
  );
}
