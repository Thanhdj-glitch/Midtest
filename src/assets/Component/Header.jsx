import React from 'react';

const Header = ({ handleButtonClick }) => {
  return (
    <div className="header">
      <h1 className="title">MindX-Anime</h1>
      <div>
        <button className="btn-click" type="button" onClick={() => handleButtonClick('Home')}>Home</button>
        <button className="btn-click" type="button" onClick={() => handleButtonClick('List anime')}>List anime</button>
        <input className="search-input" placeholder="Search anime or movie" />
      </div>
    </div>
  );
};

export default Header;