import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import BannerImg from '../../../images/banner-image.jpg';
import './Banner.css'

const Banner = () => {
  return (
    <>
      <Card className="bg-dark text-white rounded-0 border-0 banner-section" style={{ backgroundImage: `url(${BannerImg})` }}>
        <Card.ImgOverlay className="text-white rounded-0 border-none d-flex flex-column justify-content-center">
          <Container>
            <div className="px-2 px-md-5 text-center banner-text">
              <p className='text-warning'>I'm Excited To Meet You!</p>
              <h1 className='fw-bold'>Protecting Loved Ones & Legacies</h1>
              <p className='py-2'>Are you looking to ensure legal protection and happy futures for yourself and your loved ones? I'm here to help you discover all your options and make decisions with confidence.</p>
              <button className='btn btn-danger btn-lg px-3 px-md-4 fw-semibold text-light rounded-1'>Schedule Your Free Assessment Today</button>
            </div>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Banner;