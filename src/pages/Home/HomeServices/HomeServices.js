import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';
import Spinner from 'react-bootstrap/Spinner'

const HomeServices = () => {
  const [services, setservices] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('https://justice-lawyer-server.vercel.app/services-limit')
      .then(res => res.json())
      .then(data => {
        setservices(data)
        setLoading(false)
      })

  }, []);
  return (
    <>
      <section className='home-services-section py-5'>
        <Container>
          <h1 className='text-center mb-5 fw-bold text-danger'>Legal Services</h1>
          {
            loading &&
            <div className='text-center py-4'>
              <Spinner animation="border" variant="danger" />
            </div>
          }
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
            <Link to='/services'>
              <Button variant='outline-danger' className='btn btn-lg rounded-1 px-5'>See All</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeServices;