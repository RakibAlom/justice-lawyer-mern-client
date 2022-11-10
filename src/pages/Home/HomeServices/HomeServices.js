import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const HomeServices = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services-limit')
      .then(res => res.json())
      .then(data => setservices(data))
  }, [services]);
  return (
    <>
      <section className='home-services-section py-5'>
        <Container>
          <h1 className='text-center mb-5'>Legal Services</h1>
          <div className="row">
            {
              services.map(service =>
                <div className="col-lg-4 mb-4" key={service._id}>
                  <ServiceCard service={service}></ServiceCard>
                </div>
              )
            }
          </div>
          <div className='text-center mt-4'>
            <Link to='/legal-services'>
              <Button variant='outline-danger' className='btn btn-lg rounded-1 px-5'>See All</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeServices;