import React from 'react';

const FormErrorText = ({ errorMsg }) => {
  return errorMsg ? <span className="error-message text-red-500 text-sm block">{errorMsg}</span> : null;
};

export default FormErrorText