import React, { useState, useEffect } from "react";
import Pad from "./Pad";
import Label from "./Label";
import { sounds } from "./sounds";

export default function App() {
  const [currentLabel, setCurrentLabel] = useState("");

  useEffect(() => {
    sounds.forEach(item => {
      window.addEventListener("keydown", e => {
        if (e.keyCode === item.keyCode) {
          playSound(item.keyTrigger);
          document.getElementById(item.id).classList.add("active");
        }
      });
      window.addEventListener("keyup", e => {
        if (e.keyCode === item.keyCode) {
          document.getElementById(item.id).classList.remove("active");
        }
      });
    });
  }, []);
  function playSound(id) {
    const player = document.getElementById(id);
    player.currentTime = "0";
    const audioPromise = player.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then(_ => {})
        .catch(error => {
          console.log(error);
        });
    }
    setCurrentLabel(player.parentElement.id);
  }

  const components = sounds.map(item => {
    return <Pad key={item.keyTrigger} onClick={playSound} sound={item} />;
  });
  return (
    <div id="drum-machine">
      <h1>React Drum Machine</h1>
      <div id="drum-pad">{components}</div>
      <Label text={currentLabel} />
    </div>
  );
}
