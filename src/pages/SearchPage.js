import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // ✅ Footer kept only at bottom
import "./SearchPage.css";

// Images
import love4Img from "../assets/love4.jpg";
import love2Img from "../assets/love2.jpg";
import love8Img from "../assets/love8.jpg";
import love7Img from "../assets/love7.jpg";
import love5Img from "../assets/love5.jpg";
import room5Img from "../assets/room5.jpg";
import room6Img from "../assets/room6.jpg";
import dadImg from "../assets/dad.JPG";
import home1Img from "../assets/home1.jpg";
import home11Img from "../assets/home11.jpg";
import love0Img from "../assets/love0.jpg";
const mockListings = [
  { id: 1, title: "Student Room", town: "Buea", location: "mile-17", image: dadImg },
  { id: 2, title: "Beachside Room", town: "Limbe", location: "mile-4", image: home1Img },
  { id: 3, title: "City Apartment", town: "Douala", location: "bonaberi", image: home11Img },
  { id: 4, title: "Cozy Room", town: "Kumba", location: "fiango", image: love4Img },
  { id: 5, title: "Single Studio", town: "Mutegene", location: "mutengene-junction", image: room5Img },
  { id: 6, title: "Shared Flat", town: "Yaounde", location: "bastos", image: love7Img },
  { id: 7, title: "Budget Room", town: "Betua", location: "center-town", image: love5Img },
  { id: 8, title: "Compact Studio", town: "Mamfe", location: "mamfe-town", image: room6Img },
  { id: 9, title: "Modern Room", town: "Tiko", location: "airport-road", image: love8Img },
  { id: 10, title: "Quiet Space", town: "Muea", location: "checkpoint", image: love2Img },
  { id: 11, title: "love you", town: "limbe", location: "mile 4", image: love0Img}, 
];

function SearchPage() {
  const [idSearch, setIdSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [townSearch, setTownSearch] = useState("");
  const [filteredListings, setFilteredListings] = useState(mockListings);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = mockListings.filter((listing) =>
      (idSearch === "" || String(listing.id) === idSearch) &&
      (locationSearch === "" || listing.location.toLowerCase().includes(locationSearch.toLowerCase())) &&
      (titleSearch === "" || listing.title.toLowerCase().includes(titleSearch.toLowerCase())) &&
      (townSearch === "" || listing.town.toLowerCase().includes(townSearch.toLowerCase()))
    );
    setFilteredListings(filtered);
  };

  const handleReset = () => {
    setIdSearch("");
    setLocationSearch("");
    setTitleSearch("");
    setTownSearch("");
    setFilteredListings(mockListings);
  };

  return (
    <div className="search-container">
      <Navbar />

      <main className="search-content">
        <h1 className="title">Your space, your rules — find who fits</h1>

        {/* === Search Preferences === */}
        <div className="preferences">
          <input className="option" list="age-options" placeholder="Age-Range" />
          <datalist id="age-options">
            <option value="18-21" />
            <option value="22-25" />
            <option value="26-29" />
            <option value="30-33" />
          </datalist>

          <input className="option" list="gender-options" placeholder="Gender" />
          <datalist id="gender-options">
            <option value="Male" />
            <option value="Female" />
          </datalist>

          <input className="option" list="pets-options" placeholder="Pets" />
          <datalist id="pets-options">
            <option value="Yes" />
            <option value="No" />
          </datalist>

          <input className="option" list="late-nights-options" placeholder="Late-Nights" />
          <datalist id="late-nights-options">
            <option value="Yes" />
            <option value="Sometimes" />
            <option value="No" />
          </datalist>

          <input className="option" list="smoking-options" placeholder="Smoking" />
          <datalist id="smoking-options">
            <option value="Yes" />
            <option value="No" />
          </datalist>

          <input className="option" list="drinking-options" placeholder="Drinking" />
          <datalist id="drinking-options">
            <option value="Yes" />
            <option value="Sometimes" />
            <option value="No" />
          </datalist>

          <input className="option" list="guest-policy-options" placeholder="Guest-Policy" />
          <datalist id="guest-policy-options">
            <option value="Often" />
            <option value="Very Often" />
            <option value="Rarely" />
          </datalist>

          <input className="option" list="noise-tolerance-options" placeholder="Noise-Tolerance" />
          <datalist id="noise-tolerance-options">
            <option value="Low" />
            <option value="Medium" />
            <option value="High" />
          </datalist>

          <input className="option" list="religion-options" placeholder="Religion" />
          <datalist id="religion-options">
            <option value="Christian" />
            <option value="Muslim" />
            <option value="Others" />
          </datalist>

          <input className="option" list="occupation-options" placeholder="Occupation" />
          <datalist id="occupation-options">
            <option value="Student" />
            <option value="Worker" />
            <option value="Business Person" />
          </datalist>

          <button onClick={handleSearch}>Search</button>
        </div>

        {/* === Results Section === */}
        <div className="results-container">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="result-card">
              <img src={listing.image} alt={listing.title} />
              <p><strong>{listing.title}</strong></p>
              <p>📍 {listing.town}</p>
              <p>📌 {listing.location}</p>
            </div>
          ))}
        </div>

        {/* === Reset Listings Button === */}
        {filteredListings.length < mockListings.length && (
          <div className="reset-btn-container">
            <button className="reset-btn" onClick={handleReset}>🔄 Show All Listings</button>
          </div>
        )}

        {/* === More Options Section === */}
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
              <p>Chat with people who have verified their profiles.</p>
            </Link>
          </div>
        </section>

        {/* === Help & Support Link === */}
        <section className="support-link-bottom center-support">
          <Link to="/support" className="action-card">🛟 Help & Support</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SearchPage;
