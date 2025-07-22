// src/components/Listing.jsx
import React from 'react';
import { Link } from "react-router-dom";
import './ListingCard.css';
import love2 from '../assets/love2.jpg'; 
import love8 from '../assets/love8.jpg'; 
const roommateListings = [
  {
    id: 1,
    name: 'Robert.',
    location: 'Buea - Molyko',
    bio: 'Loves quiet evenings, plants, and baking. Looking for someone tidy.',
    image: love2, 
  },
  {
    id: 2,
    name: 'AMPAM.',
    location: 'Yaoundé - Bastos',
    bio: 'Remote worker. Dog lover. Easy-going roommate.',
    image: love8,
  },
  {
    id: 3,
    name: 'FLURENT.',
    location: 'Douala - Bonapriso',
    bio: 'Enjoys shared meals and Netflix nights.',
    image: love8,
  },
];

const Listing = () => {
  return (
    <section className="listing-section">
      <h2>Available Roommate Listings</h2>
      <div className="listing-grid">
        {roommateListings.map(({ id, name, location, bio, image }) => (
          <div className="listing-card" key={id}>
            <img src={image} alt={`Profile of ${name}`} className="listing-img" />
            <h3>{name}</h3>
            <p className="location">{location}</p>
            <p className="bio">{bio}</p>
          <Link to={`/messages/`} className="message-btn">💬 Message</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listing;
