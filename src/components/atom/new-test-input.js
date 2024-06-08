import React from 'react';

// Define the InputComponent to accept ref and other props
const NewTestInputComponent = React.forwardRef(({ type = "text", placeholder, isBtnTypePass, ...rest }, ref) => {
  return (
    <div>
      <input 
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
        className="text-input"
      />
      {isBtnTypePass && <button type="button">Toggle</button>}
    </div>
  );
});

export default NewTestInputComponent;
