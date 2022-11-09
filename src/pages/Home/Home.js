import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1>Services</h1>
      <h1>Blog</h1>
      <div className="contact bg-danger py-3">
        <div className="container">
          <a href="tel:+8801623232323" className='text-center text-decoration-none text-white'>
            <h2 className='m-0 fw-semibold'>For Questions or Appointment? Click to Call : (162) 323-2323</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;