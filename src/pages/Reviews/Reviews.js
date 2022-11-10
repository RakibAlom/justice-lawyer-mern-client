import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Reviews = () => {
  const { user, logOut } = useContext(AuthContext)
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?uid=${user?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then(data => {
        setReviews(data);
      })
  }, [user?.uid, logOut])
  const handleDeleteReview = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success('Review Deleted Successfully!')
            const remaining = reviews.filter(item => item._id !== id);
            setReviews(remaining);
          }
        })
        .catch(error => {
          console.error(error)
          toast.error('Something went wrong!')
          toast.error(error.message)
        })
    }
  }
  return (
    <div className="reivews-section my-4">
      <Container>
        <div className="review-list row shadow p-4 p-2 rounded-1">
          <h1 className='text-center border-bottom pb-3 mb-4'>My Reviews</h1>
          {
            reviews.filter(item => item.uid === user.uid).map(review =>

              <div className="col-md-6" key={review._id}>
                <div className="single-review mb-4 shadow-sm rounded-1 p-3">
                  <div className="justify-content-between d-flex w-100">
                    <div className="thumb">
                      <span className='fw-semibold'>Review - <span className='text-success'>{review.serviceName}</span></span>
                    </div>
                    <div>
                      {
                        user && user.uid === review.uid ?
                          <div>
                            <Link to="/" className="btn btn-primary me-2"><FaEdit className='mb-1'></FaEdit></Link>
                            <button className="btn btn-danger" onClick={() => handleDeleteReview(review._id)}><FaTrashAlt className='mb-1'></FaTrashAlt></button>
                          </div>
                          : null
                      }

                    </div>
                  </div>
                  <div className="pt-3">
                    <p className="review m-0">
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </Container>
    </div>
  );
};

export default Reviews;