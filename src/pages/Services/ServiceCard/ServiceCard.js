import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div>
      <Card className={`rounded-1 border-0 shadow`}>
        <Card.Img className='rounded-1' variant="top" src={service.thumbnail_image} />
        <Card.Body>
          <Card.Title><Link className={`text-decoration-none text-danger`} to={`/service/${service.id}`}>{service.title}</Link></Card.Title>
          <Card.Text className="text-secondary">
            {service.short_details.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;