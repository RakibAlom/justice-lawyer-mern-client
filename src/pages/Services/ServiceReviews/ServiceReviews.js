import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ServiceReviews = ({ service }) => {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://justice-lawyer-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [reviews]);

  const handleSubmitReview = event => {
    event.preventDefault();
    const form = event.target;
    const username = user.displayName;
    const uid = user.uid;
    const useremail = user.email;
    const userImage = user.photoURL;
    const serviceId = service._id;
    const serviceName = service.name;
    const review = form.review.value;

    const newReview = {
      uid,
      username,
      useremail,
      userImage,
      serviceId,
      serviceName,
      review
    }

    fetch('https://justice-lawyer-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Your Review Added On The Service!')
        }
        form.reset()
        const currentReviews = [...reviews, data]
        setReviews(currentReviews)
      })
      .catch(err => {
        toast.error('Something is wrong!')
        console.error(err)
      })
  }

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
    <div className="reviews-area">
      <div className="widget-header-2 position-relative">
        <h5 className="mt-5">Reviews ({reviews.filter(item => item.serviceId === service._id).length})</h5>
        <hr />
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmitReview}>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea className="form-control w-100" name="message" id="review" cols="30" rows="3" placeholder="Write review"></textarea>
              </div>
            </div>
          </div>
          <div className="form-group mt-1 mb-20">
            {
              user && user.uid ?
                <button type="submit" className="btn btn-danger mt-2">Submit Review</button>
                :
                <Link to="/login" className="btn btn-warning mt-2 fw-semibold">Login first to add review</Link>
            }
          </div>
        </form>

        <div className="review-list mt-4">
          {
            reviews.sort((a, b) => b._id - a._id).filter(item => item.serviceId === service._id).map(review =>
              <div className="single-review mt-3 shadow rounded-1 p-3" key={review._id}>
                <div className="justify-content-between d-flex w-100">
                  <div className="thumb">
                    <img className='rounded' src={review.userImage} alt={review.username} style={{ height: "30px" }} />
                    <span className='ms-2 fw-semibold'>{review.username}</span>
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
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceReviews;