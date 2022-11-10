import React from 'react';
import Banner from './Banner/Banner';
import HomeContact from './HomeContact/HomeContact';
import './Home.css'
import HomeAbout from './HomeAbout/HomeAbout';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <HomeBlogs></HomeBlogs>
      <HomeAbout></HomeAbout>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;