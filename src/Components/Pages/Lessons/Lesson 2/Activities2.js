import React from "react";
import Activities from "../Activities/Activities";

const Activities2 = () => {
  const interactiveTasks = [
    {
      answer: "screen",
      text: "The front surface of a monitor",
      moduleIndex: 1,

    },
    {
      answer: "contrast",
      text: "The difference between light and dark",
      moduleIndex: 1,

    },
    {
      answer: "monitor",
      text: "An electronic device that displays information",
      moduleIndex: 1,

    },
    {
      answer: "aspect ratio",
      text: "The relation between height and width",
      moduleIndex: 1,

    },
    {
      answer: "response time",
      text: "A measurement of how long it takes for pixels to refresh",
      moduleIndex: 1,

    },
  ];
  const moduleName = "Monitors";
  return (
    <div>
      <Activities tasks={interactiveTasks} moduleName={moduleName} />
    </div>
  );
};

export default Activities2;
