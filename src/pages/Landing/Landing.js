import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing'>
      <Link to='/driver-signup'>Driver signup</Link>
      <Link to='/dispensary-signup'>Dispo signup</Link>
    </div>
  )
}

export default Landing;