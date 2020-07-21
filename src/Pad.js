import React from "react";

export default function Pad(props) {
  return (
    <button
      className="drum-pad"
      style={props.style}
      id={props.sound.id}
      onClick={() => props.onClick(props.sound.keyTrigger)}
    >
      {props.sound.keyTrigger}
      <audio
        className="clip"
        src={props.sound.url}
        id={props.sound.keyTrigger}
      />
    </button>
  );
}
