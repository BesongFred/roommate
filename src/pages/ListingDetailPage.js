// ListingDetailPage.jsx (stub detail page)

import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ListingDetailPage() {
  const { id } = useParams();

  // Here you would fetch listing details by id from API or state

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/ListingsPage" className="text-indigo-600 hover:underline mb-4 inline-block">
        &larr; Back to Listings
      </Link>
      <h1 className="text-3xl font-bold mb-4">Listing Detail (ID: {id})</h1>
      <p>This is a stub page. You would show full details here.</p>
    </div>
  );
}

export default ListingDetailPage;
