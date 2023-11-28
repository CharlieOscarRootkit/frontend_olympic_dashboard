import React from 'react';

const Label = ({ label, htmlFor, isRequired }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm text-gray-600">
      {label} {isRequired && <span className="required text-green-500 font-bold">*</span>}
    </label>
  );
};

export default Label