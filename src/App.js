import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🤣": "Rolling on the Floor Laughing",
  "😋": "Face Savoring Food",
  "🤓": "Nerd Face",
  "😱": "Face Screaming in Fear",
  "💦": "Sweat Droplets",
  "❣️": "Heart Exclamation",
  "💀": "Skull",
  "😏": "Smirking Face",
  "🍚": " Cooked Rice",
  "🍳": "Cooking"
};
};
// console.log(Object.keys(emojiDictionary));
const emojisweknow = Object.keys(emojiDictionary);

// var username = prompt("Give me your name")
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInutHander(event) {
    const userInpu = event.target.value;
    var meaning = emojiDictionary[userInpu];

    if (meaning === undefined) {
      meaning = " sorry we dont have this in our database ";
    }
    setMeaning(meaning);
  }
  function emojiClickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> KNOWING EMOJIS !</h1>
      <input onChange={emojiInutHander}></input>
      <h2> {meaning}</h2>
      <h3>EMOJIS IN DATABASE </h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem ", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
