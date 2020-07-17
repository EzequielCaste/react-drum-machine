import React, { useEffect } from "react";
import "./styles.css";
import Machine from "./Machine";
import { handleEvents } from "./handleEvents";

export default function App() {
  useEffect(() => {
    window.addEventListener("keydown", handleEvents);
  }, []);
  return (
    <div className="App">
      <Machine />
    </div>
  );
}
