import { Repository } from "typeorm";
import Department from "../entity/department.entity";

export default class DepartmentRepository {
  constructor(private departmentRepostory: Repository<Department>) {
    this.departmentRepostory = departmentRepostory;
  }
  find = async () => this.departmentRepostory.find({relations:["employee"]});
  findOneBy = async (filter: Partial<Department>) => {
    return this.departmentRepostory.findOne({ where: filter,relations:["employee"]});
  };
  save = async (newDepartment: Department) => {
    const something = await this.departmentRepostory.save(newDepartment);
    return something
  };
  delete = async (id: number) => {
    const deleteData = await this.findOneBy({id})
    console.log("datatoBeDeleted",deleteData)
    return this.departmentRepostory.softRemove(deleteData);
  };
}
