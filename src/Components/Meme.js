import "./Meme.css";

import React from "react";

const Meme = () => {
  return (
    <div className="meme-content">
      <div className="input">
        <input type="text" placeholder="Enter text" className="input-1" />
        <input type="text" placeholder="Enter text" className="input-2" />
      </div>
      <div className="meme-creator">
        <h3 className="meme-generator">Get a Meme Image</h3>
      </div>
      <div className="image-meme">
        <img src="./Images/meme.png" alt="" className="meme-created-image" />
      </div>
      <div className="meme-input-content">
        <h2 className="meme-generated-content-one">Hello Nabaraj</h2>
        <h2 className="meme-generated-content-two">
          Hello Nabaraj Meme Content
        </h2>
      </div>
    </div>
  );
};

export default Meme;
