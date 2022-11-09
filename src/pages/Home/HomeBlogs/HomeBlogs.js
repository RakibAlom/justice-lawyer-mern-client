import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogCard from '../../Blog/BlogCard/BlogCard';

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://next-learner-server.vercel.app/blog`)
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  return (
    <section className='latest-blogs py-5'>
      <Container>
        <h1 className='text-center mb-5'>Our Latest Blog</h1>
        <div className="row">
          {
            blogs.sort((a, b) => b.id - a.id).slice(0, 3).map(blog =>
              <div className="col-lg-4 mb-4" key={blog.id}>
                <BlogCard blog={blog}></BlogCard>
              </div>
            )
          }
        </div>
        <div className='text-center mt-4'>
          <Link to='/blog'>
            <Button variant='outline-danger' className='btn btn-lg rounded-1 px-5'>View More</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomeBlogs;