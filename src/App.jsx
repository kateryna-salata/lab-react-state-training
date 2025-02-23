import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    if(likes <= 0) {
      alert("Likes can not be negative")
    } else setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton increment={increment} likes={likes} />
      <Counter increment={increment} likes={likes} decrement={decrement}/>
      <ClickablePicture />
      <Dice/>
    </div>
  );
}

export default App;
