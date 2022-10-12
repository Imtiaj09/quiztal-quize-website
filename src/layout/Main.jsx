import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const TopicContext = createContext([]);

const Main = () => {
  const topics = useLoaderData();
  return (
    <TopicContext.Provider value={topics}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </TopicContext.Provider>
  );
};

export default Main;