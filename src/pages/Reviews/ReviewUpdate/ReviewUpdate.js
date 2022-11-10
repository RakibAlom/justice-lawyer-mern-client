import React from 'react';

const ReviewUpdate = () => {

  const handleUpdateReview = event => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const newReview = {
      review
    }

    fetch('http://localhost:5000/reviews', {
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
  return (
    <div className="reviews-area">
      <div className="widget-header-2 position-relative">
        <h5 className="mt-5">Edit Review</h5>
        <hr />
      </div>
      <div className="review-form">
        <form onSubmit={handleUpdateReview}>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea className="form-control w-100" name="message" id="review" cols="30" rows="3" placeholder="Write review"></textarea>
              </div>
            </div>
          </div>
          <div className="form-group mt-1 mb-20">
            <button type="submit" className="btn btn-danger mt-2">Update Review</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewUpdate;