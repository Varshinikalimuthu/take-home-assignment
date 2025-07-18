<div className="movie-detail">
  <h1>{movie.title}</h1>
  <p>{movie.tagline}</p>
  <p><strong>Overview:</strong> {movie.overview}</p>
  <p><strong>Release Date:</strong> {new Date(movie.release_date).toLocaleDateString()}</p>
  <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
  <p><strong>⭐ Rating:</strong> {movie.vote_average}/10</p>
  <Link to="/">← Back to Movie List</Link>
</div>
