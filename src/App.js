import React, { useState } from "react";
import elephant from "./assets/elephant.png";
import frog from "./assets/frog.png";
import hippo from "./assets/hippo.png";
import lion from "./assets/lion.png";
import owl from "./assets/owl.png";
import parrot from "./assets/parrot.png";
import snake from "./assets/snake.png";
import tiger from "./assets/tiger.png";
import back from "./assets/Unknown.png";

import Board from "./components/Board/Board";
//import './App.css';

function App() {
  const [cards] = useState(buildCards());

  return (
    <div className="App">
      <Board cards={cards} />
    </div>
  );
}
function buildCards() {
  let id = 0;
  const images = { elephant, frog, hippo, lion, owl, parrot, snake, tiger };
  const cards = Object.keys(images).reduce((result, key) => {
    const createCard = () => ({
      id: id++,
      type: key,
      backImg: back,
      frontImg: images[key],
      flipped: false,
    });
    result.push(createCard());
    result.push(createCard());
    return result;
  }, []);
  return shuffle(cards);
}

function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len);
    let copyCurrent = { ...arr[i] };
    let copyRandom = { ...arr[randomIdx] };
    arr[i] = copyRandom;
    arr[randomIdx] = copyCurrent;
  }
  return arr;
}

export default App;
