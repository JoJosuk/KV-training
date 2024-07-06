import { DataSource, Repository } from "typeorm";
import Employee from "../entity/Employee.entity";
import { join } from "path";

class EmployeeRepository {
  constructor(private employeeRepository:Repository<Employee>) {
    this.employeeRepository= employeeRepository
    
  }

  find = async () => {
    return this.employeeRepository.find({relations:['address']});
  };

  findOneBy = async (filter: Partial<Employee>) => {
    return this.employeeRepository.findOne({ where: filter,relations:['address'] });
  };

  save = async (newEmployee: Employee) => {
    console.log(newEmployee)
    const something = await this.employeeRepository.save(newEmployee);
    console.log("save",something)
    return something
  };

  update = async (id: number, updateEmployee: Partial<Employee>) => {
    return this.employeeRepository.update({ id }, updateEmployee);
  };
  delete = async (id: number) => {
    const deleteData = await this.findOneBy({id})
    console.log("datatoBeDeleted",deleteData)
    return this.employeeRepository.softRemove(deleteData);
  };
}
export default EmployeeRepository;
