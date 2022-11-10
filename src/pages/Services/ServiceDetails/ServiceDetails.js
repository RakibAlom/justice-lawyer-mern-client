import React from 'react';
import { Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ServiceReviews from '../ServiceReviews/ServiceReviews';
import ServiceSidebar from '../ServiceSidebar/ServiceSidebar';

const ServiceDetails = () => {
  const service = useLoaderData()
  return (
    <Container>
      <div className="row">
        <div className="col-lg-9 col-md-8 py-4">
          <div className='shadow p-3 p-md-4 service-details rounded-1'>
            <h2>{service.name}</h2>
            <img className='img-fluid my-3 rounded-1 w-100' src={service.serviceThumbnail} alt={service.name} />
            <div className="d-flex justify-content-between align-items-center p-3 border rounded-1 mt-2 mb-3">
              <div className="text-secondary fs-6 fw-semibold">
                Service Fee: <span className='text-danger'>{service.price}</span>
              </div>
              <div className="text-secondary fs-6 fw-semibold d-flex align-items-center gap-1">
                {service.rating} <FaStar className='text-warning'></FaStar>
              </div>
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: service.serviceDetails }} />
            </div>
          </div>
          <div className='py-4'>
            <ServiceReviews></ServiceReviews>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <ServiceSidebar></ServiceSidebar>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetails;