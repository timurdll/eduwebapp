import React from "react";
import { READING1_ROUTE } from "../../../utils/consts";
import VocabularyPage from "../Vocabulary/Vocabulary";
import screenAudio from "../../../assets/screen.ogg";
import contrastAudio from "../../../assets/contrast.ogg";
import monitorAudio from "../../../assets/monitor.ogg";
import aspectAudio from "../../../assets/aspect_ratio.ogg";
import responseAudio from "../../../assets/response_time.ogg";

const Vocabulary2 = () => {
  const mockData = [
    {
      id: 1,
      word: "screen",
      pronunciation: "/ˈtʃeri/",
      definition: "the front surface of a monitor",
      audio: screenAudio,
    },
    {
      id: 2,
      word: "contrast",
      pronunciation: "/ˈtʃeri/",
      definition: "the difference between light and dark",
      audio: contrastAudio,
    },
    {
      id: 3,
      word: "monitor",
      pronunciation: "/ˈtʃeri/",
      definition: "an electronic device that displays information",
      audio: monitorAudio,
    },
    {
      id: 4,
      word: "aspect ratio",
      pronunciation: "/ˈtʃeri/",
      definition: "the relation between height and width",
      audio: aspectAudio,
    },
    {
      id: 5,
      word: "response time",
      pronunciation: "/ˈtʃeri/",
      definition: "a measurement of how long it takes for pixels to refresh",
      audio: responseAudio,
    },
  ];
  const next = READING1_ROUTE;
  return (
    <div>
      <VocabularyPage mockData={mockData} next={next} />
    </div>
  );
};

export default Vocabulary2;
