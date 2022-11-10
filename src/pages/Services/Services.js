import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
  const services = useLoaderData();
  console.log(services)
  return (
    <Container>
      <div className="py-4">
        <h1 className='text-center text-danger fw-bold mb-4'>Legal Services</h1>
        <div className="row">
          {
            services.map(service =>
              <div className="col-md-4 mb-4" key={service._id}>
                <ServiceCard service={service}></ServiceCard>
              </div>
            )
          }
        </div>
      </div>
    </Container>
  );
};

export default Services;