import Employee from "../entity/Employee.entity";
import Address from "../entity/address.entity";
import HttpException from "../expceptions/http.exceptions";
import EmployeeRepository from "../repository/employee.repository";

class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}

  getAllEmployeees = async () => this.employeeRepository.find();

  getEmployeeById = async (id: number) =>
    this.employeeRepository.findOneBy({ id });

  updateEmployee = async (id: number, employee: Partial<Employee>) => {
    const employeeIfThere = this.getEmployeeById(id);
    return this.employeeRepository.update(id, employee);
  };
  createEmployee = async (email: string, name: string, address: any) => {
    
    const newEmployee = new Employee();
    newEmployee.email = email;
    newEmployee.name = name;

    const newAddress = new Address();
    newAddress.line1 = address.line1;
    newAddress.pincode = address.pincode;
    newEmployee.address = newAddress;
    console.log("new employee",newEmployee)
    this.employeeRepository.save(newEmployee);
  };
  deleteEmployeeById = async (id: number) => {
    const employeeIfThere = await this.getEmployeeById(id);
    if (!employeeIfThere){
      throw new HttpException(404,"Not found Employee")
    }
    this.employeeRepository.delete(id)
  };
}

export default EmployeeService;
