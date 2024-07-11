const Button = ({ buttonContent, loggedin }) => {
  return (
    <button
      type="submit"
      onClick={() => {
        loggedin();
      }}
    >
      {buttonContent}
    </button>
  );
};
export default Button;
