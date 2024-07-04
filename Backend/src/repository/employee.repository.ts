import { DataSource } from "typeorm";
import Employee from "../entity/Employee.entity";

class EmployeeRepository {
  constructor(private dataSource: DataSource) {}
  find = async () => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.find();
  };

  findOneBy = async (filter: Partial<Employee>) => {
    const emploeyeeRepository = this.dataSource.getRepository(Employee);
    return emploeyeeRepository.findOne({ where: filter });
  };

  save = async (newEmployee: Employee) => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.save(newEmployee);
  };

  update = async (id: number, updateEmployee: Partial<Employee>) => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.update({ id }, updateEmployee);
  };
  delete = async (id: number) => {
    const emploeyeeRepository = this.dataSource.getRepository(Employee);
    return emploeyeeRepository.softDelete(id);
  };
}
export default EmployeeRepository;
