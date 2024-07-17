import { useOutletContext, useParams } from "react-router-dom";
import tempEmployeeList from "../../../utils/dummyData";
import { useEffect, useState } from "react";
import { ToastContext } from "../../ToastContext";
import { useContext } from "react";

const Fields = [
  { label: "Employee name", key: "name", classname: "" },
  { label: "Joining Date", key: "createdAt", classname: "" },
  { label: "Experience", key: "experience", classname: "" },
  { label: "Role", key: "role", classname: "" },
  { label: "Status", key: "status", classname: "" },
  { label: "Department", key: "department.name", classname: "" },
  {
    label: "Address",
    key: "address.line1,address.pincode",
    classname: "address",
  }, // assuming address is an object
  { label: "Employee ID", key: "id", classname: "id" },
];
const getNestedPpty = (obj, str) => {
  if (str.includes(",")) {
    let arr = str.split(",");
    arr = arr.map((a) => {
      let amap = a.split(".");
      return amap.reduce((acc, key) => acc && acc[key], obj);
    });
    return arr.reduce((acc, cv) => {
      if (acc === "") {
        return cv;
      } else {
        return acc + ", " + cv;
      }
    });
  }
  const arr = str.split(".");
  return arr.reduce((acc, key) => acc && acc[key], obj);
};
import "./EmployeeDetails.scss";
import { useGetEmployeeDetailsQuery } from "../EmployeeList/api";
const EmployeeDetails = () => {
  const { id } = useParams();
  const { state } = useOutletContext();
  const { showToast } = useContext(ToastContext);

  const { data = {}, isError, isSuccess } = useGetEmployeeDetailsQuery(id);
  const [employeeDetail, setEmployeeDetail] = useState([]);
  useEffect(() => {
    console.log(data);
    setEmployeeDetail(data);
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      try {
        showToast(data.error.data.respbody.message);
      } catch (e) {
        showToast("Unknown error");
      }
    }
  }, [isError]);
  // useEffect(() => {
  //   const details = state.employee.filter(
  //     (employee) => employee.id === parseInt(id)
  //   );
  //   if (details.length === 0) {
  //     console.log("error");
  //     throw new Error();
  //   }
  //   console.log("details", details[0]);
  //   setEmployeeDetail(details[0]);
  // }, []);

  return (
    <main>
      <section className="sec1">
        <h1>Employee Details</h1>
      </section>
      {employeeDetail && (
        <div className="detailcontainer">
          {Fields.map((field) => (
            <div className={`cell ${field.classname}`} key={field.key}>
              <h1>{field.label}</h1>
              <p
                className={
                  field.key === "status"
                    ? `status ${getNestedPpty(employeeDetail, field.key)}`
                    : ""
                }
              >
                {getNestedPpty(employeeDetail, field.key)}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
export default EmployeeDetails;

// {employeeDetail && (
//   <div className="detailcontainer">
//     <div class="cell">
//       <h1>Employee name </h1>
//       <p>{employeeDetail.name}</p>
//     </div>
//     <div class="cell">
//       <h1>Joining Date</h1>
//       <p>{employeeDetail.jdate}</p>
//     </div>
//     <div class="cell">
//       <h1>Experience</h1>
//       <p>{employeeDetail.exp}</p>
//     </div>
//     <div class="cell">
//       <h1>Role</h1>
//       <p>{employeeDetail.role}</p>
//     </div>
//     <div class="cell">
//       <h1>Status</h1>
//       <div className="statuscontainer">
//         <div
//           className="status"
//           id={`${
//             employeeDetail.status === "Probation"
//               ? "yellow"
//               : employeeDetail.status === "Inactive"
//               ? "red"
//               : "green"
//           }`}
//         >
//           {employeeDetail.status}{" "}
//         </div>
//       </div>
//     </div>
//     <div class="cell">
//       <h1>Department</h1>
//       <p>{employeeDetail.department.name}</p>
//     </div>
//     <div class="cell address">
//       <h1>Address</h1>
//       <p>{`${employeeDetail.address.line1},${employeeDetail.address.pincode}`}</p>
//     </div>
//     <div class="cell id">
//       <h1>Employee ID</h1>
//       <p>{employeeDetail.id}</p>
//     </div>
//   </div>
// )}
