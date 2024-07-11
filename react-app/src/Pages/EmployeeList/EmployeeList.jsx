import "./EmployeeList.scss";

const dateformat = (datestring) => {
  const date = new Date(datestring);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart("0", 2);
  const day = date.getDay().toString().padStart("0", 2);
  console.log(day, month, year);
  return `${day}.${month}.${year}`;
};
const findExperience = (datestring) => {
  const date = new Date(datestring);
  const nowDate = new Date();
  const exp = nowDate - date;
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;
  const differenceyears = Math.floor((exp / msInYear) * 1000) / 1000;
  return `${differenceyears} Years`;
};
const tempEmployeeList = [
  {
    id: 12,
    status: "Probation",
    createdAt: "2024-07-08T01:52:07.230Z",
    updatedAt: "2024-07-08T02:53:32.068Z",
    deletedAt: null,
    name: "Reenphy",
    email: "reenphy@hotmail.com",
    role: "UX",
    address: {
      id: 12,
      createdAt: "2024-07-08T01:52:07.230Z",
      updatedAt: "2024-07-08T01:52:07.230Z",
      deletedAt: null,
      line1: "Bye pass road , kanjirapily",
      pincode: "456691",
    },
    department: {
      id: 5,
      createdAt: "2024-07-08T01:51:49.902Z",
      updatedAt: "2024-07-08T01:51:49.902Z",
      deletedAt: null,
      name: "Human Resources",
    },
  },
  {
    id: 13,
    status: "Inactive",
    createdAt: "2024-07-08T05:22:54.850Z",
    updatedAt: "2024-07-08T05:22:54.850Z",
    deletedAt: null,
    name: "haritha",
    email: "haritha@gmail.com",
    role: "UX",
    address: {
      id: 16,
      createdAt: "2024-07-08T05:22:54.850Z",
      updatedAt: "2024-07-08T05:22:54.850Z",
      deletedAt: null,
      line1: "Bye pass road , kanjirapily",
      pincode: "456691",
    },
    department: {
      id: 5,
      createdAt: "2024-07-08T01:51:49.902Z",
      updatedAt: "2024-07-08T01:51:49.902Z",
      deletedAt: null,
      name: "Human Resources",
    },
  },
  {
    id: 14,
    status: "Active",
    createdAt: "2024-07-08T05:36:55.176Z",
    updatedAt: "2024-07-08T05:36:55.176Z",
    deletedAt: null,
    name: "haritha",
    email: "haritha@gmailgd.com",
    role: "UX",
    address: {
      id: 17,
      createdAt: "2024-07-08T05:36:55.176Z",
      updatedAt: "2024-07-08T05:36:55.176Z",
      deletedAt: null,
      line1: "Bye pass road , kanjirapily",
      pincode: "456691",
    },
    department: {
      id: 7,
      createdAt: "2024-07-08T05:35:11.290Z",
      updatedAt: "2024-07-08T05:35:11.290Z",
      deletedAt: null,
      name: "Devops",
    },
  },
];
const status = "inactive";
const EmployeeList = () => {
  return (
    <main>
      <section className="sec1">
        <h1>Employee List</h1>
        <div className="filterbox">
          <p>Filter by </p>
          <select></select>
        </div>
        <div className={`${status.toLowerCase()} status-pill`}>
          <p>{status}</p>
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
            {tempEmployeeList.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.id}</td>
                <td>{dateformat(employee.createdAt)}</td>
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
                <td>{findExperience(employee.createdAt)}</td>
                <td>
                  <div className="wrapicons">
                    <div
                      className="deleteicon"
                      onClick={() => {
                        console.log("deleted id", employee.id);
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
                      className="editicon"
                      onClick={() => {
                        console.log("to be edited ", employee.id);
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
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default EmployeeList;
