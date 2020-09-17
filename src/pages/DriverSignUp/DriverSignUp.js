import React from 'react';
import './DriverSignUp.scss';

import DriverForm from '../../components/DriverForm/DriverForm';

const DriverSignUp = () => {
  return (
    <div className='driver-sign-up'>
      <div className='home-heading'>
        <h1>Dimebags Delivery</h1>
        <h3>Delivery Drivers Wanted</h3>
        <p>Fill out the below form and we will get in touch with you, regarding delivery driving.</p>
      </div>
      <DriverForm />
    </div>
  )
}

export default DriverSignUp;