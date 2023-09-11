import React from "react";
import { READING_ROUTE } from "../../../utils/consts";
import VocabularyPage from "../Vocabulary/Vocabulary";
import laptopAudio from "../../../assets/laptop.ogg";
import workstationAudio from "../../../assets/workstation.ogg";
import serverAudio from "../../../assets/server.ogg";
import powerAudio from "../../../assets/power.ogg";
import pcAudio from "../../../assets/personal_computer.ogg";

const Vocabulary1 = () => {
  const mockData = [
    {
      id: 1,
      word: "laptop",
      pronunciation: "/ˈæpl/",
      definition: "a small mobile computer",
      audio: laptopAudio,
    },
    {
      id: 2,
      word: "workstation",
      pronunciation: "/bəˈnænə/",
      definition: "a more powewrfull computer for special tasks",
      audio: workstationAudio,
    },
    {
      id: 3,
      word: "server",
      pronunciation: "/ˈtʃeri/",
      definition:
        "part of computer network that stores and processes information",
      audio: serverAudio,
    },
    {
      id: 4,
      word: "power",
      pronunciation: "/ˈtʃeri/",
      definition: "the processing ability of a computer",
      audio: powerAudio,
    },
    {
      id: 5,
      word: "personal computer",
      pronunciation: "/ˈtʃeri/",
      definition: "a computer for use by one person",
      audio: pcAudio,
    },
  ];
  const next = READING_ROUTE;
  return (
    <div>
      <VocabularyPage mockData={mockData} next={next} />
    </div>
  );
};

export default Vocabulary1;
