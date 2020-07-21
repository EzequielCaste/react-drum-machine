import React, { useState, useEffect } from "react";
import Pad from "./Pad";
import Label from "./Label";
import { sounds } from "./sounds";

export default function App() {
  const [currentLabel, setCurrentLabel] = useState("");
  const [style, setStyle] = useState({
    backgroundColor: "red"
  });
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
    // setStyle({
    //   backgroundColor: "black"
    // });
    const player = document.getElementById(id);
    player.currentTime = "0";
    player.play();
    setCurrentLabel(player.parentElement.id);
    // const timer = setTimeout(() => {
    //   setStyle({
    //     backgroundColor: "red"
    //   });
    // }, 100);
  }

  const components = sounds.map(item => {
    return <Pad key={item.keyTrigger} onClick={playSound} sound={item} />;
  });
  return (
    <div id="drum-machine">
      <div>{components}</div>
      <Label text={currentLabel} />
    </div>
  );
}
