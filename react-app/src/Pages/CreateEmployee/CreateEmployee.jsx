import CreateEmployeeHeader from "./CreateEmployeeHeader";
import LoginInput from "../../components/LoginInput";
import CreateEmployeeSideBar from "./CreateEmployeeSideBar";
import SelectComponent from "../../components/SelectComponent";
import CreateEmployeeInput from "./CreateEmployeeInput";
import "./CreateEmployee.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";

const CreateEmployee = () => {
  const navigate = useNavigate();

  const deptOptionList = [
    {
      value: "select",
      content: "Select",
    },
    {
      value: "Human Resources",
      content: "Human Resources",
    },
    {
      value: "Devops",
      content: "Devops",
    },
  ];

  const statusOptionList = [
    {
      value: "select",
      content: "Select",
    },
    {
      value: "Active",
      content: "Active",
    },
    {
      value: "Inactive",
      content: "Inactive",
    },
    {
      value: "Probation",
      content: "Probation",
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
      type: "date",
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
      id: "address1",
      inputPlaceholder: "Address",
      labelContent: "Address Line1",
      name: "Address Line 1",
      type: "text",
    },
    {
      id: "address2",
      inputPlaceholder: "Address",
      labelContent: "Address Line 2",
      name: "Address Line 2",
      type: "text",
    },

    {
      id: "dept",
      labelContent: "Department",
      name: "Department",
      optionList: deptOptionList,
    },
  ];

  return (
    <>
      {/* <div className="stylechanger">
        <CreateEmployeeHeader /> */}

      <main>
        <section className="sec1">
          <h1>Create Employee</h1>
        </section>
        <section className="sec2">
          <Form Fields={Fields} />
        </section>
      </main>
      {/* </div> */}
    </>
  );
};
export default CreateEmployee;
