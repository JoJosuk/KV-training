import { useParams } from "react-router-dom";
import tempEmployeeList from "../../../utils/dummyData";
import { useEffect, useState } from "react";

import "./EmployeeDetails.scss";
const EmployeeDetails = () => {
  const { id } = useParams();
  const [employeeDetail, setEmployeeDetail] = useState();
  useEffect(() => {
    const details = tempEmployeeList.filter(
      (employee) => employee.id === parseInt(id)
    );
    if (details.length === 0) {
      console.log("error");
      throw new Error();
    }
    console.log("details", details[0]);
    setEmployeeDetail(details[0]);
  }, []);
  return (
    <main>
      <section className="sec1">
        <h1>Employee Details</h1>
      </section>
      {employeeDetail && (
        <div className="detailcontainer">
          <div class="cell">
            <h1>Employee name </h1>
            <p>{employeeDetail.name}</p>
          </div>
          <div class="cell">
            <h1>Joining Date</h1>
            <p>{employeeDetail.jdate}</p>
          </div>
          <div class="cell">
            <h1>Experience</h1>
            <p>{employeeDetail.exp}</p>
          </div>
          <div class="cell">
            <h1>Role</h1>
            <p>{employeeDetail.role}</p>
          </div>
          <div class="cell">
            <h1>Status</h1>
            <div className="statuscontainer">
              <div
                className="status"
                id={`${
                  employeeDetail.status === "Probation"
                    ? "yellow"
                    : employeeDetail.status === "Inactive"
                    ? "red"
                    : "green"
                }`}
              >
                {employeeDetail.status}{" "}
              </div>
            </div>
          </div>
          <div class="cell">
            <h1>Department</h1>
            <p>{employeeDetail.department.name}</p>
          </div>
          <div class="cell address">
            <h1>Address</h1>
            <p>{`${employeeDetail.address.line1},${employeeDetail.address.pincode}`}</p>
          </div>
          <div class="cell id">
            <h1>Employee ID</h1>
            <p>{employeeDetail.id}</p>
          </div>
        </div>
      )}
    </main>
  );
};
export default EmployeeDetails;
