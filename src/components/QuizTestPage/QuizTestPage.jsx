import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizTestPage = () => {
  const quiz = useLoaderData();
  console.log(quiz.data.questions)
  const {questions} = quiz.data;
  let qNumber= 0;
  return (
    <div>
      {
        questions.map((question) =>  {
          qNumber=qNumber + 1;
        return <Question
        key={question.id}
        qNumber={qNumber}
        questionData={question}
        ></Question>})
      }
    </div>
  );
};

export default QuizTestPage;