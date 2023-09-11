import React from 'react'
import { ACTIVITIES_ROUTE, VOCABULARY_ROUTE } from '../../../utils/consts';
import ReadingPage from '../Reading/ReadingPage'

const Reading1 = () => {
  const title = "Computer in the Workspace";
  const text = "Computers are an important part of an employee's day. In many offices every worker has their own personal computer. They prepare reports and other documents on it. They also check e-mail and access the internet with it. Usually this machine is a desktop computer. however, nowadays employees are using laptops more often, too. Employees can take these smaller notebook computers too meeting and to business talks. An especially portable computer is a tablet. With a tablet an employee can keep in touch with co-workers from almost anywhere. Special projects require more processing power. Employees take adventage of company workstations to complete these. Athe the end of the day, they save their work to the shared server.";
  const questions = [
    {
      text: 'What is the capital main purpose of the article?',
      answers: ['to promote the use of laptops in the workplace', 'to describe the kinds of computers employees use', 'to remind employees to save their work data', 'to recommend tablet computers over other kinds'],
      correctAnswer: 1,
    },
    {
      text: 'Which of the following is NOT and advantage of laptop and tablet computers?',
      answers: ['Unlike desktop computers, laptops and tablets are portable', 'They are smaller than desktop computers', 'Employees can get the most processing power from laptops and tablets', 'Brazil'],
      correctAnswer: 1,
    },
    {
      text: 'Which kind of computer works well for more demandings projects?',
      answers: ['workstations', 'tablets', 'desktops', 'notebooks'],
      correctAnswer: 3,
    },
  ];
  return (
    <div>
      <ReadingPage title={title} text={text} questions={questions} back={VOCABULARY_ROUTE} next={ACTIVITIES_ROUTE}/>
    </div>
  )
}

export default Reading1