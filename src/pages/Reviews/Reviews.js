import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner'
import { Helmet } from "react-helmet";
const Reviews = () => {
  const { user, logOut } = useContext(AuthContext)
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(`https://justice-lawyer-server.vercel.app/reviews?uid=${user?.uid}`, {
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
        setLoading(false)
      })
  }, [user?.uid, logOut])
  const handleDeleteReview = id => {
    const proceed = window.confirm('Are you sure, you want to delete!');
    if (proceed) {
      fetch(`https://justice-lawyer-server.vercel.app/reviews/${id}`, {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Reviews | Justice Lawyer</title>
        <meta name="title" content="My Reviews | Justice Lawyer" />
      </Helmet>
      <Container>
        <div className="review-list row shadow p-4 p-2 rounded-1" style={{ minHeight: "460px" }}>
          <h1 className='text-center mb-4'>My Reviews</h1>
          <hr />
          {
            loading &&
            <div className='text-center py-4'>
              <Spinner animation="border" variant="danger" />
            </div>
          }
          {
            reviews.length < 1 && <h2 className='text-danger fw-bold text-center'>No reviews were added</h2>

          }
          {
            reviews.filter(item => item.uid === user.uid).map(review =>

              <div className="col-md-6" key={review._id}>
                <div className="single-review mb-4 shadow rounded-1 p-3">
                  <div className="justify-content-between d-flex w-100">
                    <div className="thumb">
                      <span className='fw-semibold'>Review - <span className='text-success'>{review.serviceName}</span></span>
                    </div>
                    <div>
                      {
                        user && user.uid === review.uid ?
                          <>
                            <Link to={`/reviews/${review._id}`} className="btn btn-primary me-2"><FaEdit className='mb-1'></FaEdit></Link>
                            <button className="btn btn-danger" onClick={() => handleDeleteReview(review._id)}><FaTrashAlt className='mb-1'></FaTrashAlt></button>
                          </>
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