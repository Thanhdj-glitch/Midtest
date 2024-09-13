import React from 'react';

const MovieList = ({ movieData, handleAnimeClick }) => {
  return (
    <div className="anime-list">
      {movieData.map((movie) => (
        <div key={movie.id} className="anime-img" onClick={() => handleAnimeClick(movie)}>
          <img src={movie.image} alt={movie.movieName} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;