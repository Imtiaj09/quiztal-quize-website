import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Question = ({questionData, qNumber}) => {
  const {question, options, correctAnswer} =questionData;
  const handleToShowAnswer = ()=>{
    toast.info(correctAnswer, {
      position:"top-center"
    })
  }
  const handleToCheck=(option)=>{
    if(option===correctAnswer){
      toast.success('Congratulations your answer is correct.',{
        position:"top-center"
      })
    }else{
      toast.warn('Your answer is incorrect, Try again.',{
        position:"top-center"
      })
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
      <ToastContainer />
    </div>
    
  );
};

export default Question;