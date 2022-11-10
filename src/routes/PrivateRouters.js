import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    <div className='text-center py-4'>
      <Spinner animation="border" variant="danger" />
    </div>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivateRoutes;