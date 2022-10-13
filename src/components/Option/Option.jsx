import React from 'react';

const Option = ({option,handleToCheck,qOption}) => {
  return (
    <div className='border shadow-mb rounded-lg bg-gray-300 cursor-pointer pt-2 pb-2'>
      <h4 onClick={()=>handleToCheck(option)}>{qOption}⋅ {option}</h4>
    </div>
  );
};

export default Option;