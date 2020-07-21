import React from "react";

export default function Pad(props) {
  return (
    <button
      style={props.style}
      id={props.sound.id + "_Btn"}
      onClick={() => props.onClick(props.sound.id)}
    >
      {props.sound.keyTrigger}
      <audio src={props.sound.url} id={props.sound.id} />
    </button>
  );
}
