import React from 'react';
import logo from './assets/delivery-guy.png';
import './App.scss';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <div className="home-heading">
        <h1>Dimebags Delivery</h1>
        <h3>Delivery Drivers Wanted</h3>
        <p>Fill out the below form and we will get in touch regarding you driving around with weed in your ass.</p>
      </div>
      <img src={logo} className="logo" alt="logo" />
      <div className='form-container'>
        <Form />
      </div>
    </div>
  );
}

export default App;
