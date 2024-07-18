import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CreateEmployeeHeader from "../Pages/Employee/CreateEmployee/CreateEmployeeHeader";
import CreateEmployeeSideBar from "../Pages/Employee/CreateEmployee/CreateEmployeeSideBar";
const HeaderLayout = ({ state, dispatch }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      alert("Please login to further ");
      navigate("/");
    }
  }, []);
  return (
    <div className="stylechanger">
      <CreateEmployeeHeader />
      <div className="mainwrapper">
        <CreateEmployeeSideBar />
        <Outlet context={{ state, dispatch }} />
      </div>
    </div>
  );
};
export default HeaderLayout;
