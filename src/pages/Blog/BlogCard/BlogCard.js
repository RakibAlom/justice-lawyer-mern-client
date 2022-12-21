import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const BlogCard = ({ blog }) => {
  return (
    <div>
      <Card className={`rounded-1 border-0 shadow`}>
        <PhotoProvider>
          <PhotoView src={blog.thumbnail_image}>
            <Card.Img className='rounded-1' variant="top" style={{ height: '300px' }} src={blog.thumbnail_image} />
          </PhotoView>
        </PhotoProvider>
        <Card.Body style={{ minHeight: '140px' }}>
          <Card.Title><Link className={`text-decoration-none text-danger`} to={`/blog/${blog.slug}`}>{blog.title}</Link></Card.Title>
          <Card.Text className="text-secondary">
            {blog.short_details.slice(0, 90)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;