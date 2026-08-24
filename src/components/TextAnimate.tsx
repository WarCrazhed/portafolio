import { useEffect, useState } from "react";

const PHRASES = [
  "Desarrollador FullStack",
  "Desarrollo Web",
  "Desarrollo Móvil",
  "Desarrollo Multiplataforma",
  "Front End",
  "Back End",
];

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1600;

/** Texto que se escribe y borra solo; se usa como línea `//` del hero. */
export const TextAnimate = () => {
  const [text, setText] = useState(PHRASES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phrase = 0;
    let chars = PHRASES[0].length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = PHRASES[phrase];
      let delay = deleting ? DELETE_MS : TYPE_MS;

      if (!deleting && chars === current.length) {
        deleting = true;
        delay = HOLD_MS;
      } else if (deleting && chars === 0) {
        deleting = false;
        phrase = (phrase + 1) % PHRASES.length;
        delay = TYPE_MS * 3;
      } else {
        chars += deleting ? -1 : 1;
        setText(current.slice(0, chars));
      }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span aria-live="polite">
      {text}
      <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse">
        _
      </span>
    </span>
  );
};
