import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';

const HomeServices = () => {
  const services = useLoaderData();
  return (
    <>
      <Container>
        <div className="py-4">
          <div className="row">
            {
              services.map(service =>
                <div className="col-md-6 mb-4" key={service.id}>
                  <BlogCard service={service}></BlogCard>
                </div>
              )
            }
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomeServices;