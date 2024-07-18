import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import Form from "../../../components/Form";
import { useEffect } from "react";
import { useEditEmployeeMutation } from "../EmployeeList/api";
import { useGetEmployeeDetailsQuery } from "../EmployeeList/api";
import { useGetDepartmentListQuery } from "../EmployeeList/department.api";
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
  const navigate = useNavigate();
  const { state } = useOutletContext();
  const [EditEmployee] = useEditEmployeeMutation();
  const handleEdit = async (id, body) => {
    console.log("the handle edit", body);
    const response = await EditEmployee(id, body);
    navigate("/employee");
    console.log("response is", response);
  };

  const { id } = useParams();
  const { data = {}, isError, isSuccess } = useGetEmployeeDetailsQuery(id);

  console.log("the id is", id);
  const getEmployee = () => {
    if (isSuccess) {
      const employee = data;
      console.log("getemployeeby id", employee, isError, isSuccess);

      const values = {
        empname: employee.name,
        eid: employee.id,
        jdate: new Date(employee.jdate).toISOString().split("T")[0],
        crole: employee.role,
        status: employee.status,
        exp: employee.experience,
        address1: employee.address.line1,
        address2: employee.address.pincode,
        dept: employee.department.name,
      };
      console.log("values is", values);
      return values;
    }
    return {};
  };

  const { data: DeptData = [] } = useGetDepartmentListQuery();
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
      optionList: [
        ...[{ value: "status", content: "status" }],
        ...DeptData.map((element) => ({
          value: element.name,
          content: element.name,
        })),
      ],
    },
  ];
  return (
    <main>
      <section className="sec1">
        <h1>Edit Employee</h1>
      </section>
      <section className="sec2">
        {id && <Form Fields={Fields} values={getEmployee()} />}
      </section>
    </main>
  );
};
export default EditEmployee;
