import CreateEmployeeHeader from "./CreateEmployeeHeader";
import LoginInput from "../../components/LoginInput";
import CreateEmployeeSideBar from "./CreateEmployeeSideBar";
import SelectComponent from "../../components/SelectComponent";
import CreateEmployeeInput from "./CreateEmployeeInput";
import "./CreateEmployee.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Form from "../../components/Form";
import { useDispatch } from "react-redux";
import { useGetDepartmentListQuery } from "../EmployeeList/department.api";

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
    value: "UI",
    content: "UI",
  },
  {
    value: "UX",
    content: "UX",
  },
  {
    value: "Developer",
    content: "Developer",
  },
  {
    value: "HR",
    content: "HR",
  },
];

const CreateEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deptOptionList, setDeptOptionList] = useState([
    {
      value: "select",
      content: "Select",
    },
  ]);
  const [fieldsState, setFieldsState] = useState([]);
  const { data } = useGetDepartmentListQuery();
  useEffect(() => {
    console.log(data);
    if (data) {
      const depts = deptOptionList;
      data.forEach((element) => {
        console.log(element);
        depts.push({ value: element.name, content: element.name });
      });
      setDeptOptionList(depts);
      setFieldsState([
        {
          id: "empname",
          inputPlaceholder: "Employee name",
          labelContent: "Employee name",
          name: "Employee name",
          type: "text",
        },
        {
          id: "email",
          inputPlaceholder: "Employee email",
          labelContent: "Employee Email",
          name: "email",
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
      ]);
    }
  }, [data]);

  return (
    <>
      {/* <div className="stylechanger">
        <CreateEmployeeHeader /> */}

      <main>
        <section className="sec1">
          <h1>Create Employee</h1>
        </section>
        <section className="sec2">
          {data && <Form Fields={fieldsState} dispatch={dispatch} />}
        </section>
      </main>
      {/* </div> */}
    </>
  );
};
export default CreateEmployee;
