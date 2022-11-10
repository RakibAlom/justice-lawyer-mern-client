import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Main from '../layouts/Main/Main';
import About from '../pages/About/About';
import BlogDetails from '../pages/Blog/BlogDetails/BlogDetails';
import Blogs from '../pages/Blog/Blogs';
import Home from '../pages/Home/Home';
import NotFound404 from '../pages/Other/NotFound/NotFound404';
import Reviews from '../pages/Reviews/Reviews';
import CreateService from '../pages/Services/CreateService/CreateService';
import ServiceDetails from '../pages/Services/ServiceDetails/ServiceDetails';
import Services from '../pages/Services/Services';
import PrivateRoutes from './PrivateRouters';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/legal-services',
        element: <Services></Services>,
        loader: () => fetch(`http://localhost:5000/services`)
      },
      {
        path: '/legal-services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      { path: '/add-service', element: <PrivateRoutes><CreateService></CreateService></PrivateRoutes> },
      { path: '/reviews', element: <PrivateRoutes><Reviews></Reviews></PrivateRoutes> },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
        loader: () => fetch(`https://next-learner-server.vercel.app/blog`)
      },
      {
        path: '/blog/:slug',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://next-learner-server.vercel.app/blog/${params.slug}`)
      },
      { path: '/about', element: <About></About> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '*', element: <NotFound404></NotFound404> }
    ]
  }
])