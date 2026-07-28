import React from 'react';

export default function Textarea({ label, value, onChange, rows = 4, placeholder }) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
}
