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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    alert('Employee details saved successfully!');
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
    alert('Information reset successfully!');
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-container">
            <h2>Personal Information</h2>
            <FormField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} required />
            <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <FormField
              label="Country"
              name="country"
              type="select"
              value={formData.country}
              onChange={handleChange}
              options={['Select Country', 'Country 1', 'Country 2', 'Country 3']} // Example options, change as needed
              required
            />
            <div>
              <label>Gender:</label>
              <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
              <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
            </div>
            <FormField
              label="Phone Number"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <div>
              <label>Notification Preferences:</label>
              <label><input type="checkbox" name="notificationPreferences" value="Email" onChange={handleNotificationChange} /> Email</label>
              <label><input type="checkbox" name="notificationPreferences" value="SMS" onChange={handleNotificationChange} /> SMS</label>
              <label><input type="checkbox" name="notificationPreferences" value="App Notification" onChange={handleNotificationChange} /> App Notification</label>
            </div>
            <FormField label="Office" name="office" type="text" value={formData.office} readOnly />
            <FormField label="Team" name="team" type="text" value={formData.team} onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://moveinsync.com/wp-content/uploads/2023/04/GIF_2-min.gif" alt="Company" className="img-fluid" />
        </div>
      </div>
    </div>
  );
  
};

export default PersonalPage;
