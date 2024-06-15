import React, { useState } from 'react';

// Define the InputComponent to accept ref and other props
const NewTestInputComponent = React.forwardRef(({ type = "text", placeholder, isBtnTypePass, ...rest }, ref) => {
  const [inputType, setInputType] = useState(type);
  const toggleInputType = () => {
    setInputType(prevType => (prevType === "password" ? "text" : "password"));
  }
  return (
    <div>
      <input 
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
        className="text-input"
      />
      {isBtnTypePass ? <button type="button" className="absolute top-[10px] right-2" onClick={toggleInputType}>
          {inputType === "password" ? <span className="material-symbols-outlined">visibility_off</span> : 
            <span className="material-symbols-outlined">visibility</span>
            }
          </button> : null}
    </div>
    
  );
});

export default NewTestInputComponent;
