import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SearchPage.css";

// Images
import love2Img from "../assets/love2.jpg";
import love3Img from "../assets/love3.jpg";
import love4Img from "../assets/love4.jpg";
import love8Img from "../assets/love8.jpg";
import love9Img from "../assets/love9.jpg";
import love5Img from "../assets/love5.jpg";
import love7Img from "../assets/love7.jpg";

const mockListings = [
  {
    id: 1,
    name: "John Doe",
    town: "Buea",
    location: "mile-17",
    image: love2Img,
    preferences: "Non-smoker, No pets, Quiet",
    bio: "Software engineering student looking for a quiet roommate.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    town: "Limbe",
    location: "mile-4",
    image: love8Img,
    preferences: "Female, Loves pets, Enjoys cooking",
    bio: "Outgoing and fun-loving. Looking for a female roommate who loves the beach.",
  },
  {
    id: 3,
    name: "Kevin Smith",
    town: "Douala",
    location: "bonaberi",
    image: love7Img,
    preferences: "Night Owl, Gamer, No guests",
    bio: "Freelance designer who enjoys games and late-night work.",
  },
  {
    id: 4,
    name: "Kevin Smith",
    town: "Douala",
    location: "bonaberi",
    image: love5Img,
    preferences: "Night Owl, Gamer, No guests",
    bio: "Freelance designer who enjoys games and late-night work.",
  },
  {
    id: 5,
    name: "Kevin Smith",
    town: "Douala",
    location: "bonaberi",
    image: love3Img,
    preferences: "Night Owl, Gamer, No guests",
    bio: "Freelance designer who enjoys games and late-night work.",
  },
  {
    id: 6,
    name: "Kevin Smith",
    town: "Douala",
    location: "bonaberi",
    image: love4Img,
    preferences: "Night Owl, Gamer, No guests",
    bio: "Freelance designer who enjoys games and late-night work.",
  },
  {
    id: 7,
    name: "Kevin Smith",
    town: "Douala",
    location: "bonaberi",
    image: love9Img,
    preferences: "Night Owl, Gamer, No guests",
    bio: "Freelance designer who enjoys games and late-night work.",
  },
];

const FloatingEmoji = ({ style, emoji }) => (
  <div
    style={{
      position: "absolute",
      fontSize: "1.5rem",
      animation: "floatY 6s ease-in-out infinite",
      pointerEvents: "none",
      zIndex: 1,
      ...style,
    }}
  >
    {emoji}
  </div>
);

function SearchPage() {
  const [idSearch, setIdSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [townSearch, setTownSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [filteredListings, setFilteredListings] = useState(mockListings);
  const [selectedListing, setSelectedListing] = useState(null);
  const [floatOffset, setFloatOffset] = useState(0);
  const [confetti, setConfetti] = useState([]);

  // Animate title up/down
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset((prev) => (prev >= 10 ? -10 : prev + 1));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Generate floating emojis
  useEffect(() => {
    const emojis = ["🎁", "🎉", "✨", "🪄", "🌈", "🎊", "💫"];
     
    const tempConfetti = Array.from({ length: 20 }, () => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      delay: Math.random() * 3 + "s",
      animationDuration: Math.random() * 4 + 4 + "s",
    }));
    setConfetti(tempConfetti);
  }, []);

  // Inject global @keyframes
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes floatY {
        0% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(-20px); opacity: 0.6; }
        100% { transform: translateY(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = mockListings.filter(
      (listing) =>
        (idSearch === "" || String(listing.id) === idSearch) &&
        (titleSearch === "" || listing.title?.toLowerCase().includes(titleSearch.toLowerCase())) &&
        (townSearch === "" || listing.town.toLowerCase().includes(townSearch.toLowerCase())) &&
        (locationSearch === "" || listing.location.toLowerCase().includes(locationSearch.toLowerCase()))
    );
    setFilteredListings(filtered);
  };

  const handleReset = () => {
    setIdSearch("");
    setTitleSearch("");
    setTownSearch("");
    setLocationSearch("");
    setFilteredListings(mockListings);
  };

  const openModal = (listing) => setSelectedListing(listing);
  const closeModal = () => setSelectedListing(null);

  const animatedTitle = (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "150px",
        marginBottom: "30px",
      }}
    >
      {confetti.map((item, i) => (
        <FloatingEmoji
          key={i}
          emoji={item.emoji}
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
            animationDuration: item.animationDuration,
            opacity: 0.8,
          }}
        />
      ))}
      <h1
        className="title"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          position: "relative",
          zIndex: 2,
          transform: `translateY(${floatOffset}px)`,
        }}
      >
        <span style={{ color: "#FF5E5B" }}>Your</span>{" "}
        <span style={{ color: "#D8B4FE" }}>space</span>,{" "}
        <span style={{ color: "#00C2CB" }}>your</span>{" "}
        <span style={{ color: "#FFA500" }}>rules</span> —{" "}
        <span style={{ color: "#6EE7B7" }}>find</span>{" "}
        <span style={{ color: "#93C5FD" }}>who</span>{" "}
        <span style={{ color: "#F87171" }}>fits</span>
      </h1>
    </div>
  );

  return (
    <div className="search-container">
      <Header />
      <main className="search-content">
        {animatedTitle}

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
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleReset} style={{ backgroundColor: "#0e4c92" }}>
              Reset
            </button>
          </div>
        </div>

        {/* === Listings Grid === */}
        <div className="results-container">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="result-card">
              <img
                src={listing.image}
                alt={listing.name}
                className="listing-img"
                onClick={() => openModal(listing)}
              />
              <p className="name-label"><strong>{listing.name}</strong></p>
              <p className="town-title">{listing.title} — {listing.town}</p>
              <button className="connect-btn">Calculate compatibility</button>
            </div>
          ))}
        </div>

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

        {/* === Help & Support === */}
        <section className="support-link-bottom center-support">
          <Link to="/support" className="action-card">🛟 Help & Support</Link>
        </section>

        {/* === Show All Listings === */}
        {filteredListings.length < mockListings.length && (
          <div className="reset-btn-container">
            <button className="reset-btn" onClick={handleReset}>
              🔄 Show All Listings
            </button>
          </div>
        )}

        {/* === Modal === */}
        {selectedListing && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedListing.image}
                alt={selectedListing.name}
                className="modal-img"
              />
              <h2>{selectedListing.name}</h2>
              <p><strong>Title:</strong> {selectedListing.title}</p>
              <p><strong>Town:</strong> {selectedListing.town}</p>
              <p><strong>Location:</strong> {selectedListing.location}</p>
              <p><strong>Preferences:</strong> {selectedListing.preferences}</p>
              <p><strong>Bio:</strong> {selectedListing.bio}</p>
              <Link to={`/messages/`} className="message-btn">💬 Message</Link>
              <Link to={`/message-profile/${selectedListing.id}`} className="message-btn">💬 Compatibility Skull</Link>
            </div>
          </div>
        )}

        <Footer />
      </main>
    </div>
  );
}

export default SearchPage;
