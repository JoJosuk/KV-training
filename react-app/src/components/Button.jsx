const Button = ({ buttonContent, loggedin }) => {
  return (
    <button
      type="submit"
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
