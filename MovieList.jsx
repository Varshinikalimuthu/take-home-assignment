import './App.css';

<div className="grid">
  {movies.map((movie) => (
    <Link to={`/movie/${movie.id}`} key={movie.id} className="card">
      <h2>{movie.title}</h2>
      <p>{movie.tagline}</p>
      <p>⭐ {movie.vote_average}/10</p>
    </Link>
  ))}
</div>
