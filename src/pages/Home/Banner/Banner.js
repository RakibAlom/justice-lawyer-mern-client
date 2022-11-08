import React from 'react';
import Card from 'react-bootstrap/Card';

const Banner = () => {
  return (
    <>
      <Card className="bg-dark text-white rounded-0 border-0">
        <Card.Img src="https://fortresscriminaldefense.com//wp-content/uploads/2022/10/Fortress-Law-Firm-Banner.webp" alt="Banner image" className="rounded-0" />
        <Card.ImgOverlay className="text-white rounded-0 border-none">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Banner;