import { forwardRef } from "react";
import React from "react";
const WrapperLoginInput = (
  {
    type,
    labelContent,
    inputPlaceholder,
    name,
    id,
    value = "",
    error = false,
    onValueChange = () => null,
  },
  ref
) => {
  return (
    <>
      <span className={`${error ? "red" : ""}`}>
        <label htmlFor={id}> {labelContent}</label>
        <input
          data-testid="input-container"
          ref={ref}
          type={type}
          name={name}
          id={id}
          placeholder={inputPlaceholder}
          value={value}
          onChange={onValueChange}
        />
      </span>
    </>
  );
};

const LoginInput = forwardRef(WrapperLoginInput);
export default LoginInput;
