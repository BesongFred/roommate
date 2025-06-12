import { useParams } from 'react-router-dom';

export default function ListingDetails({ listings }) {
  const { id } = useParams();
  const listing = listings.find(l => l.id === id);

  if (!listing) return <div>Listing not found.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      <p>{listing.description}</p>
      <p>${listing.price}/mo - {listing.location}</p>
    </div>
  );
}
