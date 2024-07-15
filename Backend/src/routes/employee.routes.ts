import EmployeeController from "../controller/employee.controller";
import EmployeeRepository from "../repository/employee.repository";
import EmployeeService from "../service/employee.service";
import dataSource from "../db/data-source.db";
import Employee from "../entity/employee.entity";
import Department from "../entity/department.entity";
import DepartmentRepository from "../repository/department.repository";
import DepartmentService from "../service/department.service";

const departmentService = new DepartmentService(
  new DepartmentRepository(dataSource.getRepository(Department))
);

const employeeController = new EmployeeController(
  new EmployeeService(
    new EmployeeRepository(dataSource.getRepository(Employee)),
    departmentService
  )
);

const employeeRouter = employeeController.router;

export default employeeRouter;
