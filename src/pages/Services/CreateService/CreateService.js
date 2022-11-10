import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const CreateService = () => {
  const handleCreateService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const serviceThumbnail = form.serviceThumbnail.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const serviceDetails = form.serviceDetails.value;

    const service = {
      name,
      serviceThumbnail,
      rating,
      price,
      serviceDetails
    }

    fetch('https://justice-lawyer-server.vercel.app/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('New Service Added Successfully Done!')
        }
        form.reset()
      })
      .catch(err => {
        toast.error('Something is wrong!')
        console.error(err)
      })
  }
  return (
    <Container>
      <section className='service-section'>
        <div className="row py-4">
          <div className="col-md-8 col-lg-9">
            <div className='shadow p-3'>
              <h2 className='mb-4'>Add New Service</h2>
              {/* <p className="text-danger text-center">{error}</p> */}
              <Form onSubmit={handleCreateService}>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Service Name</Form.Label>
                      <Form.Control name='name' type="text" placeholder="enter service name" required />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="Thumbnail">
                      <Form.Label>Thumbnail Image URL</Form.Label>
                      <Form.Control name='serviceThumbnail' type="text" placeholder="enter image url" required />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="Rating">
                      <Form.Label>Rating</Form.Label>
                      <Form.Select aria-label="Select Reting" name='rating' required>
                        <option>Selct Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="Price">
                      <Form.Label>Price</Form.Label>
                      <Form.Control name='price' type="text" placeholder="$ Price" required />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <Form.Group className="mb-3" controlId="Details">
                      <Form.Label>Service Details</Form.Label>
                      <Form.Control as="textarea" name='serviceDetails' rows={10} placeholder="type your service details..." />
                    </Form.Group>
                  </div>
                </div>

                <Button className='rounded-1 mt-2' variant="danger" type="submit">
                  Add New Service
                </Button>
              </Form>
            </div>

          </div>
          <div className="col-md-4 col-lg-3">
          </div>
        </div>
      </section>
    </Container>

  );
};

export default CreateService;