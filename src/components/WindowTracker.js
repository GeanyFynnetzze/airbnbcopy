import { useEffect } from "react";

function WindowTracker() {
  useEffect =
    (() => {
      console.log("PLEASE");
      window.addEventListener("resize", () => {
        console.log("resized");
      });
    },
    [window.innerWidth]);
  return (
    <div>
      <h1>Window width : {window.innerWidth}</h1>
    </div>
  );
}

export default WindowTracker;
