import React from "react";
const Button = ({ buttonContent, loggedin }) => {
  return (
    <button
      type="submit"
      data-testid="button-component"
      onClick={(e) => {
        e.preventDefault();
        loggedin();
      }}
    >
      {buttonContent}
    </button>
  );
};
export default Button;
