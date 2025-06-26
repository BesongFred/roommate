import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ListingDetails from './pages/ListingDetails'; // Make sure this path is correct
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPassword';
import AboutPage from './pages/AboutPage';
import AboutDetails from './pages/AboutDetails'; 
import ListingsPage from './pages/ListingsPage';
import ListingDetailPage from './pages/ListingDetailPage';
import ListingCard from './pages/ListingCard';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';
import CompleteProfile from './pages/CompleteProfile';
import ForgotPassword from './pages/ForgotPassword';
// Example listings data (replace with your real data source)
const listings = [
  { id: '1', title: 'ListingsPage 1', description: 'Description of listing 1' },
  { id: '2', title: 'ListingDetailPage 2', description: 'Description of listing 2' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route
          path="/listing/:id"
          element={<ListingDetails listings={listings} />}
        />
         <Route path="/signup" element={<SignupPage />} />
         
         <Route path="/AboutPage" element={<AboutPage />} />
         <Route path="/about-details" element={<AboutDetails />} />
         <Route path="/ListingsPage" element={<ListingsPage />} />
         <Route path="/ListingDetailPage/:id" element={<ListingDetailPage />} />
         <Route path="/ListingCard" element={<ListingCard/>} />
         <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
         <Route path="/ContactUs" element={<ContactUs />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Add more routes like /signup, /listings etc. here */}
      </Routes>
    </Router>
  );
}

export default App;
