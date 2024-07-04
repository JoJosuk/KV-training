import { DataSource } from "typeorm";
import Employee from "../entity/Employee.entity";

class EmployeeRepository {
  constructor(private dataSource: DataSource) {}
  find = async () => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.find();
  };

  findOneBy = async (filter: Partial<Employee>) => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.findOne({ where: filter });
  };

  save = async (newEmployee: Employee) => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    console.log(newEmployee)
    const something = await employeeRepository.save(newEmployee);
    console.log("save",something)
    return something
  };

  update = async (id: number, updateEmployee: Partial<Employee>) => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.update({ id }, updateEmployee);
  };
  delete = async (id: number) => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.softDelete(id);
  };
}
export default EmployeeRepository;
