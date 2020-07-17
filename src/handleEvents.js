import { keySounds } from "./keySounds";
import { Howl } from "howler";

export function handleEvents(e) {
  let sound;
  if (typeof e === "string") {
    sound = new Howl({
      src: [e]
    });
  } else {
    const url = keySounds[e.keyCode];
    sound = new Howl({
      src: [url]
    });
  }

  sound.play();
}
