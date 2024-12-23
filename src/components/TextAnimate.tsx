import { useEffect, useState } from "react";

export const TextAnimate = () => {
  const [currentTxt, setCurrentTxt] = useState<string>("");
  const textHeader = [
    "Desarrollo Multiplataforma. ",
    "Desarrollo Web. ",
    "Desarrollo Móvil. ",
    "Front End. ",
    "Back End. ",
  ];

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let direction = 1;

    const interval = setInterval(() => {
      if (charIndex === textHeader[index].length) {
        direction *= -1;
        setCurrentTxt(textHeader[index].slice(0, charIndex));
        charIndex += direction;
      } else if (charIndex === -1) {
        index = (index + 1) % textHeader.length;
        direction = 1;
        charIndex = 0;
      } else {
        setCurrentTxt(textHeader[index].slice(0, charIndex));
        charIndex += direction;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center lg:text-left">
      <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg my-5">
        {currentTxt} { currentTxt.length %2 ? '' : '|'}
      </p>
    </div>
  );
};
