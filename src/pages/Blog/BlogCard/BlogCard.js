import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div>
      <Card className={`rounded-1 border-0 shadow`}>
        <Card.Img className='rounded-1' variant="top" src={blog.thumbnail_image} />
        <Card.Body>
          <Card.Title><Link className={`text-decoration-none text-danger`} to={`/blog/${blog.slug}`}>{blog.title}</Link></Card.Title>
          <Card.Text className="text-secondary">
            {blog.short_details.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;