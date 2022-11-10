import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch('https://justice-lawyer-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setservices(data))
  }, [services]);
  return (
    <footer className='bg-dark text-light'>
      <Container>
        <div className="row p-2 py-4">
          <div className="col-lg-3 col-md-6 my-4">
            <h3>Contact Us</h3>
            <p>Justice Lawyer - Law Defender</p>
            <div className="list-group">
              <span className="nav-link mb-2"><FaMapMarkerAlt></FaMapMarkerAlt> Sylhet - 3100, Bangladesh</span>
              <a href='tel:+8801623405027' className="nav-link mb-2"><FaPhoneAlt></FaPhoneAlt> +88 01623-405027</a>
              <span className="nav-link mb-2"><FaRegClock></FaRegClock> Open: Sun-Thu: 9am – 5pm</span>
            </div>
          </div>
          <div className="col-lg-3 col-6 my-4">
            <h3>Services</h3>
            <div className="list-group">
              {
                services.map(servcie =>
                  <Link to={`/services/${servcie._id}`} className="nav-link mb-2" aria-current="true" key={servcie._id}>
                    <FaAngleDoubleRight></FaAngleDoubleRight> {servcie.name}
                  </Link>
                )
              }
            </div>
          </div>
          <div className="col-lg-3 col-6 my-4">
            <h3>Quick Links</h3>
            <div className="list-group">
              <Link to='/' className="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Home</Link>
              <Link to='/services' className="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Legal Services</Link>
              <Link to='/blog' className="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Blog</Link>
              <Link to='/about' className="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> About</Link>
              <Link to='/privacy-policy' className="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Privacy Policy</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-4">
            <h3>Quick Links</h3>
            <p>I will help support you and your loved ones with Medicaid, wills, trusts, advanced directives, Veteran’s benefits, probate, and more. Whether you’re rejoicing in the birth of a child, planning for the future, or celebrating the life of a loved one, I will be here — by your side.</p>
          </div>
        </div>
        <p className='text-center border-top py-3 m-0'>© Copyrights 2022 - Justic Lawyer Rakib - All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;