import React from "react";
import { ACTIVITIES2_ROUTE, VOCABULARY2_ROUTE } from "../../../utils/consts";
import ReadingPage from "../Reading/ReadingPage";

const Reading3 = () => {
  const title = "Computer mice";
  const text =
    "Mechanical mice. 1) Standard ball mouse: This mouse includes right and left easy-click buttons. It's our most affordable option and best seller. 2) Color-change mouse: This ball mouse comes with interchangeable colored covers.  Customers can choose from seven available colors. Cordless mice. 1) LED mouse: This mouse uses a scroll wheel for for easy scrolling. It also comes with cleaning fluid for the plastic LED cover. 2) Laser mouse: This mouse: uses a USB connection. Non-USB mice. Including 3-D mice are no longer available. Note: All cordless mice from Melissa`s Technology Accessories include a 30-day warranty. Returned items must be accompanied by receipt.";
  const questions = [
    {
      text: "What is the purpose of the product list?",
      answers: [
        "to account for sales numbers",
        "to describe the price of items",
        "to explain how to use a mouse",
        "to list items available for sale",
      ],
      correctAnswer: 1,
    },
    {
      text: "Which of the following is NOT and advantage of laptop and tablet computers?",
      answers: ["LED mice", "3-D mice", "USB mice", "cordless mice"],
      correctAnswer: 1,
    },
    {
      text: "What is true of the standart ball mouse",
      answers: [
        "it's delivered with fluid for cleaning",
        "it has right- and left-click buttons",
        "desktops",
        "notebooks",
      ],
      correctAnswer: 3,
    },
  ];
  return (
    <div>
      <ReadingPage
        title={title}
        text={text}
        questions={questions}
        back={VOCABULARY2_ROUTE}
        next={ACTIVITIES2_ROUTE}
      />
    </div>
  );
};

export default Reading3;
