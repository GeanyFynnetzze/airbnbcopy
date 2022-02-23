import React, { useEffect, useState } from "react";

function Meme() {
  const [memer, setMemer] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2hgfw.jpg",
  });

  const [allMemesImages, setAllMemesImages] = useState([]);

  useEffect = () => {
    console.log("Effect Ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesImages(data.data.memes));
  };
  console.log(allMemesImages);

  const getMeme = () => {
    const randomNumber = [Math.floor(Math.random() * allMemesImages.length)];
    const url = allMemesImages[randomNumber].url;

    setMemer((prevMemer) => {
      return { ...prevMemer, randomImage: url };
    });
  };
  const handleChangeText = (event) => {
    const { name, value } = event.target;
    setMemer((prevMemer) => {
      return { ...prevMemer, [name]: value };
    });
  };

  return (
    <div className="meme--section">
      <div className="meme--form">
        <input
          onChange={handleChangeText}
          type="text"
          className="meme--form--input"
          placeholder="Top text"
          name="topText"
          value={memer.topText}
        />
        <input
          onChange={handleChangeText}
          type="text"
          className="meme--form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={memer.bottomText}
        />
        <button onClick={getMeme} className="meme--button">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={memer.randomImage} />
        <h2 className="meme--text-top">{memer.topText}</h2>
        <h2 className="meme--text-bottom">{memer.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
