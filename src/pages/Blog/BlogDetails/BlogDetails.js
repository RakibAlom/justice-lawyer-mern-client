import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './BlogDetails.css'
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const blog = useLoaderData()
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blog.title} | Blog</title>
        <meta name="title" content={`${blog.title} | Blog`} />
      </Helmet>
      <div className="py-4">
        <div className='shadow p-3 p-md-5 blog-details'>
          <h2>{blog.title}</h2>
          <PhotoProvider>
            <PhotoView src={blog.thumbnail_image}>
              <img className='img-fluid my-3 rounded-3' src={blog.thumbnail_image} alt={blog.title} />
            </PhotoView>
          </PhotoProvider>
          <div>
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;