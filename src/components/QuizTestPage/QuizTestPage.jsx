import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizTestPage = () => {
  const quiz = useLoaderData();
  console.log(quiz.data.questions)
  const {questions} = quiz.data;
  let qNumber= 0;
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border rounded-lg bg-gray-100 shadow-md'>
      <h2 className='text-2xl font-bold'>❏ React & JS & Git MCQ</h2>
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