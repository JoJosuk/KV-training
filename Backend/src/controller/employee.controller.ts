import EmployeeService from "../service/employee.service";
import express from "express";
class EmployeeController {
  public router: express.Router;
  constructor(private employeeService: EmployeeService) {
    this.router = express.Router();
    this.router.get("/", this.getAllEmployees);
    this.router.get("/:id", this.getEmployeesById);
    this.router.post("/", this.createEmployee);
    this.router.put("/:id", this.updateEmployee);
    this.router.delete("/:id", this.deleteEmployeeById);
  }
  public getAllEmployees = async (
    req: express.Request,
    res: express.Response
  ) => {
    const employees = await this.employeeService.getAllEmployeees();
    return res.status(200).json(employees);
  };
  public getEmployeesById = async (
    req: express.Request,
    res: express.Response
  ) => {
    const employee = await this.employeeService.getEmployeeById(
      Number(req.params.id)
    );
    return res.status(200).json(employee);
  };
  public createEmployee = async (
    req: express.Request,
    res: express.Response
  ) => {
    const employeeData = await this.employeeService.createEmployee(req.body);
    res.status(201).json(employeeData);
  };
  public updateEmployee = async (
    req: express.Request,
    res: express.Response
  ) => {
    const updateEmployeeStatus = await this.employeeService.updateEmployee(
      Number(req.params.id),
      { name: req.body.name, email: req.body.email }
    );
    return res.status(200).json(updateEmployeeStatus);
  };
  public deleteEmployeeById = async (
    req: express.Request,
    res: express.Response
  ) => {
    const deleteEmployeeStatus = await this.employeeService.deleteEmployeeById(
      Number(req.params.id)
    );
    return res.status(200).json(deleteEmployeeStatus);
  };
}
export default EmployeeController;
