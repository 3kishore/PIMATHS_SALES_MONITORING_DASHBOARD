import React from 'react';

// Define the SelectComponent to accept ref and other props
const NewSelectComponent = React.forwardRef(({ options, placeholder, disabled, ...rest }, ref) => {
  return (
    <select ref={ref} disabled={disabled} {...rest} className="select-input">
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
});

export default NewSelectComponent;