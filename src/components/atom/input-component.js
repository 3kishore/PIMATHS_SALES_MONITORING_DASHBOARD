import React from 'react';

const InputComponent = ({
  placeholder="Please Enter",
  input,
  meta,
  allowPattern = null
}) => {

  const onChange = (event) => {
    if(allowPattern){
      const regex = new RegExp(allowPattern);
      if(!regex.test(event.target.value)){
        event.target.value = input.value;
      }
    }
    input.onChange(event);
  }

  return (
    <div>
      <input className="text-input" onChange={onChange} value={input.value} placeholder={placeholder} />
      {meta.submitFailed && <div className="mt-2 text-xs text-red-dark">{meta.error}</div>}
    </div>
  )
}

export default InputComponent;
