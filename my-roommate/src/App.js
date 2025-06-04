import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ListingDetails from './pages/ListingDetails';
import SignupPage from './pages/SignupPage'; // ✅ Make sure this file exists

// Example listings data (replace with your real data source)
const listings = [
  { id: '1', title: 'Listing 1', description: 'Description of listing 1' },
  { id: '2', title: 'Listing 2', description: 'Description of listing 2' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/listing/:id"
          element={<ListingDetails listings={listings} />}
        />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
