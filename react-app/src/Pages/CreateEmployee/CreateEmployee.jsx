import CreateEmployeeHeader from "./CreateEmployeeHeader";
import LoginInput from "../../components/LoginInput";
import CreateEmployeeSideBar from "./CreateEmployeeSideBar";
import SelectComponent from "../../components/SelectComponent";
import CreateEmployeeInput from "./CreateEmployeeInput";
import "./CreateEmployee.scss";
import { useEffect, useRef, useState } from "react";

const CreateEmployee = () => {
  const [employeeFormData, setEmployeeFormData] = useState({
    empname: "",
    eid: "",
    jdata: "",
    crole: "",
    status: "",
    exp: "",
    address: "",
  });
  const employeeRef = useRef(null);

  const statusOptionList = [
    {
      value: "select",
      content: "Select",
    },
    {
      value: "Joined",
      content: "Joined",
    },
    {
      value: "On process",
      content: "On Process",
    },
  ];

  const croleOptionList = [
    {
      value: "select",
      content: "Select",
    },
    {
      value: "SDE",
      content: "SDE",
    },
    {
      value: "SAE",
      content: "SAE",
    },
  ];

  const Fields = [
    {
      id: "empname",
      inputPlaceholder: "Employee name",
      labelContent: "Employee name",
      name: "Employee name",
      type: "text",
    },
    {
      id: "eid",
      inputPlaceholder: "Employee ID",
      labelContent: "Employee ID",
      name: "Employee ID",
      type: "text",
    },
    {
      id: "jdate",
      inputPlaceholder: "Joining Date",
      labelContent: "Joining Date",
      name: "Joining Date",
      type: "text",
    },
    {
      id: "crole",
      labelContent: "Choose Role",
      name: "Choose Role",
      optionList: croleOptionList,
    },
    {
      id: "status",
      labelContent: "Status",
      name: "Status",
      optionList: statusOptionList,
    },
    {
      id: "exp",
      inputPlaceholder: "Experience",
      labelContent: "Experience",
      name: "Experience",
      type: "text",
    },
    {
      id: "address",
      inputPlaceholder: "Address",
      labelContent: "Address",
      name: "Address",
      type: "text",
    },
  ];
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
    <>
      <div className="stylechanger">
        <CreateEmployeeHeader />
        <div className="mainwrapper">
          <CreateEmployeeSideBar />
          <main>
            <section className="sec1">
              <h1>Create Employee</h1>
            </section>
            <section className="sec2">
              <form action="">
                {Fields.map((field, index) => {
                  console.log(index);
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
                      />
                    </div>
                  );
                })}

                <div className="buttonbox">
                  <button id="create">Create</button>
                  <button id="cancel">Cancel</button>
                </div>
              </form>
            </section>
          </main>
        </div>
        <div>Create employee</div>
      </div>
    </>
  );
};
export default CreateEmployee;
