import React from "react";

export default function Pad(props) {
  return (
    <button onClick={props.onClick} key={props.id}>
      {props.sound.value}
    </button>
  );
}
