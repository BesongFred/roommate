// src/components/Listing.jsx
import React from 'react';
import './ListingCard.css';
import fred02 from '../assets/fred02.JPG'; 
import fred01 from '../assets/fred01.JPG'; 
const roommateListings = [
  {
    id: 1,
    name: 'Sandra N.',
    location: 'Buea - Molyko',
    bio: 'Loves quiet evenings, plants, and baking. Looking for someone tidy.',
    image: fred02, 
  },
  {
    id: 2,
    name: 'Eric T.',
    location: 'Yaoundé - Bastos',
    bio: 'Remote worker. Dog lover. Easy-going roommate.',
    image: fred01,
  },
  {
    id: 3,
    name: 'Linda A.',
    location: 'Douala - Bonapriso',
    bio: 'Enjoys shared meals and Netflix nights.',
    image: process.env.PUBLIC_URL + '/images/linda.jpg',
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
            <button className="view-btn">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listing;
