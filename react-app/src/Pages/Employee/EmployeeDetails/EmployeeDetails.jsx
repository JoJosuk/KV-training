import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContext } from "../../../ToastContext";
import { useContext } from "react";
import "./EmployeeDetails.scss";
import { useGetEmployeeDetailsQuery } from "../EmployeeList/api";
import { Fields } from "./Fields";
import { dateformat } from "./dateformat";
import { getNestedPpty } from "./getNestedPpty";
const EmployeeDetails = () => {
  const { id } = useParams();
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
                {dateformat(getNestedPpty(employeeDetail, field.key))}
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
