import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <div className='shadow' style={{ height: '480px' }}>
      <div className='d-flex justify-content-center align-items-center h-100'>
        <div className='text-center'>
          <h1 className='text-danger'>404 Not Found Page</h1>
          <p><Link to='/' className='fw-bold fs-5'>Back to home</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;