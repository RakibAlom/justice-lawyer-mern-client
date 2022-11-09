import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
  return (
    <div>
      <Card className={`rounded-0 border-0 shadow`}>
        <Card.Img className='rounded-0' variant="top" src={service.thumbnail_image} />
        <Card.Body>
          <Link to={`/services/${service.slug}`}><Card.Title className="text-light">{service.name}</Card.Title></Link>
          <Card.Text className='text-secondary'>
            {service.short_details.slice(0, 65)}...
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-secondary fs-6 fw-semibold">
              <FaStar className='text-warning'></FaStar> {service.ratings.numbers} ({service.ratings.total_reviews})
            </div>
            <Link to={`/services/${service.slug}`}><Button variant="primary" className='rounded-0'>See Details</Button></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;