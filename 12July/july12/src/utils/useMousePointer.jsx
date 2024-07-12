import { useState, useEffect } from "react";

const useMousePointer = () => {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  //   console.log(`X axis is ${mouseLocation.x} and Y axis is ${mouseLocation.y}`)
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMouseLocation({ x: event.clientX, y: event.clientY });
    });
    // return {x : mouseLocation.x, y : mouseLocation.y}
  });
  return mouseLocation;
};

export default useMousePointer;
