import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </>
  );
};

export default Main;