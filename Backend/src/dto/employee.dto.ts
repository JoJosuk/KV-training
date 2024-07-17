import {
  IsEmail,
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
  IsEnum,
  IsNumber,
  IsDate,
  IsDateString,
} from "class-validator";
import Address from "../entity/address.entity";
import { CreateAddressDto, UpdateAddressDto } from "./address.dto";
import { Exclude, Type } from "class-transformer";
import { Role } from "../utils/role.enum";
import "reflect-metadata";
import { CreateDepartmentDto, UpdateDepartmentDto } from "./department.dto";
import Department from "../entity/department.entity";
import { Status } from "../utils/status.enum";
export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsEnum(Status)
  status: Status;
  @IsNumber()
  @IsNotEmpty()
  experience: number;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsNotEmpty()
  @IsDateString()
  jdate: Date;

  @ValidateNested()
  @Type(() => CreateDepartmentDto)
  department: Department;
}

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @IsNumber()
  @IsOptional()
  experience?: number;

  @IsDateString()
  @IsOptional()
  jdate: Date;

  @ValidateNested({ each: true })
  @Type(() => UpdateAddressDto)
  address: UpdateAddressDto;

  @ValidateNested()
  @Type(() => UpdateDepartmentDto)
  department: Department;
}

export class OutputEmployeeDto {
  @Exclude()
  password: string;
}
