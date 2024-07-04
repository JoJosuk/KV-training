import { DataSource } from "typeorm";
import Employee from "../entity/Employee.entity";
import { join } from "path";

class EmployeeRepository {
  constructor(private dataSource: DataSource) {}
  find = async () => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.find({relations:['address']});
  };

  findOneBy = async (filter: Partial<Employee>) => {
    const employeeRepository = this.dataSource.getRepository(Employee);
    return employeeRepository.findOne({ where: filter,relations:['address'] });
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
    const deleteData = await this.findOneBy({id})
    console.log("datatoBeDeleted",deleteData)
    return employeeRepository.softRemove(deleteData);
  };
}
export default EmployeeRepository;
