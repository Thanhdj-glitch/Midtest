import React from 'react';

const ExploreInfo = ({ selectedAnime }) => {
  return (
    <div className="explore-info">
      <img src={selectedAnime.image} alt={selectedAnime.movieName} className="selected-anime-image" />
      <h4>{selectedAnime.movieName}</h4>
      <p>{selectedAnime.description}</p>
    </div>
  );
};

export default ExploreInfo;