import SelectComponent from "./SelectComponent";
import CreateEmployeeInput from "../Pages/CreateEmployee/CreateEmployeeInput";
import { useState, useEffect, useRef } from "react";

const Form = ({ Fields, values = "", handleEdit = () => {} }) => {
  const [employeeFormData, setEmployeeFormData] = useState({
    empname: "",
    eid: "",
    jdata: "",
    crole: "",
    status: "",
    exp: "",
    address1: "",
    address2: "",
  });
  useEffect(() => {
    if (values !== "") {
      setEmployeeFormData(values);
    }
  }, [values]);
  const employeeRef = useRef(null);
  const handleFormData = (fieldId, value) => {
    setEmployeeFormData({
      ...employeeFormData,
      [fieldId]: value,
    });
  };
  useEffect(() => {
    console.log("employeeformdata", employeeFormData);
  }, [employeeFormData]);
  useEffect(() => {
    if (employeeRef.current) {
      employeeRef.current.focus();
    }
    console.log(employeeRef);
  }, [employeeRef.current]);
  return (
    <form action="">
      {Fields.map((field, index) => {
        console.log(field.id);
        return field.optionList ? (
          <div key={field.id}>
            <SelectComponent
              id={field.id}
              labelContent={field.labelContent}
              name={field.name}
              optionList={field.optionList}
              value={employeeFormData[field.id]}
              SetValue={handleFormData}
            />
          </div>
        ) : (
          <div key={field.id}>
            <CreateEmployeeInput
              {...(index === 0 ? { ref: employeeRef } : null)}
              key={field.id}
              id={field.id}
              inputPlaceholder={field.inputPlaceholder}
              labelContent={field.labelContent}
              name={field.name}
              type={field.type}
              value={employeeFormData[field.id]}
              SetValue={handleFormData}
              disabled={field.id === "eid"}
            />
          </div>
        );
      })}

      <div className="buttonbox">
        <button
          id="create"
          onClick={(e) => {
            e.preventDefault();
            console.log("clicking edit");
            handleEdit(employeeFormData);
          }}
        >
          {values ? "Edit " : "create"}
        </button>
        <button id="cancel">Cancel</button>
      </div>
    </form>
  );
};
export default Form;
