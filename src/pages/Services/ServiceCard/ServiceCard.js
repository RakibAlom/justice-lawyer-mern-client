import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({ service }) => {
  return (
    <div>
      <Card className={`rounded-1 border-0 shadow`}>
        <PhotoProvider>
          <PhotoView src={service.serviceThumbnail}>
            <Card.Img className='rounded-0' variant="top" src={service.serviceThumbnail} />
          </PhotoView>
        </PhotoProvider>

        <Card.Body>
          <Link to={`/services/${service._id}`} className="text-decoration-none text-danger"><Card.Title>{service.name}</Card.Title></Link>
          <Card.Text className='text-secondary'>
            {service.serviceDetails.slice(0, 90)}...
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-secondary fs-6 fw-semibold">
              Service Fee: <span className='text-danger'>{service.price}</span>
            </div>
            <div className="text-secondary fs-6 fw-semibold">
              {service.rating} <FaStar className='text-warning'></FaStar>
            </div>
          </div>
          <div className="see-details-button mt-3">
            <Link to={`/services/${service._id}`}><Button variant="danger" className='rounded-1 w-100'>See Details</Button></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;