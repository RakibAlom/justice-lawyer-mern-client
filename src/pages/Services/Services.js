import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceCard from './ServiceCard/ServiceCard';
import Spinner from 'react-bootstrap/Spinner'
const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://justice-lawyer-server.vercel.app/services`)
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
  }, [])
  return (
    <Container>
      <div className="py-4">
        <h1 className='text-center text-danger fw-bold mb-4'>Legal Services</h1>
        {
          loading &&
          <div className='text-center py-4'>
            <Spinner animation="border" variant="danger" />
          </div>
        }
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