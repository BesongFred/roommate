import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ITEMS_PER_PAGE = 9;

const roommateImages = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  'https://images.unsplash.com/photo-1531312267480-91c7f259f1b2',
  'https://images.unsplash.com/photo-1590080876641-6642f6f69c55',
  'https://images.unsplash.com/photo-1515377905703-7d06aa47eea4',
];

const generateMockListings = () => {
  return Array.from({ length: 45 }, (_, i) => {
    const isEven = i % 2 === 0;
    const isEveryThird = i % 3 === 0;
    const isVerified = i % 5 === 0;

    return {
      id: i + 1,
      title: isEven ? 'Cozy private room downtown' : 'Shared room near park',
      price: 200 + i * 10,
      location: isEveryThird ? 'Downtown' : 'Suburb',
      roomType: isEven ? 'private' : 'shared',
      duration: isEveryThird ? 'long-term' : 'short-term',
      genderPreference: isEven ? 'any' : 'female',
      ageRange: [20, 35],
      amenities: isEven ? ['WiFi', 'Parking'] : ['WiFi', 'Pet-friendly'],
      description: 'A nice and comfortable place to live.',
      image: roommateImages[i % roommateImages.length],
      verified: isVerified,
      matchScore: Math.floor(Math.random() * 100),
      datePosted: new Date(Date.now() - i * 86400000).toISOString(),
    };
  });
};

const MOCK_LISTINGS = generateMockListings();

function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const priceMin = parseInt(searchParams.get('priceMin')) || 0;
  const priceMax = parseInt(searchParams.get('priceMax')) || 10000;
  const locationFilter = searchParams.get('location') || '';
  const roomType = searchParams.get('roomType') || '';
  const duration = searchParams.get('duration') || '';
  const gender = searchParams.get('gender') || '';
  const sortBy = searchParams.get('sortBy') || 'newest';
  const page = parseInt(searchParams.get('page')) || 1;

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      setListings(MOCK_LISTINGS);
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesSearch =
        listing.title.toLowerCase().includes(search.toLowerCase()) ||
        listing.description.toLowerCase().includes(search.toLowerCase());

      const matchesPrice = listing.price >= priceMin && listing.price <= priceMax;
      const matchesLocation = locationFilter ? listing.location === locationFilter : true;
      const matchesRoomType = roomType ? listing.roomType === roomType : true;
      const matchesDuration = duration ? listing.duration === duration : true;
      const matchesGender = gender && gender !== 'any' ? listing.genderPreference === gender : true;

      return (
        matchesSearch &&
        matchesPrice &&
        matchesLocation &&
        matchesRoomType &&
        matchesDuration &&
        matchesGender
      );
    });
  }, [listings, search, priceMin, priceMax, locationFilter, roomType, duration, gender]);

  const sortedListings = useMemo(() => {
    const sorted = [...filteredListings];
    switch (sortBy) {
      case 'priceLowHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'matchScore':
        sorted.sort((a, b) => b.matchScore - a.matchScore);
        break;
      case 'newest':
      default:
        sorted.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
    }
    return sorted;
  }, [filteredListings, sortBy]);

  const totalPages = Math.ceil(sortedListings.length / ITEMS_PER_PAGE);

  const paginatedListings = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return sortedListings.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedListings, page]);

  function updateParams(newParams) {
    const params = Object.fromEntries([...searchParams]);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined) {
        delete params[key];
      } else {
        params[key] = value;
      }
    });

    if (!('page' in newParams)) {
      params.page = '1';
    }

    setSearchParams(params);
  }

  return (
    <div className="max-w-9xl mx-auto p-6">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Room Listings</h1>

      <input
        type="text"
        placeholder="Search by keyword, location, amenities..."
        className="w-full p-3 border border-gray-300 rounded mb-6"
        value={search}
        onChange={(e) => updateParams({ search: e.target.value })}
      />

      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block font-semibold mb-1">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              className="w-20 p-1 border border-gray-300 rounded"
              value={priceMin}
              onChange={(e) => updateParams({ priceMin: e.target.value })}
            />
            <span>-</span>
            <input
              type="number"
              min={0}
              className="w-20 p-1 border border-gray-300 rounded"
              value={priceMax}
              onChange={(e) => updateParams({ priceMax: e.target.value })}
            />
          </div>
        </div>

        <FilterSelect
          label="Location"
          value={locationFilter}
          options={['Downtown', 'Suburb']}
          onChange={(val) => updateParams({ location: val })}
        />
        <FilterSelect
          label="Room Type"
          value={roomType}
          options={['private', 'shared']}
          onChange={(val) => updateParams({ roomType: val })}
        />
        <FilterSelect
          label="Duration"
          value={duration}
          options={['short-term', 'long-term']}
          onChange={(val) => updateParams({ duration: val })}
        />
        <FilterSelect
          label="Gender Preference"
          value={gender}
          options={['any', 'female', 'male']}
          onChange={(val) => updateParams({ gender: val })}
        />
        <FilterSelect
          label="Sort By"
          value={sortBy}
          options={[
            { value: 'newest', label: 'Newest' },
            { value: 'priceLowHigh', label: 'Price: Low to High' },
            { value: 'priceHighLow', label: 'Price: High to Low' },
            { value: 'matchScore', label: 'Best Match' },
          ]}
          onChange={(val) => updateParams({ sortBy: val })}
        />
      </div>

      {loading ? (
        <p>Loading listings...</p>
      ) : error ? (
        <p className="text-red-600">Error loading listings: {error}</p>
      ) : paginatedListings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedListings.map((listing) => (
            <Link
              key={listing.id}
              to={`/ListingDetailPage/${listing.id}`}
              className="block border rounded shadow-sm hover:shadow-md transition"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover rounded-t"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-1">{listing.title}</h2>
                <p className="text-indigo-600 font-bold mb-1">${listing.price} / month</p>
                <p className="text-gray-600 text-sm mb-2">{listing.location}</p>
                <p className="text-sm line-clamp-2">{listing.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  {listing.verified && (
                    <span className="text-green-600 font-semibold text-xs px-2 py-1 border border-green-600 rounded">
                      Verified
                    </span>
                  )}
                  <span className="text-gray-500 text-xs">Match: {listing.matchScore}%</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <nav className="flex justify-center mt-8 space-x-2" aria-label="Pagination">
        <button
          disabled={page <= 1}
          onClick={() => updateParams({ page: (page - 1).toString() })}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => updateParams({ page: (i + 1).toString() })}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? 'bg-indigo-600 text-white' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={page >= totalPages}
          onClick={() => updateParams({ page: (page + 1).toString() })}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </nav>
    </div>
  );
}

function FilterSelect({ label, value, options, onChange }) {
  const optList = typeof options[0] === 'object' ? options : options.map((o) => ({ value: o, label: o }));
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">All</option>
        {optList.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListingsPage;