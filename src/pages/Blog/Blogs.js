import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <>
      <Container>
        <div className="py-4">
          <div className="row">
            {
              blogs.map(blog =>
                <div className="col-md-6 mb-4" key={blog.id}>
                  <BlogCard blog={blog}></BlogCard>
                </div>
              )
            }
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;