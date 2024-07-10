const Button = ({ buttonContent, loggedin, loggedinVal }) => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        loggedin(loggedinVal);
      }}
    >
      {buttonContent}
    </button>
  );
};
export default Button;
