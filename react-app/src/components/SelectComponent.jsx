const SelectComponent = ({ id, name, labelContent, optionList }) => (
  <>
    <label htmlFor={id}>{labelContent}</label>
    <select name={name} id={id}>
      {optionList.map((optionmem, index) => (
        <option key={optionmem.value} value={optionmem.value}>
          {optionmem.content}
        </option>
      ))}
    </select>
  </>
);
export default SelectComponent;
