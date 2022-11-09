import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import './Register.css'
import toast from 'react-hot-toast';

const Register = () => {
  const { createUserRegister, updateUserProfile } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    setError('')

    if (password === confirm_password) {
      createUserRegister(email, password)
        .then(res => {
          form.reset()
          handleUpdateUserProfile(name, photoURL)
          navigate('/')
          toast.success('Register Successfully Completed!')
        }).catch(error => {
          console.error(error)
          setError(error.message)
          toast.error(error.message)
        });
    } else {
      toast.error('Confirm Password Not Matched!');
    }

  }

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }

    updateUserProfile(profile)
      .then(() => { })
      .catch(error => {
        console.error(error)
        toast.error(error.message)
      });
  }

  const handleAccepted = () => {
    setAccepted(!accepted)
  }

  return (
    <section className='register-section'>
      <h2 className='text-center mb-4'>Register</h2>
      <p className="text-danger text-center">{error}</p>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control className='rounded-0' name='name' type="text" placeholder="Enter full name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='rounded-0' name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhotoURL">
          <Form.Label>Photo URL (Optional)</Form.Label>
          <Form.Control className='rounded-0' name='photoURL' type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='rounded-0' name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control className='rounded-0' name='confirm_password' type="password" placeholder="Confirm Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label="Accept my terms & condition" />
        </Form.Group>
        <Button className='w-100 rounded-0 mt-2' variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
      <div className="text-center my-3">
        <Link to="/login" className='py-4 d-block'>Already have an account?</Link>
        <p className='pb-3'>OR</p>
        <div className='other-login-system'>
          <OtherLoginSystem></OtherLoginSystem>
        </div>
      </div>
    </section>
  );
};

export default Register;