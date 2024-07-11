const SelectComponent = ({
  id,
  name,
  labelContent,
  optionList,
  value,
  SetValue,
}) => (
  <>
    <label htmlFor={id}>{labelContent}</label>
    <select
      name={name}
      id={id}
      value={value}
      onChange={(e) => {
        SetValue(id, e.target.value);
      }}
    >
      {optionList.map((optionmem, index) => (
        <option key={optionmem.value} value={optionmem.value}>
          {optionmem.content}
        </option>
      ))}
    </select>
  </>
);
export default SelectComponent;
