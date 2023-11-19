import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import sound from "./../src/assets/audio/sound.mp3";
import "./App.scss";

function App() {
  // const [username, setUsername] = useState("john");
  // const changeusername = () => {
  //   setUsername("bill");
  // };
  // let audio = new Audio("/asset/audio/sound.mp3");
  // const start = () => {
  //   audio.play();
  // };
  // playAudio = () => {
  //   new Audio(audio).play();
  // };
  function play() {
    new Audio(sound).play();
  }
  const [number, setNumber] = useState(0);
  const dec = () => {
    setNumber(number - 1);
  };
  const incr = () => {
    setNumber(number + 1);
  };
  const res = () => {
    setNumber(0);
  };
  useEffect(() => {
    if (number === 33 || number === 66 || number === 99) {
      alert("good job");
      play();
    }
    if (number === -1) {
      setNumber(0);
    }
    if (number === 100) {
      setNumber(99);
    }
  }, [number]);
  return (
    <>
      {/* <button onClick={changeusername}>change username</button>
      <h1>{username}</h1> */}

      <div className="card1">
        {" "}
        <button className="decr btn btn-primary" onClick={dec}>
          -
        </button>
        <h1 className="h1">{number}</h1>
        <button className="qosh btn btn-primary" onClick={incr}>
          +
        </button>
        <button className="nol btn btn-danger" onClick={res}>
          Reset
        </button>
        <button className="play btn btn-success" onClick={play}>
          Play
        </button>
      </div>
    </>
  );
}

export default App;
