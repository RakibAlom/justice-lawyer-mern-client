import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeAbout.css';
import AboutBG from '../../../images/cta_bg.webp';

const HomeAbout = () => {
  return (
    <section className='py-5 home-about-section' style={{ backgroundImage: `url(${AboutBG})` }}>
      <Container>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className='text-danger fw-bold'>Speak with Justice Lawyer Today</p>
            <h1 className='fw-bold mb-4'>Make Choices With <br />Confidence</h1>
            <a href="tel:+8801623405027" className='btn btn-lg btn-danger rounded-1'>Call to Schedule</a>
          </div>
          <div className="col-md-6 text-center">
            <img className='img-fluid' src="https://familyfirstfirm.com/wp-content/uploads/2022/06/about-img.png" alt="Speak with Justice Lawyer" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;