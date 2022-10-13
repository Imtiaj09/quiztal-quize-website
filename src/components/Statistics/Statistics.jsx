import React, { useContext } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import { TopicContext } from '../../layout/Main';

const Statistics = () => {
  const topics = useContext(TopicContext);
  console.log(topics)
  return (
    <div>
      <LineChart width={500} height={400} data={topics.data}>
      <Line type="monotone" dataKey="total" stroke="#ff7300" />
      <XAxis dataKey="name" scale="band" />
          <YAxis />
      </LineChart>
    </div>
  );
};

export default Statistics;