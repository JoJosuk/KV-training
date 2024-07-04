import Employee from "../entity/Employee.entity";
import EmployeeRepository from "../repository/employee.repository";

class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {
  }

  getAllEmployeees = async () => this.employeeRepository.find();

  getEmployeeById = async (id: number) =>
    this.employeeRepository.findOneBy({ id });

  updateEmployee = async (id: number, employee: Partial<Employee>) => {
    const employeeIfThere = this.getEmployeeById(id);
    return this.employeeRepository.update(id, employee);
  };
  createEmployee = async (employee: Employee) =>
    this.employeeRepository.save(employee);
  deleteEmployeeById = async (id: number) => this.employeeRepository.delete(id);
}

export default EmployeeService;
