import React, { useState } from 'react';
import FormField from './FormField';
import './styles.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    gender: '',
    phoneNumber: '',
    notificationPreferences: [],
    team: '',
    driversLicense: null,
    licenseExpiryDate: '',
    backgroundVerificationCertificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (name, file) => {
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic goes here
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      country: '',
      gender: '',
      phoneNumber: '',
      notificationPreferences: [],
      team: '',
      driversLicense: null,
      licenseExpiryDate: '',
      backgroundVerificationCertificate: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Employee Information */}
      <FormField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {/* Other fields go here */}
      
      {/* Documentation */}
      <FormField
        label="Driver's License"
        name="driversLicense"
        type="file"
        accept=".pdf"
        onChange={(file) => handleFileChange('driversLicense', file)}
        required
      />
      {/* Other document fields go here */}

      {/* Submit and Reset Buttons */}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Form;
