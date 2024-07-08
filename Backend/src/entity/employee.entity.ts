import { Column, Entity, ManyToOne, OneToOne, Unique } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./address.entity";
import { Role } from "../utils/role.enum";
import Department from "./department.entity";
@Entity()
@Unique(["email"])
class Employee extends AbstractEntity {
  @Column()
  name: string;
  
  @Column()
  email: string;

  @OneToOne(() => Address, (address) => address.employee, {
    cascade: true,
    onDelete: "CASCADE",
  })
  address: Address;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  role: Role;


  @ManyToOne(() => Department, (department) => department.employee)
  department: Department;
}
export default Employee;