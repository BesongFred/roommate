import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden">
      <div className="relative">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        {listing.verified && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 shadow-md">
            <ShieldCheck size={14} /> Verified
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
        <p className="text-gray-600">{listing.location}</p>
        <p className="text-indigo-600 font-bold mt-2">${listing.price}/month</p>
      </div>
    </div>
  );
};

export default ListingCard;
