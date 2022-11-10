import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceReviews = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="reviews-area">
      <div className="widget-header-2 position-relative">
        <h5 className="mt-5">Reviews </h5>
        <hr />
      </div>
      <div className="review-form">
        <form>
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
                <Link to="/login" className="btn btn-warning mt-2">Login First For Review</Link>
            }
          </div>
        </form>

        <div className="review-list">
          <div className="single-review mt-5 justify-content-between d-flex">
            <div className="justify-content-between d-flex w-100">
              <div className="thumb">
                <img src="https://yt3.ggpht.com/7N5cpwt-tYzIANIuK-uLNshAdNDP5L_WZIIbnSboRAEwMUwF4F1m8VALc7TMKSsEvOqdpBRAKg=s900-c-k-c0x00ffffff-no-rj" alt="" style={{ height: "30px" }} />
                <span className='ms-2 fw-semibold'>User Name</span>
              </div>
              <div>
                <Link to="/" className="text-primary  me-2">edit</Link>
                <Link to="/" className="text-danger mr-2">delete</Link>
              </div>
            </div>
            <div className="desc">
              <p className="review"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReviews;