import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ShieldCheck,
  Users,
  Eye,
  Mail,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

const AboutDetails = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? 'text-indigo-600 font-semibold' : '';

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-700">
            Roommate Finder
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 text-lg">
            <Link to="/" className={`hover:text-indigo-600 transition ${isActive('/')}`}>Home</Link>
            <Link to="/listings" className={`hover:text-indigo-600 transition ${isActive('/listings')}`}>Listings</Link>
            <Link to="/AboutPage" className={`hover:text-indigo-600 transition ${isActive('/AboutPage')}`}>About</Link>
            <Link
              to="/login"
              className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-40 p-6 flex flex-col gap-6 text-lg text-gray-700 md:hidden animate-slide-down">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-indigo-700">Roommate Finder</h1>
              <button onClick={toggleMenu}>
                <X size={28} />
              </button>
            </div>
            <Link to="/" onClick={toggleMenu} className={`${isActive('/')}`}>Home</Link>
            <Link to="/listings" onClick={toggleMenu} className={`${isActive('/listings')}`}>Listings</Link>
            <Link to="/AboutPage" onClick={toggleMenu} className={`${isActive('/AboutPage')}`}>About</Link>
            <Link
              to="/login"
              onClick={toggleMenu}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10 bg-white shadow rounded-lg">
        <h1 className="text-4xl font-bold text-indigo-800 mb-6">More About Roommate Finder</h1>
        <p className="text-lg text-gray-700 mb-6">
          Roommate Finder is built on the belief that living together should be safe, respectful, and compatible.
          We use smart matching, trust-building, and community standards to help people find better roommates.
        </p>

        {/* Why We Built This */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 flex items-center gap-2 mb-3">
            <Users className="text-indigo-500" size={24} />
            Why We Built This
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>People being scammed by fake listings</li>
            <li>Unsafe or unpredictable roommate experiences</li>
            <li>Lack of filters and matching tools</li>
          </ul>
        </section>

        {/* Protection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 flex items-center gap-2 mb-3">
            <ShieldCheck className="text-indigo-500" size={24} />
            How We Protect You
          </h2>
          <p className="text-lg text-gray-700">
            We use identity verification, secure messaging, content moderation, and trust indicators to ensure your safety and confidence in the platform.
          </p>
        </section>

        {/* Vision */}
        <section className="bg-indigo-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold text-indigo-800 flex items-center gap-2 mb-2">
            <Eye className="text-indigo-600" size={20} />
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg">
            To build a world where finding a roommate is not a risk, but an opportunity for safe, supportive co-living.
          </p>
        </section>

        {/* Contact Form */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <Mail className="text-indigo-600" size={24} />
            Contact Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <textarea
              placeholder="Your Message"
              aria-label="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white shadow-inner py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 flex items-center gap-1">
              <Facebook size={16} /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 flex items-center gap-1">
              <Twitter size={16} /> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 flex items-center gap-1">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutDetails;
