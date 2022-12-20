import "./index.css";
import { useState } from "react";

let fruits = {
  "🍏": "guavava",
  "🍊": "orange",
  "🍎": "apple",
  "🍌": "banana",
  "🍉": "watermelon",
  "🍓": "strawberry",
  "🍇": "grapes",
  "🥝": "kiwi",
  "🌽": "corn",
  "🥕": "carrot",
  "🧄": "turnip",
  "🥒": "cucumber",
  "🥥": "coconut"
};

export default function App() {
  let fruitList = Object.keys(fruits);
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    let userInput = event.target.value;
    const meaning = fruits[userInput];
    setMeaning(meaning);
  }
  function emojinputHandler(item) {
    const meaning = fruits[item];
    setMeaning(meaning);
  }

  return (
    <div className="Input">
      <div>
        <h1 style={{ margin: 50, marginTop: 150 }}>Hello Emoji-Lovers</h1>
        <h2 style={{ color: "violet" }}>know the meaning of fruit emoji</h2>
      </div>

      <div>
        <input onChange={inputHandler} placeholder="Enter Fruit Emoji" />
        <div className="meaning">{meaning}</div>
      </div>

      <div className="our">our fruits-</div>
      {fruitList.map(function (item) {
        return (
          <span
            onClick={() => {
              emojinputHandler(item);
            }}
            key={item}
          >
            <div className="emojies">{item}</div>
          </span>
        );
      })}
    </div>
  );
}

