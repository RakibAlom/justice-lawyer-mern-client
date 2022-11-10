import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Helmet } from "react-helmet";
const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Justice Lawyer: Your Defender Hero</title>
        <meta name="title" content="Justice Lawyer: Your Defender Hero" />
        <meta name="description" content="Are you looking to ensure legal protection and happy futures for yourself and your loved ones? I'm here to help you discover all your options and make decisions with confidence." />
      </Helmet>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
};

export default Main;