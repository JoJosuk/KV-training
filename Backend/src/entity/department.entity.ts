import { Column, Entity, ManyToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Employee from "./Employee.entity";
import { DepartmentNames } from "../utils/department.enum";

@Entity()
export default class Department extends AbstractEntity {
  @Column()
  name: String;

  @ManyToOne(() => Employee, (employee) => employee.department)
  employee: Employee[];
}
