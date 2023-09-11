import React from "react";
import Activities from "../Activities/Activities";

const Activities3 = () => {
  const interactiveTasks = [
    {
      title: "Interactive Task 1",
      text: "Without connecting wires",
      instructions: "Type the correct answer in the input field below.",
      answer: "cordless",
    },
    {
      title: "Interactive Task 2",
      text: "A device for interacting with a computer.",
      instructions: "Type the correct answer in the input field below.",
      answer: "mouse",
    },
    {
      title: "Interactive Task 3",
      text: "A type of connection technology.",
      instructions: "Type the correct answer in the input field below.",
      answer: "USB",
    },
    {
      title: "Interactive Task 4",
      text: "To select using a mouse button",
      instructions: "Type the correct answer in the input field below.",
      answer: "Click",
    },
    {
      title: "Interactive Task 5",
      text: "a mouse that uses light for tracking",
      instructions: "Type the correct answer in the input field below.",
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
