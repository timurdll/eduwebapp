import React from "react";
import { READING2_ROUTE } from "../../../utils/consts";
import VocabularyPage from "../Vocabulary/Vocabulary";
import cordlessAudio from "../../../assets/cordless.ogg";
import mouseAudio from "../../../assets/mouse.ogg";
import USBAudio from "../../../assets/USB.ogg";
import clickAudio from "../../../assets/click.ogg";
import LEDAudio from "../../../assets/LED_mouse.ogg";

const Vocabulary3 = () => {
  const mockData = [
    {
      id: 1,
      word: "cordless",
      pronunciation: "/ˈæpl/",
      definition: "without connecting wires",
      audio: cordlessAudio,
    },
    {
      id: 2,
      word: "mouse",
      pronunciation: "/bəˈnænə/",
      definition: "a device for interacting with a computer",
      audio: mouseAudio,
    },
    {
      id: 3,
      word: "USB",
      pronunciation: "/ˈtʃeri/",
      definition: "a type of connection technology",
      audio: USBAudio,
    },
    {
      id: 4,
      word: "click",
      pronunciation: "/ˈtʃeri/",
      definition: "to select using a mouse button",
      audio: clickAudio,
    },
    {
      id: 5,
      word: "LED mouse",
      pronunciation: "/ˈtʃeri/",
      definition: "a mouse that uses light for tracking",
      audio: LEDAudio,
    },
  ];
  const next = READING2_ROUTE;
  return (
    <div>
      <VocabularyPage mockData={mockData} next={next} />
    </div>
  );
};

export default Vocabulary3;
