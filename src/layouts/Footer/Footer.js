import React from 'react';
import { Container } from 'react-bootstrap';
import { FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-dark text-light'>
      <Container>
        <div className="row p-2 py-4">
          <div className="col-lg-3 col-md-6 my-4">
            <h3>Contact Us</h3>
            <p>Justice Lawyer - Law Defender</p>
            <div class="list-group">
              <Link to='/' class="nav-link mb-2"><FaMapMarkerAlt></FaMapMarkerAlt> 4124 Erie Street, Willoughby, OH 44094</Link>
              <Link to='/' class="nav-link mb-2"><FaPhoneAlt></FaPhoneAlt> +88 01623-405027</Link>
              <span class="nav-link mb-2"><FaRegClock></FaRegClock> Open: Sun-Thu: 9am – 5pm</span>
            </div>
          </div>
          <div className="col-lg-3 col-6 my-4">
            <h3>Services</h3>
            <div class="list-group">
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Elder Law</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Elder Law</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Elder Law</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Elder Law</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Elder Law</Link>
            </div>
          </div>
          <div className="col-lg-3 col-6 my-4">
            <h3>Quick Links</h3>
            <div class="list-group">
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Home</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Legal Services</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Blog</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> About</Link>
              <Link to='/' class="nav-link mb-2"><FaAngleDoubleRight></FaAngleDoubleRight> Privacy Policy</Link>
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