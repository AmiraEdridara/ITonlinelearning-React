// The layout shell - a navbar with real links, and a main area holding a
// short list of reviews to style against.

import React from 'react';
import './App.css';

function App() {
  const reviews = [
    { id: 1, title: 'Arrival', rating: 5, note: 'Still thinking about the ending.' },
    { id: 2, title: 'Paddington 2', rating: 5, note: 'No notes. Perfect.' },
    { id: 3, title: 'The Matrix Resurrections', rating: 2, note: 'It had its moments.' }
  ];

  // Turn a rating out of five into filled and empty stars
  const stars = (rating) => '*'.repeat(rating) + '-'.repeat(5 - rating);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-content">
          <span className="nav-brand">Movie Reviews</span>
          <ul className="nav-links">
            <li><a href="#latest">Latest</a></li>
            <li><a href="#top-rated">Top Rated</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <h1>Movie Review App</h1>
        <p>This is the main content area for our movie review application.</p>

        <ul className="review-list">
          {reviews.map(review => (
            <li key={review.id} className="review">
              <h2>{review.title}</h2>
              <p className="rating">{stars(review.rating)}</p>
              <p>{review.note}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
