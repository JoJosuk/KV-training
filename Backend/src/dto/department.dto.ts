import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { OutputEmployeeDto } from "./employee.dto";
import Employee from "../entity/Employee.entity";
import { Type } from "class-transformer";

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateDepartmentDto {
  @IsString()
  @IsOptional()
  name?: string;
}

export  class OutputDepartmentDto{

  @ValidateNested()
  @IsOptional()
  @Type(()=>OutputEmployeeDto)
  employee:Employee

}