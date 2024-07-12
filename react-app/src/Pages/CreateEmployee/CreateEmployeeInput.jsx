import { forwardRef } from "react";

const UnwrappedCreateEmployeeInput = (
  {
    type,
    labelContent,
    inputPlaceholder,
    name,
    id,
    value,
    SetValue,
    disabled = false,
  },
  ref
) => {
  return (
    <span>
      <label htmlFor={id}>{labelContent}</label>
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => {
          SetValue(id, e.target.value);
        }}
        disabled={disabled}
      />
    </span>
  );
};

const CreateEmployeeInput = forwardRef(UnwrappedCreateEmployeeInput);
export default CreateEmployeeInput;
