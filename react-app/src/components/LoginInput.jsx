const LoginInput = ({ type, labelContent, inputPlaceholder, name, id }) => {
  return (
    <>
      <span>
        <label htmlFor={id}>{labelContent}</label>
        <input type={type} name={name} id={id} placeholder={inputPlaceholder} />
      </span>
    </>
  );
};

export default LoginInput;
