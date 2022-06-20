import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="meme">
        <img src="./Images/meme.png" alt="meme Logo" className="meme-logo" />
        <h3 className="meme-heading">Meme Generator</h3>
      </div>
      <h4>Nabaraj Dahal</h4>
    </header>
  );
};

export default Header;
