import SelectComponent from "./SelectComponent";
import CreateEmployeeInput from "../Pages/CreateEmployee/CreateEmployeeInput";
import { useState, useEffect, useRef, useContext } from "react";
import { actionTypes } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../store/employeeReducer";
import { useAddEmployeeMutation } from "../Pages/EmployeeList/api";
import { useEditEmployeeMutation } from "../Pages/EmployeeList/api";
import { ToastContext } from "../ToastContext";
import handleRequestErrors from "../../utils/HandleRequestErrors";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const dateformat = (datestring) => {
  if (!datestring) return "";
  const [year, month, day] = datestring.split("-");
  return `${day}.${month}.${year}`;
};

const Form = ({ Fields, values = "", dispatch = () => {} }) => {
  const { showToast } = useContext(ToastContext);

  const navigate = useNavigate();
  const [addEmployee] = useAddEmployeeMutation();
  const [EditEmployee] = useEditEmployeeMutation();

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
    email: "",
  });
  const handleEdit = async () => {
    const tempPayload = {
      experience: Number(employeeFormData.exp),
      jdate: new Date(employeeFormData.jdate).toISOString(),
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
    const response = await EditEmployee({
      id: employeeFormData.eid,
      payload: tempPayload,
    });
    if (handleRequestErrors(showToast, response)) return;

    navigate(`/employee/${employeeFormData.eid}`);
    console.log("response is", response);
    dispatch(employeeFormData.eid, tempPayload);
  };
  const handleCreate = async () => {
    console.log(employeeFormData);
    const tempPayload = {
      password: "password",
      jdate: new Date(employeeFormData.jdate).toISOString(),
      email: employeeFormData.email,
      experience: Number(employeeFormData.exp),
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

    const response = await addEmployee(tempPayload);
    if (response.error) {
      if (response.error.data.respbody.validationerror) {
        showToast(response.error.data.respbody.validationerror[0]);
        return;
      }
      showToast(response.error.data.respbody.message);
      return;
    }
    navigate("/employee");
    console.log("response", response);
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
            // navigate("/");
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
