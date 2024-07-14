import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CreateEmployeeHeader from "../Pages/CreateEmployee/CreateEmployeeHeader";
import CreateEmployeeSideBar from "../Pages/CreateEmployee/CreateEmployeeSideBar";
const HeaderLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token && token !== "true") {
      alert("Please login to further ");
      navigate("/");
    }
  }, []);
  return (
    <div className="stylechanger">
      <CreateEmployeeHeader />
      <div className="mainwrapper">
        <CreateEmployeeSideBar />
        <Outlet />
      </div>
    </div>
  );
};
export default HeaderLayout;