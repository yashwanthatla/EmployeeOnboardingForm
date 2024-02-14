import React from 'react';

const FormField = ({ label, name, type, value, onChange, options, accept, required }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === 'select' ? (
        <select
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      ) : type === 'file' ? (
        <input
          className="form-control-file"
          type={type}
          name={name}
          accept={accept}
          onChange={(e) => onChange(name, e.target.files[0])}
          required={required}
        />
      ) : (
        <input
          className="form-control"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
