import React from 'react';
import { Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ServiceReviews from '../ServiceReviews/ServiceReviews';
import ServiceSidebar from '../ServiceSidebar/ServiceSidebar';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Helmet } from "react-helmet";
const ServiceDetails = () => {
  const service = useLoaderData()
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{service.name} | Legal Service</title>
        <meta name="title" content={`${service.name} | Legal Service`} />
      </Helmet>
      <div className="row">
        <div className="col-lg-9 col-md-8 py-4">
          <div className='shadow p-3 p-md-4 service-details rounded-1'>
            <h2>{service.name}</h2>
            <PhotoProvider>
              <PhotoView src={service.serviceThumbnail}>
                <img className='img-fluid my-3 rounded-1 w-100' src={service.serviceThumbnail} alt={service.name} />
              </PhotoView>
            </PhotoProvider>
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
            <ServiceReviews service={service}></ServiceReviews>
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