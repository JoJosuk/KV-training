import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./EmployeeList.scss";
import { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import { actionTypes } from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, deleteEmployee } from "../../store/employeeReducer";
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from "./api";
const dateformat = (str) => {
  const newStr = str.split("T");
  const values = newStr[0].split("-");
  return `${values[2]}- ${values[1]}-${values[0]}`;
};
const EmployeeList = () => {
  //redux-state mngmt
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);
  const status = useSelector((state) => state.employee.status);
  //redux-state mngmt

  const { data = [] } = useGetEmployeeListQuery();
  useEffect(() => {
    console.log("data is", data);
  }, [data]);

  const navigate = useNavigate();
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [deleteEmployee, { isSuccess }] = useDeleteEmployeeMutation();
  const handleEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };
  const handleDelete = async (id) => {
    const response = await deleteEmployee(id.toString());
    console.log("delete response", response);
    setDeleteFlag(false);
  };
  return (
    <>
      {deleteFlag && (
        <DeleteModal
          accept={handleDelete}
          close={setDeleteFlag}
          id={deleteFlag}
        />
      )}
      <main className="employeelist">
        <section className="sec1">
          <h1>Employee List</h1>
          <div className="filterbox">
            <p>Filter by </p>
            <select
              value={status}
              onChange={(e) => {
                dispatch(changeStatus(e.target.value));
              }}
            >
              <option value="Status">Status</option>
              <option value="Probation">Probation</option>
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
            </select>
            <div
              className="employeeadd"
              onClick={() => {
                navigate("/employee/create");
              }}
            >
              <div className="circularAdd">+</div>
              Create Employee
            </div>
          </div>
        </section>
        <div className="tablecontainer">
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Id</th>
                <th>Joining Date</th>
                <th>Role</th>
                <th>Status</th>
                <th>Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (employee) =>
                  (employee.status === status || status === "Status") && (
                    <tr
                      key={employee.id}
                      onClick={() => {
                        navigate(`\ ${employee.id}`);
                      }}
                    >
                      <td>{employee.name}</td>
                      <td>{employee.id}</td>
                      <td>{dateformat(employee.createdAt)}</td>
                      {/* <td>{employee.createdAt}</td> */}
                      <td>{employee.role}</td>
                      <td>
                        <div className="statuscontainer">
                          <div
                            className="status"
                            id={`${
                              employee.status === "Probation"
                                ? "yellow"
                                : employee.status === "Inactive"
                                ? "red"
                                : "green"
                            }`}
                          >
                            {" "}
                            {employee.status}
                          </div>
                        </div>
                      </td>
                      {/* <td>{findExperience(employee.createdAt)}</td> */}
                      <td>{employee.experience} Years</td>
                      <td>
                        <div className="wrapicons">
                          <div
                            className="deleteicon cc"
                            onClick={(e) => {
                              console.log("deleted id", employee.id);
                              setDeleteFlag(employee.id);
                              e.stopPropagation();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                          <div
                            className="editicon cc"
                            onClick={(e) => {
                              handleEdit(employee.id);
                              e.stopPropagation();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};
export default EmployeeList;
