import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import './Login.css'
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from "react-helmet";
const Login = () => {
  const { signInWithEmailPass, setLoading } = useContext(AuthContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('')
    signInWithEmailPass(email, password)
      .then(res => {
        const user = res.user;
        const currentUser = {
          uid: user.uid
        }
        // get jwt token
        fetch('https://justice-lawyer-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('access-token', data.token);
            form.reset();
            navigate(from, { replace: true });
            toast.success('Welcome, you login successfully!')
          });

      }).catch(error => {
        console.error(error)
        setError(error.message)
        toast.error(error.message)
      }).finally(() => {
        setLoading(false);
      })

  }
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login | Justice Lawyer</title>
        <meta name="title" content="Login | Justice Lawyer" />
        <meta name="description" content="Please, Login for our review and trust" />
      </Helmet>
      <section className='login-section shadow p-4 p-md-4'>
        <h2 className='text-center mb-4'>Login</h2>
        <p className="text-danger text-center">{error}</p>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='rounded-0' name="email" type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='rounded-0' name="password" type="password" placeholder="Password" required />
          </Form.Group>
          <Button className='w-100 rounded-0 mt-2' variant="danger" type="submit">
            Login
          </Button>
        </Form>
        <div className="text-center my-3">
          <div className='d-flex justify-content-between pb-4'>
            <Link to="#">Forget Password?</Link>
            <Link to="/register">Create an account?</Link>
          </div>
          <p className='pb-3'>OR</p>
          <div className='other-login-system'>
            <OtherLoginSystem></OtherLoginSystem>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Login;