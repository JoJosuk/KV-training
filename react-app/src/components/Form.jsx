import SelectComponent from "./SelectComponent";
import CreateEmployeeInput from "../Pages/CreateEmployee/CreateEmployeeInput";
import { useState, useEffect, useRef } from "react";
import { actionTypes } from "../store/reducer";
import { useNavigate } from "react-router-dom";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const dateformat = (datestring) => {
  if (!datestring) return "";
  const [year, month, day] = datestring.split("-");
  return `${day}.${month}.${year}`;
};

const Form = ({ Fields, values = "", dispatch = () => {} }) => {
  const navigate = useNavigate();
  const [employeeFormData, setEmployeeFormData] = useState({
    empname: "",
    eid: "",
    jdate: new Date(),
    crole: "",
    status: "",
    exp: "",
    address1: "",
    address2: "",
    department: "",
  });
  const handleEdit = () => {
    const tempPayload = {
      id: employeeFormData.eid,
      exp: employeeFormData.exp,
      jdate: dateformat(employeeFormData.jdate),
      status: employeeFormData.status,
      name: employeeFormData.empname,
      role: employeeFormData.crole,
      address: {
        line1: employeeFormData.address1,
        pincode: employeeFormData.address2,
      },
      department: {
        name: employeeFormData.dept,
      },
    };
    console.log("temp payload", tempPayload);
    dispatch({
      type: actionTypes.EDIT_EMPLOYEE,
      payload: tempPayload,
    });
  };
  const handleCreate = () => {
    console.log(employeeFormData);
    const tempPayload = {
      id: getRandomInt(9007199254740991),
      exp: employeeFormData.exp,
      jdate: dateformat(employeeFormData.jdate),
      status: employeeFormData.status,
      name: employeeFormData.empname,
      role: employeeFormData.crole,
      address: {
        line1: employeeFormData.address1,
        pincode: employeeFormData.address2,
      },
      department: {
        name: employeeFormData.department,
      },
    };
    dispatch({
      type: actionTypes.ADD_EMPLOYEE,
      payload: tempPayload,
    });
  };
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
              disabled={values && field.id === "eid"}
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
            if (values) {
              handleEdit();
            } else {
              handleCreate();
            }
            navigate("/");
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
