import "./Meme.css";

import { useState } from "react";
import { useEffect } from "react";
import MemeData from "../MemeData";

const Meme = () => {
  const [topValue, setTopValue] = useState("MEME World");
  const [bottomValue, setBottomValue] = useState("Type Smth..");
  const [url, setUrl] = useState("./Images/meme.png");
  const [URL, setURL] = useState({});
  const getMemeData = async () => {
    try {
      const response = await fetch(" https://www.reddit.com/r/memes.json");
      const data = await response.json();
      setURL(data.data.children);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMemeData();
  }, []);
  //console.log(topValue, bottomValue);
  const memeGeneratorHandler = () => {
    //console.log("btn-clicked");
    const randomNo = Math.trunc(Math.random() * MemeData.length + 1);

    setUrl(URL[randomNo].data.thumbnail);
  };

  return (
    <div className="meme-content">
      <div className="input">
        <input
          type="text"
          placeholder="Top-Text"
          className="input-1"
          value={topValue}
          onChange={(event) => {
            setTopValue(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Buttom-Text"
          className="input-2"
          value={bottomValue}
          onChange={(event) => {
            setBottomValue(event.target.value);
          }}
        />
      </div>
      <div className="meme-creator">
        <h3 className="meme-generator" onClick={memeGeneratorHandler}>
          Get a Meme Image
        </h3>
      </div>
      <div className="image-meme">
        <img src={url} alt="" className="meme-created-image" />
      </div>
      <div className="meme-input-content">
        <h2 className="meme-generated-content-one">{topValue}</h2>
        <h2 className="meme-generated-content-two">{bottomValue}</h2>
      </div>
    </div>
  );
};

export default Meme;
