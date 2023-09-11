import React from "react";
import Activities from "../Activities/Activities";

const Activities1 = () => {
  const interactiveTasks = [
    {
      title: "Interactive Task 1",
      text: "A small mobile computer",
      instructions: "Type the correct answer in the input field below.",
      answer: "laptop",
      moduleIndex: 0,
    },
    {
      title: "Interactive Task 2",
      text: "Part of computer network that stores and processes information.",
      instructions: "Type the correct answer in the input field below.",
      answer: "server",
      moduleIndex: 0,
    },
    {
      title: "Interactive Task 3",
      text: "A more powewrfull computer for special tasks.",
      instructions: "Type the correct answer in the input field below.",
      answer: "workstation",
      moduleIndex: 0,
    },
    {
      title: "Interactive Task 4",
      text: "A computer for use by one person",
      instructions: "Type the correct answer in the input field below.",
      answer: "personal computer",
      moduleIndex: 0,
    },
    {
      title: "Interactive Task 5",
      text: "A computer for use by one person",
      instructions: "The processing ability of a computer",
      answer: "Power",
      moduleIndex: 0,
    },
  ];
  const moduleName = "Types of Computers";
  return (
    <div>
      <Activities tasks={interactiveTasks} moduleName={moduleName} id={0} />
    </div>
  );
};

export default Activities1;
