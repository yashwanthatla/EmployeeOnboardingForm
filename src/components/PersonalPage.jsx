import React, { useState } from 'react';
import FormField from './FormField';
import './assets/styles.css';

const PersonalPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    gender: '',
    phoneNumber: '',
    notificationPreferences: [],
    office: '', 
    team: '',
  });

  const [emailValid, setEmailValid] = useState(true); // State to track email validity

  const countries = ["India","USA","United Kingdom","Russia","China"]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Email validation
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailValid(emailPattern.test(value)); // Update email validity state
    }
  };

  const handleNotificationChange = (e) => {
    const { value, checked } = e.target;
    let updatedNotifications = [...formData.notificationPreferences];

    if (checked) {
      updatedNotifications.push(value);
    } else {
      updatedNotifications = updatedNotifications.filter((item) => item !== value);
    }

    setFormData({ ...formData, notificationPreferences: updatedNotifications });
  };

  const handleSave = () => {
    alert("Your information saved successfully")
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      country: '',
      gender: '',
      phoneNumber: '',
      notificationPreferences: [],
      office: '', 
      team: '',
    });
    alert("Your information is been reset")
  };
  

  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-md-6">
          <div className="form-container">
            <h2>Personal Information</h2>
            <FormField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} required={true} />
            <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required={true} />
            {!emailValid && <div className="text-danger">Please enter a valid email address.</div>} {/* Display error message if email is invalid */}
            <FormField
              label="Country"
              name="country"
              type="select"
              value={formData.country}
              onChange={handleChange}
              options={countries}
              required
            />
            <div className="mt-2 mb-2 ">
              <label className='m-1'>Gender:</label>
              <label className='m-1'><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
              <label className='m-1'><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
              <label className='m-1'><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
            </div>
            <FormField
              label="Phone Number"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <div className="mt-2 mb-2">
              <label className='m-1'>Notification Preferences:</label>
              <label className='m-1'><input type="checkbox" name="notificationPreferences" value="Email" onChange={handleNotificationChange} /> Email</label>
              <label className='m-1'><input type="checkbox" name="notificationPreferences" value="SMS" onChange={handleNotificationChange} /> SMS</label>
              <label className='m-1'><input type="checkbox" name="notificationPreferences" value="App Notification" onChange={handleNotificationChange} /> App Notification</label>
            </div>
            <FormField label="Office" name="office" type="text" value={formData.office} readOnly />
            <FormField label="Team" name="team" type="text" value={formData.team} onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://moveinsync.com/wp-content/uploads/2023/04/GIF_2-min.gif" alt="Company" className="img-fluid"/>
          <div className="text-center mt-2">
            <div className="row">
              <div className="col-6">
                <button onClick={handleSave} className="btn btn-success btn-block">Save</button>
              </div>
              <div className="col-6">
                <button onClick={handleReset} className="btn btn-danger btn-block">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PersonalPage;
