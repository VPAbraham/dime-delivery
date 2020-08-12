import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './Form.scss';

  class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        company: '',
        locationnum: '',
        oapartners: '',
        posvender: ''
      }
    }
    handleChange = (e) => {
      this.setState({[e.target.className]: e.target.value})
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const { 
        firstname, 
        lastname, 
        phone, 
        email, 
        company, 
        locationnum, 
        oapartners, 
        posvendors 
      } = this.state;

      let templateParams = {
        first_name: firstname,
        last_name: lastname
      }      
      let userId = "user_x5uABT0eKoQ966cPycy9d";
      console.log(process.env.REACT_APP_API_KEY)

      emailjs.send(
        'default_service',
        'template_FOllX5rW',
        templateParams,
        process.env.REACT_APP_API_KEY
      )
    }



    render() {
      return (
        <form className="signup-form">
          <div>
            <label className="">First Name</label>
            <input id='form-input' className="firstname" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Last Name</label>
            <input id='form-input' className="lastname" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Phone Number</label>
            <input id='form-input' className="phone" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Email</label>
            <input id='form-input' className="email" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Company</label>
            <input id='form-input' className="company" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Number of Locations</label>
            <input id='form-input' className="locationnum" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Order Ahead Partner(s)</label>
            <input id='form-input' className="oapartners" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>POS Vendor</label>
            <input id='form-input' className="posvendor" onChange={this.handleChange}></input>
          </div>
          <button type="simpleQuery" onClick={(e) => {this.handleSubmit(e)}}>SUBMIT INFORMATION</button>
        </form>
      )
    }
  }

  export default Form;