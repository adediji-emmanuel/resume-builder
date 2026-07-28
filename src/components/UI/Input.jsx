import React from 'react';

export default function Input({ label, value, onChange, icon, type = 'text', placeholder }) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <div className="input-with-icon">
        {icon}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
