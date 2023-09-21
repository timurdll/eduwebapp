import React from "react";
import Activities from "../Activities/Activities";

const Activities3 = () => {
  const interactiveTasks = [
    {
      text: "Without connecting wires",
      answer: "cordless",
    },
    {
      text: "A device for interacting with a computer.",
      answer: "mouse",
    },
    {
      text: "A type of connection technology.",
      answer: "USB",
    },
    {
      text: "To select using a mouse button",
      answer: "Click",
    },
    {
      text: "a mouse that uses light for tracking",
      answer: "LED mouse",
    },
  ];
  const moduleName = "Computer mice";
  return (
    <div>
      <Activities tasks={interactiveTasks} moduleName={moduleName} />
    </div>
  );
};

export default Activities3;
