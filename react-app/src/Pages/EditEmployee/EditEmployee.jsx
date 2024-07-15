import { useParams, useOutletContext } from "react-router-dom";
import Form from "../../components/Form";
import { useEffect } from "react";

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
    type: "number",
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
//format date

const EditEmployee = () => {
  const { state, dispatch } = useOutletContext();

  const { id } = useParams();
  console.log("the id is", id);
  const getEmployee = () => {
    if (state) {
      const employee = state.employee.find((e) => e.id === parseInt(id));

      const values = {
        empname: employee.name,
        eid: employee.id,
        jdate: new Date(employee.jdate).toISOString().split("T")[0],
        crole: employee.role,
        status: employee.status,
        exp: employee.exp,
        address1: employee.address.line1,
        address2: employee.address.pincode,
        dept: employee.department.name,
      };
      console.log("values is", values);
      return values;
    }
    return {};
  };
  return (
    <main>
      <section className="sec1">
        <h1>Edit Employee</h1>
      </section>
      <section className="sec2">
        {id && (
          <Form Fields={Fields} values={getEmployee()} dispatch={dispatch} />
        )}
      </section>
    </main>
  );
};
export default EditEmployee;
