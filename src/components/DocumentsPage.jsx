import React, { useState } from 'react';
import FormField from './FormField';
import './assets/styles.css';

const DocumentsPage = () => {
  const [formData, setFormData] = useState({
    driversLicense: null,
    licenseExpiryDate: '',
    backgroundVerificationCertificate: null,
  });

  const handleFileChange = (name, file) => {
    setFormData({ ...formData, [name]: file });
  };

  const handlesave = () =>{
    alert("Your information saved successfully")
  }
  
  const handlereset = () => {
    setFormData({
      driversLicense: null,
      licenseExpiryDate: '',
      backgroundVerificationCertificate: null,
    });
    alert("Your information is been reset")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-md-6">
          <div className="form-container">
            <h2>Documents</h2>
            <FormField
              label="Driver's License"
              name="driversLicense"
              type="file"
              accept=".pdf"
              onChange={(file) => handleFileChange('driversLicense', file)}
              required
            />
            <FormField
              label="License Expiry Date"
              name="licenseExpiryDate"
              type="date"
              value={formData.licenseExpiryDate}
              onChange={handleChange}
              required
            />
            <FormField
              label="Background Verification Certificate"
              name="backgroundVerificationCertificate"
              type="file"
              accept=".png"
              onChange={(file) => handleFileChange('backgroundVerificationCertificate', file)}
              required
            />
          </div>
          <div className="text-center">
            <div className="row">
              <div className="col-6">
                <button onClick={handlesave} className="btn btn-success btn-block">Save</button>
              </div>
              <div className="col-6">
                <button onClick={handlereset} className="btn btn-danger btn-block">Reset</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://moveinsync.com/wp-content/uploads/2023/04/GIF_2-min.gif" alt="Company" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
  
};

export default DocumentsPage;
