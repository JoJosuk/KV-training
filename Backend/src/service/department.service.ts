import Department from "../entity/department.entity";
import HttpException from "../exceptions/http.exceptions";
import DepartmentRepository from "../repository/department.repository";

export default class DepartmentService {
  constructor(private departmentRepository: DepartmentRepository) {}

  getAllDepartment = async () => this.departmentRepository.find();
  createDepartment = async (name: string) => {
    const newDepartment = new Department();
    newDepartment.name = name;
    return this.departmentRepository.save(newDepartment);
  };
  getDepartmentByName = async (name: string) => {
    const department = await this.departmentRepository.findOneBy({
      name: name,
    });
    if (!department) {
      throw new HttpException(404, "Not found Department");
    }
    return department;
  };
  getDepartmentById = async (id: number) => {
    const department = await this.departmentRepository.findOneBy({ id });
    if (!department) {
      throw new HttpException(404, "Not found Department");
    }
    return department;
  };
  updateDepartment = async (id: number, name: string) => {
    const updateDepartment = await this.departmentRepository.findOneBy({ id });
    if (!updateDepartment) {
      throw new HttpException(404, "Not found Department");
    }
    updateDepartment.name = name;
    return this.departmentRepository.save(updateDepartment);
  };
  deleteDepartment = async (id: number) => {
    const departmentToBeDeleted = await this.departmentRepository.findOneBy({
      id,
    });
    if (!departmentToBeDeleted) {
      throw new HttpException(404, "Not found Department");
    }
    if (departmentToBeDeleted.employee.length > 0) {
      throw new HttpException(
        400,
        "Employees of repository exists so deletion not possible"
      );
    }
    return this.departmentRepository.delete(id);
  };
}
