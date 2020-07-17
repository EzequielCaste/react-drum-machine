import React from "react";
import Pad from "./Pad";
import { sounds } from "./sounds";
import { handleEvents } from "./handleEvents";

export default function Machine() {
  const soundComponents = sounds.map(sound => (
    <Pad onClick={() => handleEvents(sound.url)} key={sound.id} sound={sound} />
  ));

  return <div>{soundComponents}</div>;
}
