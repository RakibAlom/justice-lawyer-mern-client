import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ServiceSidebar.css'

const ServiceSidebar = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://justice-lawyer-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return (
    <div className='sticky-md-top py-4'>
      <h4>Legal Services</h4>
      <hr />
      <div className="list-group rounded-0 mt-3">
        {
          services.map(servcie =>
            <NavLink to={`/services/${servcie._id}`} className={`list-group-item list-group-item-action border-0 shadow-sm mb-3 rounded-1`} aria-current="true" key={servcie._id}>
              {servcie.name}
            </NavLink>
          )
        }
      </div>
    </div >
  );
};

export default ServiceSidebar;