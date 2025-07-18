import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const payload = await response.json();
      setMovies(payload); // ✅ Fixed here
    }
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🎬 Movie List</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            <p>⭐ {movie.vote_average}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
