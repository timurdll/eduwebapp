import React from "react";
import Activities from "../Activities/Activities";

const Activities1 = () => {
  const interactiveTasks = [
    {
      text: "A small mobile computer",
      answer: "laptop",
      moduleIndex: 0,
    },
    {
      text: "Part of computer network that stores and processes information.",
      answer: "server",
      moduleIndex: 0,
    },
    {
      text: "A more powewrfull computer for special tasks.",
      answer: "workstation",
      moduleIndex: 0,
    },
    {
      text: "A computer for use by one person",
      answer: "personal computer",
      moduleIndex: 0,
    },
    {
      text: "A computer for use by one person",
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
