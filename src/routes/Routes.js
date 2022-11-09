import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Main from '../layouts/Main/Main';
import About from '../pages/About/About';
import BlogDetails from '../pages/Blog/BlogDetails/BlogDetails';
import Blogs from '../pages/Blog/Blogs';
import Home from '../pages/Home/Home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
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
    ]
  }
])