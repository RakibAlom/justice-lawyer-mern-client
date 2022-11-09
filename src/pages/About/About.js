import React from 'react';
import { Container } from 'react-bootstrap';
import AboutImg from '../../images/justice-lawyer-about.webp'

const About = () => {
  return (
    <Container>
      <div className='my-4 shadow p-2 p-lg-4 rounded-1'>
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <img className='img-fluid rounded-3 my-2 w-100' src={AboutImg} alt="Justic Law Attorney in Bangladesh" />
          </div>
          <div className="col-md-6">
            <h1 className='text-danger fw-bold'>Justic Law Attorney in Bangladesh</h1>
            <p>Whether you’re charged with a DUI, misdemeanor, or felony, the prospect of facing trial is stressful. Worse, there’s also the possibility of jail time if things don’t go well for you in court.</p>

            <p>To help you face these legal adversities, you need an attorney who can work on an effective defense strategy and make sure your civil rights are upheld throughout the process.</p>

            <p>I provides clients with comprehensive legal representation from trial to appeal, if needed.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;