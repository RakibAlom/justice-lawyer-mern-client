import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import BlogCard from './BlogCard/BlogCard';
import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(`https://justice-lawyer-server.vercel.app/blogs`)
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])
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
          {
            loading && <div className='text-center py-4'>
              <Spinner animation="border" variant="danger" />
            </div>
          }
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