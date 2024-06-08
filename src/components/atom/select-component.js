import React from 'react';

const SelectComponent = ({
  options = [],
  input,
  meta,
  placeholder = "Please select",
  disabled = false
}) => {

  const onChange = (event) => {
    input.onChange(event);
  }

  return (
    <div>
      <div className='flex flex-wrap gap-2 relative'>
        <select className="select-input" onChange={onChange} value={input.value} >
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {meta.submitFailed && <div className="mt-2 text-xs text-red-dark">{meta.error}</div>}
    </div>
  )
}

export default SelectComponent;
