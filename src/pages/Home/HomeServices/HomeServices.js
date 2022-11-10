import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const HomeServices = () => {
  const services = useLoaderData();
  return (
    <>
      <section className='home-services-section py-5'>
        <Container>
          <h1 className='text-center mb-5'>Legal Services</h1>
          <div className="row">
            {/* <div className="col-lg-4 mb-4">
              <ServiceCard></ServiceCard>
            </div> */}
          </div>
          <div className='text-center mt-4'>
            <Link to='/blog'>
              <Button variant='outline-danger' className='btn btn-lg rounded-1 px-5'>All Services</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeServices;