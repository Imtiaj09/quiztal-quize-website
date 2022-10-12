import React, { useContext } from 'react';
import { TopicContext } from '../../layout/Main';

const Topics = () => {
  const topics = useContext(TopicContext);
  return (
    <div>
      <h2>Topics:{topics.data.length}</h2>
    </div>
  );
};

export default Topics;