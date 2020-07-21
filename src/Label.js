import React from "react";
import "./styles.css";

export default function Label(props) {
  return (
    <>
      <h2 id="display" className="label">
        {props.text}
      </h2>
    </>
  );
}
