import Employee from "../entity/Employee.entity";
import Address from "../entity/address.entity";
import HttpException from "../exceptions/http.exceptions";
import EmployeeRepository from "../repository/employee.repository";
import DepartmentRepository from "../repository/department.repository";
import { Role } from "../utils/role.enum";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import Department from "../entity/department.entity";
import { Repository } from "typeorm";
class EmployeeService {
  constructor(
    private employeeRepository: EmployeeRepository,
    private departmentRespository: DepartmentRepository
  ) {
    this.employeeRepository = employeeRepository;
    this.departmentRespository = departmentRespository;
  }
  loginEmployeeService = async (email: string, password: string) => {
    const employee = await this.employeeRepository.findOneBy({ email });
    if (!employee) {
      throw new HttpException(403, "No such user");
    }
    if (!(await bcrypt.compare(password, (await employee).password))) {
      throw new HttpException(403, "incorrect password");
    }
    const payload = {
      name: employee.name,
      email: employee.email,
      role: employee.role,
    };
    const token = sign(payload, process.env.JWTSECRETKEY, { expiresIn: "36h" });
    return { token };
  };

  getAllEmployeees = async () => this.employeeRepository.find();

  getEmployeeById = async (id: number) =>
    this.employeeRepository.findOneBy({ id });

  updateEmployee = async ( employee: any) => {
    const employeeIfThere = await this.getEmployeeById(employee.id);
    if (!employeeIfThere) {
      throw new HttpException(404, "Not found Employee");
    }
    if (employee.department){
      const department = await this.departmentRespository.findOneBy({
        name: employee.department.name,
      });
      employee.department= department
      employee.address.id = employeeIfThere.address.id
      console.log("Department is",department)
    }
    console.log(employee)
    return this.employeeRepository.save(employee);
  };
  createEmployee = async (
    email: string,
    name: string,
    address: any,
    password: string,
    role: Role,
    department: Department
  ) => {
    const departmentData = await this.departmentRespository.findOneBy({
      name: department.name,
    });
    if (!departmentData) {
      throw new HttpException(404, "Department Not Found");
    }
    const newEmployee = new Employee();
    newEmployee.email = email;
    newEmployee.name = name;
    newEmployee.department = departmentData;

    const newAddress = new Address();
    newAddress.line1 = address.line1;
    newAddress.pincode = address.pincode;
    newEmployee.address = newAddress;
    newEmployee.password = await bcrypt.hash(password, 10);
    console.log("password", password);
    newEmployee.role = role;
    console.log("new employee", newEmployee);
    this.employeeRepository.save(newEmployee);
  };
  deleteEmployeeById = async (id: number) => {
    const employeeIfThere = await this.getEmployeeById(id);
    if (!employeeIfThere) {
      throw new HttpException(404, "Not found Employee");
    }
    this.employeeRepository.delete(id);
  };
}

export default EmployeeService;
