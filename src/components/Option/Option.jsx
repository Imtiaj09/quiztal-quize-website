import React from 'react';

const Option = ({option,handleToCheck}) => {
  return (
    <div>
      <h4 onClick={()=>handleToCheck(option)}>{option}</h4>
    </div>
  );
};

export default Option;