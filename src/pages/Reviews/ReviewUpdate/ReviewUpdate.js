import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ReviewUpdate = () => {
  const review = useLoaderData()
  const navigate = useNavigate();
  const { _id } = review;
  const [reviews, setReviews] = useState([]);

  const handleUpdateReview = event => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const newReview = {
      review
    }

    fetch(`https://justice-lawyer-server.vercel.app/reviews/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter(item => item._id !== _id);
          const approving = reviews.find(item => item._id === _id);
          const newReviews = [approving, ...remaining];
          setReviews(newReviews);
          toast.success('Review Updated!')
          navigate('/reviews')
        }

      })
      .catch(err => {
        toast.error('Something is wrong!')
        console.error(err)
      })
  }
  return (
    <div className="reviews-section py-5 hv-full">
      <Container>
        <div className="reviews-area shadow p-4 rounded-1" style={{ minHeight: "460px" }}>
          <h2 className="mt-2">Edit Review</h2>
          <hr />
          <div className="review-form">
            <form onSubmit={handleUpdateReview}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100" defaultValue={review.review} name="message" id="review" cols="30" rows="3" placeholder="Write review"></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group mt-1 mb-20">
                <button type="submit" className="btn btn-danger mt-2">Update Review</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewUpdate;