import React, { useState } from "react";
import Pad from "./Pad";
import Label from "./Label";
import { sounds } from "./sounds";

export default function App() {
  const [currentLabel, setCurrentLabel] = useState("");
  const [style, setStyle] = useState({
    backgroundColor: "red"
  });
  function playSound(id) {
    setStyle({
      backgroundColor: "black"
    });
    const player = document.getElementById(id);
    player.currentTime = "0";
    player.play();
    setCurrentLabel(id);
    const timer = setTimeout(() => {
      setStyle({
        backgroundColor: "red"
      });
    }, 100);
  }
  return (
    <>
      <Pad style={style} onClick={playSound} sound={sounds[0]} />
      <Label text={currentLabel} />
    </>
  );
}
