import React from "react";
import Activities from "../Activities/Activities";

const Activities2 = () => {
  const interactiveTasks = [
    {
      answer: "screen",
      text: "The front surface of a monitor",
    },
    {
      answer: "contrast",
      text: "The difference between light and dark",
    },
    {
      answer: "monitor",
      text: "An electronic device that displays information",
    },
    {
      answer: "aspect ratio",
      text: "The relation between height and width",
    },
    {
      answer: "response time",
      text: "A measurement of how long it takes for pixels to refresh",
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
