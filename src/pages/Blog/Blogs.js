import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';
import { Helmet } from "react-helmet";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs | Justice Lawyer</title>
        <meta name="title" content="Blogs | Justice Lawyer" />
        <meta name="description" content="Here you can find my latest advice of law world." />
      </Helmet>
      <Container>
        <div className="py-4">
          <h1 className='text-center text-danger fw-bold mb-5'>Blog</h1>
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