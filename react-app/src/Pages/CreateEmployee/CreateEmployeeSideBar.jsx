import EmployeeIcon from "../../assets/icon.svg"  
const CreateEmployeeSideBar = () => {
  return (
    <aside>
      <div>
        <div>
          <img src={EmployeeIcon} alt="Employee list " />
        </div>

        <p>Employee List</p>
      </div>
    </aside>
  );
};
export default CreateEmployeeSideBar;
