import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SearchPage.css";
// import Dashboard from './Dashboard';

function SearchPage() {
  return (
    <div className='search-container'>
      <Header />

      <main className='search-content'>
        <h1 className='title'>Your space, your rules — find who fits</h1>
        <div className='preferences'>
          <input
            className='option'
            list='age-options'
            placeholder='Age-Range'
          />
          <datalist id='age-options'>
            <option value='18-21' />
            <option value='22-25' />
            <option value='26-29' />
            <option value='30-33' />
          </datalist>
          <input
            className='option'
            list='gender-options'
            placeholder='Gender'
          />
          <datalist id='gender-options'>
            <option value='Male' />
            <option value='Female' />
          </datalist>
          <input className='option' list='pets-options' placeholder='Pets' />
          <datalist id='pets-options'>
            <option value='Yes' />
            <option value='No' />
          </datalist>
          <input
            className='option'
            list='late-nights-options'
            placeholder='Late-Nights'
          />
          <datalist id='late-nights-options'>
            <option value='Yes' />
            <option value='Sometimes' />
            <option value='No' />
          </datalist>
          <input
            className='option'
            list='smoking-options'
            placeholder='Smoking'
          />
          <datalist id='smoking-options'>
            <option value='Yes' />
            <option value='No' />
          </datalist>
          <input
            className='option'
            list='drinking-options'
            placeholder='Drinking'
          />
          <datalist id='drinking-options'>
            <option value='Yes' />
            <option value='Sometimes' />
            <option value='No' />
          </datalist>
          <input
            className='option'
            list='guest-policy-options'
            placeholder='Guest-Policy'
          />
          <datalist id='guest-policy-options'>
            <option value='Often' />
            <option value='Very Often' />
            <option value='Rarely' />
          </datalist>
          <input
            className='option'
            list='noise-tolerance-options'
            placeholder='Noise-Tolerance'
          />
          <datalist id='noise-tolerance-options'>
            <option value='Low' />
            <option value='Medium' />
            <option value='High' />
          </datalist>
          <input
            className='option'
            list='religion-options'
            placeholder='Religion'
          />
          <datalist id='religion-options'>
            <option value='Christian' />
            <option value='Muslim' />
            <option value='Others' />
          </datalist>
          <input
            className='option'
            list='occupation-options'
            placeholder='Occupation'
          />
          <datalist id='occupation-options'>
            <option value='Student' />
            <option value='Worker' />
            <option value='Business Person' />
          </datalist>
          <button>Search</button>
        </div>
        <div className='results-container'></div>
      </main>

      <Footer />
    </div>
  );
}

export default SearchPage;
