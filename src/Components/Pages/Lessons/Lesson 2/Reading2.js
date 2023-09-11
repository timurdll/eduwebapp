import React from 'react'
import { ACTIVITIES1_ROUTE, VOCABULARY1_ROUTE } from '../../../utils/consts';
import ReadingPage from '../Reading/ReadingPage'

const Reading2 = () => {
  const title = "Top picks: Computer Monitors";
  const text = "Do you still have a CRT monitor? Then you're missing out on a better display. We have two suggestions. For low price monitors, Gold Computers is the best choice. Their wide-screen monitor has a 16:9 aspect ratio. It features a 1920 x 1030 resolution. Unfortunately, this model has poor contrast controls.If you want the best graphics, Crystal Monitors is the best pick. Their VX100 LCD has a 20-inch screen. The color range is the widest on the market. It also supports HD. With a response time of seven milliseconds, it's also good for gaming. This monitor is well worth the $400 price tag.";
  const questions = [
    {
      text: 'What is the main idea of the article?',
      answers: ['to list common monitor problems', 'to recommend monitor purchases', 'to show improved models of monitors', 'to review new HD monitors'],
      correctAnswer: 1,
    },
    {
      text: 'Which of the following is NOT listed as feature of the Gold Computers monitor?',
      answers: ['low price', '16:9 aspect ratio', 'a 20-inch screen', 'poor contrast control'],
      correctAnswer: 1,
    },
    {
      text: 'What makes the VX100 good for gaming?',
      answers: ['the aspect ratio', 'the response time', 'the resolution', 'the contrast'],
      correctAnswer: 3,
    },
  ];
  return (
    <div>
      <ReadingPage title={title} text={text} questions={questions} back={VOCABULARY1_ROUTE} next={ACTIVITIES1_ROUTE}/>
    </div>
  )
}

export default Reading2