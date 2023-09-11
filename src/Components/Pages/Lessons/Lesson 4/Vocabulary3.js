import React from "react";
import { READING2_ROUTE } from "../../../utils/consts";
import VocabularyPage from "../Vocabulary/Vocabulary";
import fanAudio from "../../../assets/fan.ogg";
import diskAudio from "../../../assets/disk_drive.ogg";
import heatAudio from "../../../assets/heat_sink.ogg";
import powerSupplyAudio from "../../../assets/power_supply.ogg";
import processorAudio from "../../../assets/processor.ogg";

const Vocabulary4 = () => {
  const mockData = [
    {
      id: 1,
      word: "fan",
      pronunciation: "/ˈæpl/",
      definition: "a mechanical part used to move air",
      audio: fanAudio,
    },
    {
      id: 2,
      word: "disk drive",
      pronunciation: "/bəˈnænə/",
      definition: "a part that allows data to be read and copied",
      audio: diskAudio,
    },
    {
      id: 3,
      word: "heat sink",
      pronunciation: "/ˈtʃeri/",
      definition: "a part that reduces heat",
      audio: heatAudio,
    },
    {
      id: 4,
      word: "power supply",
      pronunciation: "/ˈtʃeri/",
      definition: "the means of providing energy",
      audio: powerSupplyAudio,
    },
    {
      id: 5,
      word: "Processor",
      pronunciation: "/ˈtʃeri/",
      definition: "a mouse that uses light for tracking",
      audio: processorAudio,
    },
  ];
  const next = READING2_ROUTE;
  return (
    <div>
      <VocabularyPage mockData={mockData} next={next} />
    </div>
  );
};

export default Vocabulary4;
