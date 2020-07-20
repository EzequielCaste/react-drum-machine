import React, { useEffect } from "react";

export default function Pad(props) {
  const { sound } = props;

  useEffect(() => {
    window.addEventListener("keydown", e => {
      if (e.keyCode === sound.keyCode) {
        props.onClick(sound.id);
      }
    });
  }, [sound.id]);

  return (
    <>
      <button
        style={props.style}
        id={sound.id + "_Btn"}
        onClick={() => props.onClick(sound.id)}
      >
        {sound.keyTrigger}
        <audio src={sound.url} id={sound.id} />
      </button>
    </>
  );
}
