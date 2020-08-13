import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import './DriverForm.scss';
import { Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import SubConfirm from '../../pages/SubConfirm/SubConfirm';


  class DriverForm extends Component {
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
        last_name: lastname,
        phone,
        email,
        company,
        locationNum: locationnum,
        oapartners,
        posvendors
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
        <div>
          <form className="signup-form">
            <div>
              <label className="">First Name</label>
              <input 
                id='form-input' 
                className="firstname" 
                onChange={this.handleChange} 
                required 
              />
            </div>
            <div>
              <label>Last Name</label>
              <input 
                id='form-input' 
                className="lastname" 
                onChange={this.handleChange} 
                required
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input 
                id='form-input' 
                className="phone" 
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input 
                id='form-input' 
                className="email" 
                onChange={this.handleChange} 
              />
            </div>
            <div>
              <label>Company</label>
              <input 
                id='form-input' 
                className="company" 
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Number of Locations</label>
              <input 
                id='form-input' 
                className="locationnum" 
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Order Ahead Partner(s)</label>
              <input 
                id='form-input' 
                className="oapartners" 
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>POS Vendor</label>
              <input 
                id='form-input' 
                className="posvendor" 
                onChange={this.handleChange}
              />
            </div>
            <Route component={SubConfirm}>
              <Button type='submit' onClick={(e) => {this.handleSubmit(e)}}>SUBMIT INFORMATION</Button>
            </Route>
          </form>
        </div>
      )
    }
  }

  export default DriverForm;