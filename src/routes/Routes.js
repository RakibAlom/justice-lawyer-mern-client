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
import ReviewUpdate from '../pages/Reviews/ReviewUpdate/ReviewUpdate';
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
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://justice-lawyer-server.vercel.app/services/${params.id}`)
      },
      { path: '/add-service', element: <PrivateRoutes><CreateService></CreateService></PrivateRoutes> },
      { path: '/reviews', element: <PrivateRoutes><Reviews></Reviews></PrivateRoutes> },
      {
        path: '/reviews/:id',
        element: <PrivateRoutes><ReviewUpdate></ReviewUpdate></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://justice-lawyer-server.vercel.app/reviews/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
        loader: () => fetch(`https://justice-lawyer-server.vercel.app/blogs`)
      },
      {
        path: '/blog/:slug',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://justice-lawyer-server.vercel.app/blogs/${params.slug}`)
      },
      { path: '/about', element: <About></About> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '*', element: <NotFound404></NotFound404> }
    ]
  }
])