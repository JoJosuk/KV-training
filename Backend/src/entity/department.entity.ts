import { Column, Entity, ManyToOne, OneToMany, Unique } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Employee from "./employee.entity";
import { DepartmentNames } from "../utils/department.enum";

@Entity()
@Unique(["name"])
export default class Department extends AbstractEntity {
  @Column()
  name: String;

  @OneToMany(() => Employee, (employee) => employee.department)
  employee: Employee[];
}
