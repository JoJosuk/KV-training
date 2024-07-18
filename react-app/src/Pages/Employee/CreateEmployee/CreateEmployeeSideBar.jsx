import { useNavigate } from "react-router-dom";
import EmployeeIcon from "../../../assets/icon.svg";

const CreateEmployeeSideBar = () => {
  const navigate = useNavigate();
  const Signout = () => {
    localStorage.clear("token");
    navigate("/");
  };
  const ListEmployee = () => {
    navigate("/employee");
  };
  const CreateEmployee = () => {
    navigate("/employee/create");
  };
  const sideBarComponents = [
    {
      id: 1,
      image: EmployeeIcon,
      content: "List Employee",
      func: ListEmployee,
    },
    {
      id: 2,
      image: EmployeeIcon,
      content: "Create Employee",
      func: CreateEmployee,
    },
    {
      id: 3,
      image: EmployeeIcon,
      content: "Sign out",
      func: Signout,
    },
  ];

  return (
    <aside>
      {sideBarComponents.map((component) => (
        <div
          key={component.id}
          id={`${component.id === 3 ? "bottomasidediv" : ""}`}
          onClick={component.func}
        >
          <div className="aside1">
            <div className="aside2">
              <img src={component.image} alt={component.content} />
            </div>

            <p>{component.content}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};
export default CreateEmployeeSideBar;
