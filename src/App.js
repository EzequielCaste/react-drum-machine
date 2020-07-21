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
          playSound(item.id);
          document.getElementById(item.id + "_Btn").classList.add("active");
        }
      });
      window.addEventListener("keyup", e => {
        if (e.keyCode === item.keyCode) {
          document.getElementById(item.id + "_Btn").classList.remove("active");
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
    setCurrentLabel(id);
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
    <>
      {components}
      <Label text={currentLabel} />
    </>
  );
}
