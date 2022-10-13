import React from 'react';
import Option from '../Option/Option';

const Question = ({questionData, qNumber}) => {
  const {question, options, correctAnswer} =questionData;
  const handleToShowAnswer = ()=>{
    alert(correctAnswer)
  }
  const handleToCheck=(option)=>{
    if(option===correctAnswer){
      alert('Right')
    }else{
      alert('Wrong')
    }
  }
  let qOption = 0;
  return (
    <div className='py-8 border rounded-lg'>
      <h4>Question {qNumber}- {question}</h4>
      {
        options.map((option)=> {
         qOption = qOption +1;
        return <Option
        key={option.id}
        option={option}
        qOption={qOption}
        handleToCheck={handleToCheck}
        ></Option>
        })
      }
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent rounded' onClick={()=>handleToShowAnswer()}>Check Answer</button>
    </div>
  );
};

export default Question;