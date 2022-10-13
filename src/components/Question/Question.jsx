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
  return (
    <div>
      <h4>Question {qNumber}- {question}</h4>
      {
        options.map((option)=> <Option
        key={option.id}
        option={option}
        handleToCheck={handleToCheck}
        ></Option>)
      }
      <button onClick={()=>handleToShowAnswer()}>Show ans</button>
    </div>
  );
};

export default Question;<h4>question 1</h4>