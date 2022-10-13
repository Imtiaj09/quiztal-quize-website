import React, { useContext } from 'react';
import {  CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicContext } from '../../layout/Main';

const Statistics = () => {
  const topics = useContext(TopicContext);
  console.log(topics)
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <LineChart width={500} height={400} data={topics.data}>
      <Line type="monotone" dataKey="total" stroke="#87CEEB" />
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;